import { ITimeParameter } from "@/interfaces/timeParameter";
import { TDate } from "@/types/date";

export const getMillisecondsStopTime = (value: ITimeParameter): number => {
    let milliseconds: number = 0

    if (value.timestamp) {
        milliseconds = transformTimestamp(value.timestamp)
    }

    if (value.milliseconds) {
        milliseconds = value.milliseconds
    }

    return milliseconds
}

export const getMillisecondsStartTime = (value: ITimeParameter): number => {
    let milliseconds: number = 0

    if (value.timestamp) {
        const startTime: number = transformTimestamp(value.timestamp)
        const checkTime: number = startTime - Date.now()

        if (checkTime > 0) {
            milliseconds = startTime
        } else {
            milliseconds = Date.now()
        }
    }

    if (value.milliseconds) {
        milliseconds = value.milliseconds
    }

    return milliseconds
}

export const getMillisecondsRemainingTime = function (end: ITimeParameter, start?: ITimeParameter, repeat?:boolean ): number {
    let result: number = 0

    const dateNow: number = Date.now()
    const dateEnd = getMillisecondsStopTime(end)

    if (end.timestamp) {
        result = dateEnd - dateNow
    }
    if (end.milliseconds || start?.milliseconds) {
        result = dateEnd
    }
    if (start?.milliseconds && end.timestamp) {
        const dateStart = getMillisecondsStartTime(start)

        result = repeat ? dateEnd - dateNow : dateEnd - dateNow - dateStart
    }

    return result
}

export const transformTimestamp = function (value: TDate): number {
    return typeof value === 'string' ? Date.parse(value.replace(/-/g, '/')) : value
}
