import {$TimerBack} from "../src/classes/timers/timerBack";
import {$TimerForward} from "../src/classes/timers/timerForward";

// const testTimerBack = () => {
//     const stopTime = {
//         milliseconds: 10000
//     }
//     const startTime = {
//         milliseconds: 5000
//     }
//
//     const EX_TimerBack: $TimerBack = new $TimerBack(stopTime, startTime)
//
//     testTimer(EX_TimerBack)
// }

const testTimerForward = () => {
    const stopTime = {
        amount: 5
    }
    const scale = 's'

    const EX_TimerForward: $TimerForward = new $TimerForward(stopTime, scale)

    testTimer(EX_TimerForward)
}

const testTimer = (timer: $TimerBack | $TimerForward) => {
    timer.start()

    let _timer = setInterval(() => {
        if (!timer.isOverTime) {
            console.log(timer.timerFull)
        } else {
            console.log('все, привет!')
            clearInterval(_timer)
        }
    }, 1000)
}

testTimerForward()