import { ITimeParameter } from "@/interfaces/timeParameter";

export interface IConstructorData {
    type: string,
    stopTime: ITimeParameter,
    startTime?: ITimeParameter,
    scale?: string
}