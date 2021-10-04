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

/**
 * @description функция преобразования из '2021-06-28 03:35:26' в timestamp
 *
 * Так же в функции происходит смена формата времени: с '2021-06-28 03:35:26' на '2021/06/28 03:35:26',
 * это необходимо для корректной работы в Safari
 *
 * @param { TDate } value  - Изменяемая дата
 * @return { number }
 */
export const transformTimestamp = function (value: TDate): number {
    return typeof value === 'string' ? Date.parse(value.replace(/-/g, '/')) : value
}
