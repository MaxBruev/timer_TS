import {$CalculateTime} from "../calculation/calculateTime";
import {ITimeParameter} from "../../interfaces/timeParameter";
import {IConstructorData} from "../../interfaces/constructorData";

/**
 * @class ТАЙМЕР обратного отсчета.
 */
export class $TimerBack extends $CalculateTime {

    constructor(stopTime: ITimeParameter, startTime?: ITimeParameter) {
        const data: IConstructorData = {
            type: 'timerBack',
            stopTime,
            startTime
        }
        super(data)
    }

    public start():void {
        this.calculate()
    }

    public stop(): void {
        this.stopTimer()
    }

    public get timerFull(): string {
        return this.timeValues.timerFull
    }

    public get seconds(): string {
        return this.timeValues.seconds;
    }

    public get minutes(): string {
        return this.timeValues.minutes;
    }

    public get hours(): string {
        return this.timeValues.hours;
    }

    public get days(): string {
        return this.timeValues.days;
    }

    public get isOverTime(): boolean {
        return this.timeIsUp;
    }
}