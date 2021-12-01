import {ITimeParameter} from "./timeParameter";

export interface IConstructorData {
    type: string,
    stopTime: ITimeParameter,
    startTime?: ITimeParameter,
    scale?: string | undefined
}