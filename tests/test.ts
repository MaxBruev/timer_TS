// import {$TimerBack} from "../src/classes/timers/timerBack";
import {$TimerForward} from "../src/classes/timers/timerForward";

const stopTime = {
    milliseconds: 10000
    // timestamp: '2021-11-29 18:00:00'
}

// const startTime = {
//     milliseconds: 5000
//     // timestamp: '2021-11-29 17:00:00'
// }

// const EX_Timer: $TimerBack = new $TimerBack(stopTime, startTime)
const EX_TimerForward: $TimerForward = new $TimerForward(stopTime, 's')

// EX_Timer.start()
EX_TimerForward.start()

let _timer = setInterval(() => {
    //TimerBack
    // if (!EX_Timer.isOverTime) {
    //     console.log(EX_Timer.timerFull)
    // } else {
    //     console.log('все, привет!')
    //     clearInterval(_timer)
    // }

    //TimerForward
    if (!EX_TimerForward.isOverTime) {
        console.log(EX_TimerForward.timerFull)
    } else {
        console.log('все, привет!')
        clearInterval(_timer)
    }
}, 1000)