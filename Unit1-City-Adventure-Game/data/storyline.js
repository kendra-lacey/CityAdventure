const storyLine = {
  page0:
  {
    order:0,
    audio: "intro.mp3",
    message: "Abbi and Ilana are two broke bestfriends living in NYC, press PLAY to go on a quest with them!",
  },
  page1:
  { 
    order: 1,
    message:"Abbi has a tooth-ache and needs to get her wisdom teeth removed - but has no HeALTh inSurAnCe 😬", 
    optionOne: 
      {message: "Go to Central Park and people watch",
        image: "centralpark.png" },
    optionTwo:
      {message: "See Ilana's partner who is a DENTIST, he can do the procedure",
        image :"dentist..png"},
    optionThree:
      {message:"Go see if Ilana's Veterinarian friend will to the proocedure...", 
      image: "vet.png"},
  },
  page2a:
  {
    order:2,
    message: "go back to options when you have seen enough"
  },
  page2b:
  {
    let gameBoard = {}

  }
  
  
  page4:
  { 
    message:"yankee doodle"
  }
}

//to show the image we would do something like this:
//<img src ="../images/" + storyLine.page1.optionone.image />




  // page 0
  // page 1
  // page 2a -> page 3a, page 2b -> 3b, page 2c -> 3c
  // page 3a -> page 1, page 3b (game) win -> page 4a | lose -> page 0 , page 3c (game) win -> page 4b | lose -> page 0
  // page 4a (confetti/song/gif), page 4b (confetti/song/gif)

  // 10 pages


function generateContent(){

}

export default storyLine