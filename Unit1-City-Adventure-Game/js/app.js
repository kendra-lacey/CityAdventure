/*-------------------------------- Constants --------------------------------*/
import storyLine from "../data/storyline.js"
import * as gameAudio from '../js/audio.js'

/*---------------------------- Variables (state) ----------------------------*/
let currentIdx



/*------------------------ Cached Element References ------------------------*/
const playBtn = document.getElementById('play-btn')
const messageEl = document.querySelector('#message')
const titleImageEl = document.querySelector('.title-img')
const buttonsCon = document.querySelector('.buttons')


/*----------------------------- Event Listeners -----------------------------*/
playBtn.addEventListener("click",function(evt){
  gameAudio.playIntroSong()
})

playBtn.addEventListener("click",init)

buttonsCon.addEventListener("click",handleClick)


/*-------------------------------- Functions --------------------------------*/

function init(){
  playBtn.hidden = true
  currentIdx = 0 // idx of the current story path we want to show the user
  renderMessage()
  renderButton()
}

function renderMessage(){
  console.log(storyLine[currentIdx])
  messageEl.textContent = storyLine[currentIdx].message
}

function renderButton(){ //for every option creating a new img
  buttonsCon.innerHTML = "" //clearing out container
  storyLine[currentIdx].options.forEach(choice => {
    const img = document.createElement('img')
    const p = document.createElement('p')
    img.src = choice.img
    img.id = choice.next // take value of next & assign it to img Id so we can use it in handleClick()
    p.textContent = choice.text
    buttonsCon.appendChild(img)
    buttonsCon.appendChild(p)
  })
}

function handleClick(evt){ 
  // handleClick gets evt as an argument 
  currentIdx = evt.target.id // updating value of current idx to be the id of the img that is clicked
  renderMessage()
  renderButton()
}
































