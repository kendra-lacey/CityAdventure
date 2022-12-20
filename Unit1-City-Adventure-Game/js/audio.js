let introSong = new Audio("../audio/intro.mp3")
let lossSong = new Audio("../audio/loss.mp3")
let winSong = new Audio("../audio/win.mp3")


function playIntroSong() {
  introSong.volume = 0.25
  introSong.play()
}

function playLossSong() {
  lossSong.volume = 0.25
  lossSong.play()
}

function playWinSong() {
  winSong.volume = 0.25
  winSong.play()
}