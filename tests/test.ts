import {$TimerBack} from "../src/classes/timers/timerBack";

const stopTime = {
    milliseconds: 10000
    // timestamp: '2021-11-29 18:00:00'
}

const startTime = {
    milliseconds: 5000
    // timestamp: '2021-11-29 17:00:00'
}

const EX_Timer: $TimerBack = new $TimerBack(stopTime, startTime)

EX_Timer.start()

let _timer = setInterval(() => {
    if (!EX_Timer.isOverTime) {
        console.log(EX_Timer.timerFull)
    } else {
        console.log('все, привет!')
        clearInterval(_timer)
    }
}, 1000)