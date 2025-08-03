let start = 0
// 0=Geradeaus
// -1=Links
// 1=Rechts
// 2=Drehen
let Richtung = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        start = 1
    }
    if (input.buttonIsPressed(Button.B)) {
        start = 0
    }
    if (start == 1) {
        // Links
        if (Richtung == -1) {
            maqueen.setColor(0x0000ff)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 70)
        }
        if (Richtung == 0) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 200)
            maqueen.writeLED(maqueen.Led.LedAll, maqueen.LedSwitch.LedOn)
            maqueen.setColor(0x00ffff)
        }
        if (Richtung == 2) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 20)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 20)
            maqueen.writeLED(maqueen.Led.LedAll, maqueen.LedSwitch.LedOn)
            maqueen.setColor(0x00ffff)
        }
        if (Richtung == 1) {
            maqueen.setColor(0xff0000)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 70)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
        }
    }
})
// Ultraschallsensor drehen, dann messen, ob ein Hindernis kommt, wenn ein Hindernis kommt, dann Variable für andere Richtung setzen
basic.forever(function () {
    // Hindernis geradeaus
    maqueen.servoRun(maqueen.Servos.S1, 90)
    if (maqueen.ultrasonic(maqueen.DistanceUnit.Centimeters) < 20) {
        Richtung = 2
    }
    basic.pause(700)
    // links
    maqueen.servoRun(maqueen.Servos.S1, 120)
    if (maqueen.ultrasonic(maqueen.DistanceUnit.Centimeters) < 20) {
        Richtung = 1
    }
    basic.pause(700)
    // rechts
    maqueen.servoRun(maqueen.Servos.S1, 60)
    basic.pause(200)
    if (maqueen.ultrasonic(maqueen.DistanceUnit.Centimeters) < 20) {
        Richtung = -1
    }
    basic.pause(700)
    // Geradeaus
    if (maqueen.ultrasonic(maqueen.DistanceUnit.Centimeters) > 20) {
        Richtung = 0
    }
})
