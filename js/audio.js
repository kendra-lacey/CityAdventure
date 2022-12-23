let songs = {
  introSong: new Audio("../audio/intro.mp3"),
  lossSong: new Audio("../audio/loss.mp3"),
  winSong: new Audio("../audio/win.mp3")
}

function playSong(song) {
  songs[song].volume = 0.03
  songs[song].play()
  setTimeout(function(){
    songs[song].pause();
  },18000);
}

function stopSongs(){
  Object.values(songs).forEach(val => {
    val.pause()
  });
}

export {
  playSong,
  stopSongs
}