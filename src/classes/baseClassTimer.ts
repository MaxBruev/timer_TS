import {ITimeParameter} from "../interfaces/timeParameter";
import {ITransformationTime} from "../interfaces/transformationTime";

export abstract class $Timer {
 protected pointStopTime: ITimeParameter
 protected pointStartTime: ITimeParameter

 protected isTimerBack: boolean
 protected isTimerForward: boolean
 protected timeIsUp: boolean

 protected timeValues: ITransformationTime
}