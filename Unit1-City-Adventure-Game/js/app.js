/*-------------------------------- Constants --------------------------------*/
const introSong = new Audio ("../audio/intro.mp3")

let gameBoardPics = [
  "../images/gameboard/bedbathbeyond.jpeg",
  "../images/gameboard/BODEGA.jpeg",
  "../images/gameboard/brooklyn.jpeg",
  "../images/gameboard/centralpark.jpeg",
  "../images/gameboard/museum.jpeg",
  "../images/gameboard/nypubliclibrary.jpeg",
  "../images/gameboard/subway.jpeg",
  "../images/gameboard/timessquare.jpeg",
  "../images/gameboard/wholeFoods.jpeg"
]

/*---------------------------- Variables (state) ----------------------------*/
// titleEl.parentNode.removeChild(titleEl);



/*------------------------ Cached Element References ------------------------*/
const playBtn = document.getElementById('play-btn')
console.log(playBtn)
console.log(playBtn)
const messageEl= document.querySelector('#message')
const titleImageEl= document.querySelector('.title-img')
console.log(titleImageEl)


/*----------------------------- Event Listeners -----------------------------*/
messageEl.addEventListener("click",function(evt){
  introSong.volume = .05
  introSong.play()
})

playBtn.addEventListener("click",function(evt){
  messageEl.style.display = "none"
})

/*-------------------------------- Functions --------------------------------*/

function init () {

}

function render () {

}

function handleClick (evt) {

}