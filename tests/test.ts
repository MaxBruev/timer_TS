import $TimerBack from "@/classes/timers/timerBack";

const stopTime = {
    milliseconds: 10000
}

const EX_Timer: $TimerBack = new $TimerBack( stopTime )

console.log(EX_Timer)