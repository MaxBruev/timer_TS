import { $Timer } from "@/classes/baseClassTimer";
import { ITimeParameter } from "@/interfaces/timeParameter";
import {getMillisecondsStartTime, getMillisecondsStopTime} from "@/functions/parsersFunctions";
import {checkTimeIsOver} from "@/functions/checkingFunctions";

export class $ParserForTimerBack extends $Timer {

    constructor(public stopTime: ITimeParameter, public startTime?: ITimeParameter) {
        super()
    }

    get transformedStopTime(): number {
        return getMillisecondsStopTime(this.stopTime)
    }

    get transformedStartTime(): number {
        return getMillisecondsStartTime(this.startTime)
    }

    get checkTimeIsUp(): boolean {
        return checkTimeIsOver(this.stopTime, this.startTime)
    }
}