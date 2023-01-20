let número = 0
input.onButtonPressed(Button.A, function () {
    número = 0
    while (número <= 10) {
        basic.showNumber(número)
        basic.pause(1000)
        número += 1
    }
    basic.pause(1000)
    basic.showString("FIM Boa Noite")
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    número = 10
    while (número >= 0) {
        basic.showNumber(número)
        basic.pause(1000)
        número += -1
    }
    basic.pause(1000)
    basic.showString("FIM Boa Noite")
    basic.pause(1000)
    basic.clearScreen()
})
