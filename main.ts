// Created by Vaughn Hatherall
// On october 7th
// 
// To use the potentiometer
// 
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P1))
    basic.pause(1000)
})
