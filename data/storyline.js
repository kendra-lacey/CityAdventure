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
        text: "Go see if Illana's Veterinarian friend will do the procedure...",
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
        text: "Yaas Queen",
        img: "../images/yas.gif",
        next: 0
      },
      {
        text: "No thanks",
        img: "../images/no.png",
        next: []
      }
    ]
  },

  // INDEX 2
  {
    message: "The procedure went well! Abbi took some pain-killers... Illana got distracted & lost her - luckily Abbi left her phone. She gets a call from her bank asking if she really spent X amount of dollars at whole-foods. We found her..but guess how much she spent??",
    options: [
      {
        text: "$1,487.56",
        img: "../images/abbi.png" ,
        next: 8
      },
      {
        text: "$563.99",
        img: "../images/illana.gif",
        next: 1
      },
      {
        text: "$1201.22",
        img:"../images/abbiwholefoods.gif" ,
        next: 1
      },
    ]
  },
  // INDEX 3
  {
    message: "The vet is trying to give you dog pain killers what should you do?",
    options: [
      {
        text: "take the pillz",
        img: "../images/eyes.png",
        next: 4
      },
      {
        text: "throw them back at her",
        img: "../images/throw.png",
        next: 1
      },
    ]
  },
// INDEX 4

  {
    message: "The procedure went well! Abbi was given some weird dog pain meds & was feeling funky so she went home. Ilana goes to check on her but she isnt there. Guess where she is?! Click on the right location to find her!",
    options: [
      {
        text: "Subway",
        img: "../images/gameboard/subway.jpeg" ,
        next: 1
      },
      {
        text: "Bodega",
        img: "../images/gameboard/BODEGA.jpeg",
        next: 6
      },
      {
        text: "Bed Bath & Beyond",
        img:"../images/gameboard/bedbathbeyond.jpeg" ,
        next: 1
      },
      {
        text: "Dive-Bar",
        img:"../images/bar.png" ,
        next: 5
      },

    ]
  },

//INDEX 5
{
  message: "You find Abbi at an Old-Timey bar. Everyone is calling her Val?? People are begging her to do a performance.",
  options: [
    {
      text: "take her home!",
      img: "../images/valoldlady.gif" ,
      next: 1
    },
    {
      text: "Encourage Abbi to sing",
      img: "../images/val.jpg",
      next: 7
    },
    {
      text: "Check out the scene..",
      img: "../images/abbi.val.gif",
      next: 7
    }
  ]
},
// INDEX 6
{
  message: "Abbi is at the Bodega petting the cat, what should you do next?",
  options: [
    {
      text: "Grab snacks!",
      img: "../images/Bodega_Cat.jpg" ,
      next: 1
    },
    {
      text: "Go to the park",
      img: "../images/gameboard/centralpark.jpg",
      next: 1
    },
  ]
},

//INDEX 7
{ 
  message: "YOU WIN",
  options: [
    {
      text: "You discover that when Abbi is under the influence she has an alter ego named Val that she turns into..She's been going to that bar  for years?!",
      img: "../images/abbi.gif",
      next: 1
    }
  ]
},


//INDEX 8

  {
    message: "YOU WIN!",
    options: [
      {
        text: "Yaaas Kween",
        img:"../images/wholefoods.gif",
        next: 1
      }
    ]
  },

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