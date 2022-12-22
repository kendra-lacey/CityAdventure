let introSong = new Audio("../audio/intro.mp3")
let lossSong = new Audio("../audio/loss.mp3")
let winSong = new Audio("../audio/win.mp3")


function playIntroSong() {
  introSong.volume = 0.03
  introSong.play()
}

function playLossSong() {
  lossSong.volume = 0.15
  lossSong.play()
}

function playWinSong() {
  winSong.volume = 0.15
  winSong.play()
}

export {
  playIntroSong,
  playLossSong,
  playWinSong
}