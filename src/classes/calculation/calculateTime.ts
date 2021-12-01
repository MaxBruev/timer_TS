import { $Timer } from "../baseClassTimer";
import {getMillisecondsStartTime, getMillisecondsRemainingTime, getMillisecondsWhenStop} from "../../functions/parsersFunctions";
import { checkPointStartTime, checkTimeIsOver} from "../../functions/checkingFunctions";
import { transformationTime } from "../../functions/transformationTime";
import { IConstructorData } from "../../interfaces/constructorData";

export class $CalculateTime extends $Timer {
    private _timer: any;

    constructor (public data: IConstructorData) {
        super()

        this.pointStopTime = data.stopTime
        this.isTimerBack = data.type === 'timerBack'
        this.isTimerForward = data.type === 'timerForward'

        if (this.isTimerBack && data.startTime) {
            this.pointStartTime = data.startTime
            this.timeIsUp = checkTimeIsOver(data.stopTime, data.startTime)
        }

        if (this.isTimerForward) {
            this.scale = data.scale
        }
    }

    // ОСНОВНОЙ метод таймера обратного отсчета
    private calculateTimerBack(): void {
        let remainingTime;
        let repeat
        let currentStartTime = this.pointStartTime ? getMillisecondsStartTime(this.pointStartTime) : 0

        this._timer = setInterval(() => {
            repeat = currentStartTime !== 0
            remainingTime = getMillisecondsRemainingTime(this.pointStopTime, this.pointStartTime, repeat)

            if (remainingTime > 0 && !this.timeIsUp) {
                this.timeValues = transformationTime(remainingTime)

                if (this.pointStopTime.milliseconds) {
                    this.pointStopTime.milliseconds -= 1000
                }
            } else {
                this.timeValues.seconds = '00';
                this.timeValues.timerFull = '00:00:00:00'
                this.timeIsUp = true;

                clearInterval(this._timer);
            }
        }, 1000);
    }

    // ОСНОВНОЙ метод таймера отсчета вперед
    private calculateTimerForward(): void {
        let startPoint = 0

        this._timer = setInterval(() => {
            const stopPoint = getMillisecondsWhenStop(this.pointStopTime, this.scale)

            if (startPoint <= stopPoint) {
                this.timeValues = transformationTime(startPoint)

                startPoint += 1000
            } else {
                this.timeIsUp = true

                clearInterval(this._timer);
            }
        }, 1000)
    }

    // Метод для запуска таймеров
    protected calculate(): void {

        // Точка запуска таймера обратного отсчета
        if (this.isTimerBack) {

            // Если имеется точка начала старта, то делается проверк:
            // прошла точка начала старта или еще не наступила
            if (this.pointStartTime && !this.timeIsUp) {
                checkPointStartTime(this.pointStartTime, (status: boolean) => {
                    if (status) {
                        this.calculateTimerBack()
                    } else {
                        // Отправляем 0 чтобы предупредить, что время запуска еще не наступило
                        this.timeValues = transformationTime(0)
                    }
                })
            } else {
                this.calculateTimerBack()
            }
        }

        // Точка запуска таймера отсчета вперед
        if (this.isTimerForward) {
            this.calculateTimerForward()
        }
    }

    protected stopTimer(): void {
        clearInterval(this._timer);
    }
}