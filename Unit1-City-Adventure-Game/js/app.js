/*-------------------------------- Constants --------------------------------*/
import storyLine from "../data/storyline.js"
const introSong = new Audio ("../audio/" + storyLine.sounds.intro)
const winSong = new Audio ("../audio/" + storyLine.sounds.win)
/*---------------------------- Variables (state) ----------------------------*/
let statemap = ["page0", "page1", "page2", "page2a", "page2b", "page2c","page3a", "page3b", "page3c"]



/*------------------------ Cached Element References ------------------------*/
const playBtn = document.getElementById('play-btn')
const messageEl= document.querySelector('#message')
const titleImageEl= document.querySelector('.title-img')


/*----------------------------- Event Listeners -----------------------------*/
titleImageEl.addEventListener("click",function(evt){
  introSong.volume = .05
  introSong.play()
})


/*-------------------------------- Functions --------------------------------*/

function playWin(){
  winSong.volume = .05
  winSong.play()
}

let userState = 0
function triggerPages (passedUserState) {
  //passeduserstate = 1, meaning we want to show them page 2
  let page = statemap[passedUserState]
  let conDivs = document.querySelectorAll(".conDiv")
  conDivs.forEach( div => { // when this function runs, grab all the divs and hide them -- clean slate
    div.style.display = "hidden"
  })
  let cDiv = document.getElementById(page) // then grab the div that corresponds to the userState
  cDiv.textContent = storyLine[page].message // you don't have to populate the div with all the content via this function. You could do that somewhere else. I'm just doing here here to show how you can populate content from the data file and push it into a div in the html
  cDiv.style.display = "initial"
}
triggerPages(userState)