/*-------------------------------- Constants --------------------------------*/
const introSong = new Audio ("../audio/intro.mp3")

/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/
const playBtn = document.getElementById('play-btn')
console.log(playBtn)
const messageEl= document.querySelector('#message')
const titleImageEl= document.querySelector('.title-img')
console.log(titleImageEl)


/*----------------------------- Event Listeners -----------------------------*/
titleImageEl.addEventListener("click",function(evt){
  introSong.volume = .05
  introSong.play()
})

playBtn.addEventListener("click",init)

/*-------------------------------- Functions --------------------------------*/

function init () {

}

function render () {
  

}

function handleClick (evt) {

}