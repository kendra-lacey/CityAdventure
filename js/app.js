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
const backgroundImg = document.querySelector('.background-img')
const titleEl = document.querySelector('.title')

/*----------------------------- Event Listeners -----------------------------*/
playBtn.addEventListener("click",function(evt){
  gameAudio.playSong("introSong")
})

playBtn.addEventListener("click",init)

buttonsCon.addEventListener("click",handleClick)


/*-------------------------------- Functions --------------------------------*/

function init(){
  playBtn.hidden = true
  titleImageEl.hidden = true
  currentIdx = 0 // idx of the current story path we want to show the user
  renderMessage()
  renderButton()
}

function renderMessage(){
  console.log(storyLine[currentIdx])
  messageEl.textContent = storyLine[currentIdx].message
  titleEl.classList.add('animate__animated' , 'animate__slideInLeft')
  messageEl.className = `page${currentIdx}`//this applies ex. "page4" as a class on the dynamically loaded message elements. But it applies a numbered class so that they can be specifically targeted in css
  backgroundImg.className = `body${currentIdx}`
}

function renderButton(){ //for every option creating a new img
  buttonsCon.innerHTML = "" //clearing out container
  storyLine[currentIdx].options.forEach(choice => {
    const img = document.createElement('img')
    img.className = `page${currentIdx}`
    const p = document.createElement('p')
    const div = document.createElement('div')
    img.src = choice.img
    img.id = choice.next // take value of next & assign it to img Id so we can use it in handleClick()
    p.textContent = choice.text
    let theDiv = buttonsCon.appendChild(div)
    theDiv.appendChild(p)
    theDiv.appendChild(img)
    if('song' in choice){
      gameAudio.playSong(choice.song)
    }
    if("confetti" in choice){
      confetti.start(1500)
    }
  })
} //set a class on the p.textcontent such as class = currentIdx. then in your CSS you can target that specific currentIdx

function handleClick(evt){ 
  // handleClick gets evt as an argument 
  currentIdx = evt.target.id // updating value of current idx to be the id of the img that is clicked
  if(evt.target.id == 0){
    location.reload()
  }
  renderMessage()
  renderButton()
}

