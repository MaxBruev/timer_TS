import {ITimeParameter} from "../interfaces/timeParameter";
import {TDate} from "../types/date";
import {TScale} from "../types/scale";

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

export const getMillisecondsWhenStop = function (end: ITimeParameter, scale: TScale): number {
    let milliseconds = 0

    console.log(end)

    switch (scale) {
        case 'date':
            milliseconds = getMillisecondsStopTime(end)
            break
        case 'd':
            milliseconds = Number(end) * 1000 * 60 * 60 * 24
            break
        case 'h':
            milliseconds = Number(end) * 1000 * 60 * 60
            break
        case 'm':
            milliseconds = Number(end) * 1000 * 60
            break
        case 's':
            milliseconds = Number(end) * 1000
            break
        case 'ms':
            milliseconds = Number(end)
            break
    }

    return milliseconds
}

/**
 * @description - Функция преобразования исходных данных в миллесекунты
 *
 * Смена формата времени: с '2021-06-28 03:35:26' на '2021/06/28 03:35:26' необходима для
 * корректной работы в Safari
 *
 * @param { TDate } value - дата в формате timestamp или миллисекундах.
 *
 * @return { number }
 */
export const transformTimestamp = function (value: TDate): number {
    return typeof value === 'string' ? Date.parse(value.replace(/-/g, '/')) : value
}
