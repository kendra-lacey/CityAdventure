/*-------------------------------- Constants --------------------------------*/
const titleEl= document.querySelector('.title')
const introSong = new Audio ("../audio/intro.mp3")
console.log(introSong)

/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/



/*----------------------------- Event Listeners -----------------------------*/
titleEl.addEventListener("click",function(evt){
  introSong.volume = .05
  introSong.play()
})


/*-------------------------------- Functions --------------------------------*/
