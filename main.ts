function funcLoser () {
    basic.showIcon(IconNames.Sad)
    basic.pause(2000)
    basic.showNumber(winner)
    basic.showString("VANN")
}
input.onButtonPressed(Button.A, function () {
    basic.showString("ID NR")
    id = randint(0, 99999)
    basic.showNumber(id)
})
radio.onReceivedString(function (receivedString) {
    if (startBool == 0 && receivedString == "start") {
        startBool = 1
    }
    if (startBool == 1) {
        while ((input.buttonIsPressed(Button.B) || receivedString == "Wincondition") == false) {
            led.plotBarGraph(
            Math.map(signal, -95, -42, 0, 9),
            9
            )
        }
        if (input.buttonIsPressed(Button.B)) {
            signal = 0
            basic.pause(1000)
            if (receivedString == "Wincondition") {
                winner = id
                basic.showIcon(IconNames.Happy)
                basic.pause(5000)
                basic.showString("SEGER")
            } else {
                basic.showIcon(IconNames.Sad)
                if (receivedString == "Wincondition") {
                    funcLoser()
                }
            }
        } else {
            if (receivedString == "Wincondition") {
                funcLoser()
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
	
})
let id = 0
let winner = 0
let startBool = 0
let signal = 0
radio.setGroup(113)
signal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
startBool = 0
basic.forever(function () {
	
})
