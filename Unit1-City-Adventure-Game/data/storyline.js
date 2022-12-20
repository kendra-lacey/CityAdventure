const storyLine = [

  // INDEX 0
  {
    message: "Abbi has a tooth-ache and needs to get her wisdom teeth removed - but has no HeALTh inSurAnCe 😬",
    options: [
      {
        text: "Go to Central Park and people watch",
        img: "../images/centralpark.png",
        next: 1
      },
      {
        text: "See Illana's partner who is a DENTIST, he can do the procedure",
        img: "../images/dentist..png",
        next: 2
      },
      {
        text: "Go see if Illana's Veterinarian friend will do the proocedure...",
        img: "../images/vet.png",
        next: 3
      },
    ]
  },
  // INDEX 1
  {
    message: "GAME OVER",
    options: [
      {
        text: "Play Again",
        img: "",
        next: 0
      },
      {
        text: "No thanks",
        img: "",
        next: 0
      }
    ]
  },

  // INDEX 2
  {
    message: "The prodecure went well! Abbi took some pain-killers... Illana got distracted & lost her - luckily Abbi left her phone. She gets a call from her bank asking if she really spent X amount of dollars at whole-foods. We found her..but guess how much she spent??",
    options: [
      {
        text: "$1,576",
        img: "../images/centralpark.png",
        next: 3
      },
      {
        text: "$563",
        img: "../images/dentist..png",
        next: 1
      },
      {
        text: "$1200",
        img: "../images/vet.png",
        next: 1
      },
    ]
  },
  // INDEX 3
  {
    message: "The vet is trying to give you dog pain killers what shoud you do?",
    options: [
      {
        text: "take the pillz",
        img: "../images/centralpark.png",
        next: 4
      },
      {
        text: "throw them back at her",
        img: "../images/dentist..png",
        next: 1
      },
    ]
  },




  {
    isPage: 4,
    message: "The procedure went well! Abbi was given some weird dog pain meds & was feeling funky so she went home. Ilana goes to check on her but she isnt there.Click on the Squares to find her! You only have 20 seconds!"
  },


  {
    isPage: 5,
    message: "YOU WIN!",
    gif: "../images/wholefoods.gif",
  },


  {
    isPage: 6,
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


function generateContent() {

}

export default storyLine