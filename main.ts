input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
})
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (true) {
        basic.showNumber(0)
        music.playMelody("C5 B A G F E D C ", 120)
    }
})
basic.forever(function () {
	
})
