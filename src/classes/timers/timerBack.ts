import { $ParserForTimerBack } from "@/classes/parsers/parserForTimerBack";
import { ITimeParameter } from "@/interfaces/timeParameter";

/**
 * @class ТАЙМЕР обратного отсчета.
 */
class $TimerBack extends $ParserForTimerBack {

    /**
     * @param { ITimeParameter } stopTime    - Дата когда остановится таймер
     * @param { ITimeParameter } startTime   - Дата начала отсчета таймера(необязательный параметр)
     */
    constructor(stopTime: ITimeParameter, startTime: ITimeParameter) {
        super(stopTime, startTime)

        this.pointStopTime = this.transformedStopTime

        if (this.startTime) {
            this.pointStartTime = this.transformedStartTime
            this.timeIsUp = this.checkTimeIsUp
        }
    }
}