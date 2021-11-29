import {getMillisecondsStartTime, getMillisecondsStopTime, transformTimestamp} from "./parsersFunctions";
import {ITimeParameter} from "../interfaces/timeParameter";

/**
 * @description функция проверки актуальности точки начала отсчета.
 *
 * @param { ITimeParameter } startIn  - Когда должен начаться отсчет
 * @param { any } callback  - Ответ функции
 *
 * @return { string }
 */
export const checkPointStartTime = (startIn: ITimeParameter, callback: any): void => {
    if (startIn.timestamp) {
        let dateStart = transformTimestamp(startIn.timestamp)
        let timeout: number = dateStart - Date.now();

        callback(false)

        if (timeout <= 0) {
            callback(true)
        }
        if (timeout > 0) {
            setTimeout(() => {
                callback(true)
            }, timeout)
        }
    }

    if (startIn.milliseconds) {
        callback(false)

        setTimeout(() => {
            callback(true)
        }, startIn.milliseconds)
    }
}

/**
 * @description фугкция проверки актуальности времени(заокончилось оно или нет).
 *
 * Если isTimeUp === true, если время закончилось
 *
 * @param { ITimeParameter } stop   - Когда должнен остановиться отсчет
 * @param { ITimeParameter } start  - Когда должен начаться отсчет
 *
 * @return { boolean }
 */
export const checkTimeIsOver = (stop: ITimeParameter, start?: ITimeParameter): boolean => {
    let isTimeUp: boolean

    let stopTime: number = getMillisecondsStopTime(stop);

    if (start?.timestamp && stop.timestamp) {
        const startTime = getMillisecondsStartTime(start);
        const difference: number = stopTime - startTime

        isTimeUp = difference <= 0;
    } else if(start?.milliseconds && stop.timestamp) {
        isTimeUp = stopTime <= Date.now();
    } else {
        isTimeUp = stopTime <= 0;
    }

    return isTimeUp
}

