let RGB = 0
let LED = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    RGB = pins.map(
    pins.analogReadPin(AnalogPin.P1),
    0,
    200,
    0,
    23
    )
    basic.showNumber(RGB)
    LED.clear()
    LED.range(0, RGB).showRainbow(255, 0)
    LED.setBrightness(100)
    LED.show()
})
