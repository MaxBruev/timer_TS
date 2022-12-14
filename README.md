# Timer


Пакет экспортит следующие классы:

$TimerBack - ТАЙМЕР обратного отсчета
$TimerForward - ТАЙМЕР отсчета времени вперед

## Usage:
**$TimerBack**
1. Создать новый экземпляр класса и передать в конструктор `"дата\время остановки таймера"`,  `"дата\время начала отсчета таймера"` (**_необязательный_**).

- **дата\время остановки таймера** - это объект `{milliseconds?: number, timestamp?: number | string}`.
   

   `milliseconds` - **через сколько остановится таймер** в миллисекундах (**10000**).

   `timestamp` - **когда остановится таймер** (**_"2021-08-27 14:44:22"_** или в timestamp **_1629700683254_**).

   
- **дата\время начала отсчета таймера** - это объект `{milliseconds?: number, timestamp?: number | string}`.

   `milliseconds` - **через сколько запустить таймер** в миллисекундах (**10000**). 

   `timestamp` - **когда запустить таймер** (**_"2021-08-27 14:44:22"_** или в timestamp **_1629700683254_**).


> Пример:
```
const stopTime = {
    milliseconds: 10000
    }
const startTime = {
    milliseconds: 5000
    }

const EX_TimerBack: $TimerBack = new $TimerBack(stopTime, startTime)
```


2. Запустить таймер с помощью метода `start()`

> Пример:
> `EX_TimerBack.start()`


3. Получить необходимое значение

> Пример:
> `EX_TimerBack.timerFull`


**$TimerForward**
1. Создать новый экземпляр класса и передать в конструктор `"дата\время остановки таймера"`, `"в чем измеряется"`

-  **дата\время остановки таймера** - это объект `{amount?: number | string}`
  
  
    `amount` - **когда остановится таймер**


-  **дата\время остановки таймера** - числовой формат (**10000**) c параметрами 'd', 'h', 'm', 's', 'ms'.

   `'date'` - "2021-08-27 14:44:22"

   `'d'` - дни

   `'h'` - часы

   `'m'` - минуты

   `'s'` - секунды

   `'ms'` - миллисекунды

> Пример:
```
const stopTime = {
    amount: 5
}
const scale = 's'

const EX_TimerForward: $TimerForward = new $TimerForward(stopTime, scale)
```


2. Запустить таймер с помощью метода `start()`

> Пример:
> `EX_TimerForward.start()`


3. Получить необходимое значение

> Пример:
> `EX_TimerForward.timerFull`


# **Геттеры**:

`timerFull` - возвращает все значения таймера ('00:00:00:00');

`seconds: string` - возвращает только секунды до остановки таймера ('00');

`minutes: string` - возвращает только минуты до остановки таймера ('00');

`hours: string` - возвращает только часы до остановки таймера ('00');

`days: string` - возвращает только дни до остановки таймера ('00');

`isOverTime: boolean` - возвращает `true` если таймер остановился.


# **Примечание**:

* Если в **ТАЙМЕР обратного отсчета** передать только **дату остановки таймера**, то таймер начнет отсчет текущевого времени

* Если в **ТАЙМЕР обратного отсчета** передать как **дату остановки таймера**, так и **дату начала отсчета таймера**, то: 

    - если **дата начала отсчета таймера** еще не наступила, то таймер будет ждать наступления данной даты, а потом начнет отсчет (пока это не случило, он будет возвращать статичное количесто времени до остановки таймера относительно заданых параметров)

    - если **дата начала отсчета таймера** уже прошала, то таймер возьмет текущее время и начнет отбратный отсчет от него
