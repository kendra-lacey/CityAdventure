const storyLine = [
 
  {isPage: 0,
  message: "Abbi and Illana are two broke bestfriends living in NYC...press PLAY to go on a quest with them!"},

  { isPage: 1,
    message:"Abbi has a tooth-ache and needs to get her wisdom teeth removed - but has no HeALTh inSurAnCe 😬", 
    optionOne: "Go to Central Park and people watch",
    optionOneImage: "../images/centralpark.png" ,
    optionTwo:"See Illana's partner who is a DENTIST, he can do the procedure",
    optionTwoImage:"../images/dentist..png",
    optionThree:"Go see if Illana's Veterinarian friend will do the proocedure...",
    optionThreeImage:"../images/vet.png"
  },
  

  
  { isPage: 2,
    message: "go back to options when you have seen enough",
    media:,
  },

 
  { isPage: 3,
    message: "The prodecure went well! Abbi took some pain-killers... Illana got distracted & lost her - luckily Abbi left her phone. She gets a call from her bank asking if she really spent X amount of dollars at whole-foods. We found her..but guess how much she spent??"
  },

 
  { isPage: 4,
    message:"The procedure went well! Abbi was given some weird dog pain meds & was feeling funky so she went home. Ilana goes to check on her but she isnt there.Click on the Squares to find her! You only have 20 seconds!"
  },

 
  { isPage: 5,
    message: "YOU WIN!", 
    gif: "../images/wholefoods.gif" ,
  },

  
  { isPage: 6,
    message: "YOU WIN!", 
    gif: "../images/abbi.gif",
  }
  ];




//<img src ="../images/" + storyLine.page1.optionone.image />




  // page 0
  // page 1
  // page 1 -> page 2, page 1 -> 2b, page 1 -> 2c
  // page 2a -> page 1, page 2b (game) win -> page 3a | lose -> page 0 , page 2c (game) win -> page 3b | lose -> page 0
  // page 3a (confetti/song/gif), page 3b (confetti/song/gif)

  // 10 pages


function generateContent(){

}

export default storyLine