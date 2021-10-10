import { $Timer } from "@/classes/baseClassTimer";
import { getMillisecondsStartTime, getMillisecondsRemainingTime } from "@/functions/parsersFunctions";
import { checkPointStartTime, checkTimeIsOver} from "@/functions/checkingFunctions";
import { transformationTime } from "@/functions/transformationTime";
import { IConstructorData } from "@/interfaces/constructorData";

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
            this.timeIsUp = checkTimeIsOver(data.stopTime, data.startTime)
        }
    }

    private calculateTimerBack(): void {
        let dateNow;
        let remainingTime;
        let repeat
        let currentStartTime = getMillisecondsStartTime(this.pointStartTime)

        this._timer = setInterval(() => {
            dateNow = Date.now();
            repeat = currentStartTime !== 0
            remainingTime = getMillisecondsRemainingTime(this.pointStopTime, this.pointStartTime, repeat)

            if (remainingTime > 0 && !this.timeIsUp) {
                this.timeValues = transformationTime(remainingTime)

                if (this.pointStopTime) {
                    currentStartTime -= 1000
                }
            } else {
                this.timeValues.seconds = '00';
                this.timeValues.timerFull = '00:00:00:00'
                this.timeIsUp = true;

                clearInterval(this._timer);
            }
        }, 1000);
    }

    protected calculate(): void {
        if (this.isTimerBack) {
            if (this.pointStartTime && !this.timeIsUp) {
                checkPointStartTime(this.pointStartTime, (status: boolean) => {
                    if (status) {
                        this.calculateTimerBack()
                    } else {
                        const remainingTime = getMillisecondsRemainingTime(this.pointStopTime, this.pointStartTime)

                        this.timeValues = transformationTime(remainingTime)
                    }
                })
            } else {
                this.calculateTimerBack()
            }
        }

        if (this.isTimerForward) {

        }
    }

    protected stopTimer(): void {
        clearInterval(this._timer);
    }
}