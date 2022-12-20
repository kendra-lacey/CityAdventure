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
      {message:"Go see if Ilana's Veterinarian friend will do the proocedure...", 
      image: "vet.png"},
  },

  page2a:
  {
    order:2,
    message: "go back to options when you have seen enough"
  },

  page2b:
  {
    message: "The prodecure went well! Abbi took some pain-killers... Ilana got distracted & lost her - luckily Abbi left her phone. She gets a call from her bank asking if she really spent X amount of dollars at whole-foods. We found her..but guess how much she spent??"
  },

  page2c:
  { 
    message:"The procedure went well! Abbi was given some weird dog pain meds & was feeling funky so she went home. Ilana goes to check on her but she isnt there.Click on the Squares to find her! You only have 20 seconds!"
  },

  page3a:
  {
    message: "YOU WIN!", 
    audio: "win.mp3 ",
    gif: "wholefoods.gif" ,
  },

  page3b:
  {
    message: "YOU WIN!", 
    audio: "win.mp3 ",
    gif: "abbi.gif",
  }
}




//<img src ="../images/" + storyLine.page1.optionone.image />




  // page 0
  // page 1
  // page 1 -> page 2a, page 1 -> 2b, page 1 -> 2c
  // page 2a -> page 1, page 2b (game) win -> page 3a | lose -> page 0 , page 2c (game) win -> page 3b | lose -> page 0
  // page 3a (confetti/song/gif), page 3b (confetti/song/gif)

  // 10 pages


function generateContent(){

}

export default storyLine