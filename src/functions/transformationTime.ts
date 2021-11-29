import {ITransformationTime} from "../interfaces/transformationTime";

export const transformationTime = (currentMs: number): ITransformationTime => {
    const result: ITransformationTime = {
        seconds: 'Время запуска еще не наступило',
        minutes: 'Время запуска еще не наступило',
        hours: 'Время запуска еще не наступило',
        days: 'Время запуска еще не наступило',
        timerFull: 'Время запуска еще не наступило'
    }

    if (currentMs !== 0) {
        result.seconds = `0${Math.floor((currentMs % (1000 * 60)) / 1000)}`.slice(-2)
        result.minutes = `0${Math.floor((currentMs % (1000 * 60 * 60)) / (1000 * 60))}`.slice(-2)
        result.hours = `0${Math.floor((currentMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}`.slice(-2)
        result.days = `${Math.floor(currentMs / (1000 * 60 * 60 * 24))}`.length <= 2 ? `0${Math.floor(currentMs / (1000 * 60 * 60 * 24))}`.slice(-2) : `${Math.floor(currentMs / (1000 * 60 * 60 * 24))}`
        result.timerFull = `${result.days}:${result.hours}:${result.minutes}:${result.seconds}`
    }

    return result
}
