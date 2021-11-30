import {ITimeParameter} from "../interfaces/timeParameter";
import {ITransformationTime} from "../interfaces/transformationTime";
import {TScale} from "../types/scale";

export abstract class $Timer {
 protected pointStopTime: ITimeParameter
 protected pointStartTime: ITimeParameter

 protected isTimerBack: boolean
 protected isTimerForward: boolean
 protected timeIsUp: boolean

 protected scale: TScale

 protected timeValues: ITransformationTime
}