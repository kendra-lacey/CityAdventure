const storyLine = [
  //1. increase the index comment by +1 and each next +1 to create room for a new index 0 - to use to store the initial page
  //2. Determine how to inject html into the page based on html that is stored in each index in this file. One option is raw html, another is to store some objects like: structure: [p, div, div] which would then be iterated over to create a div inside a div inside a p. Raw html might be easier
  //3. Create the object for index 0, the initial page
  //4. create the object for the game over page that incudes  additional message
  //5. do something like a message.foreach  where an index object only has one message, it will put the first one in a specific div, and the second message in a different div
  //6. use css to target specific elements and apply styles to move them to where you want them
  //7. add song: introSong to new index 0

  // INDEX 0
  {
    message:
      "Abbi has a tooth-ache and needs to get her wisdom teeth removed - but has no HeALTh inSurAnCe 😬 \r\n What should she do?",
    options: [
      {
        text: "Go to Central Park and people watch",
        img: "../images/centralpark.png",
        next: 9,
      },
      {
        text: "See Illana's partner who is a DENTIST, he can do the procedure",
        img: "../images/dentist..png",
        next: 2,
      },
      {
        text: "Go see if Illana's Veterinarian friend will do the procedure...",
        img: "../images/vet.png",
        next: 3,
      },
    ],
  },
  // INDEX 1
  {
    message: "GAME OVER \r\n PLAY AGAIN?",
    options: [
      {
        text: "Yaas Queen",
        img: "../images/yas.gif",
        song: "lossSong",
        next: 0,
      },
      {
        text: "No thanks",
        img: "../images/no.png",
        next: [],
      },
    ],
  },

  // INDEX 2
  {
    message:
      "The procedure went well! Abbi took some pain-killers... Illana got distracted & lost her - luckily Abbi left her phone. Abbi gets a call from her bank asking if she really spent X amount of dollars at whole-foods. We found her..but guess how much she spent??",
    options: [
      {
        text: "$1,487.56",
        img: "../images/abbi.png",
        next: 8,
      },
      {
        text: "$563.99",
        img: "../images/illana.gif",
        next: 1,
      },
      {
        text: "$1201.22",
        img: "../images/abbiwholefoods.gif",
        next: 1,
      },
    ],
  },
  // INDEX 3
  {
    message:
      "The vet is trying to give you dog pain killers what should you do?",
    options: [
      {
        text: "take the pillz",
        img: "../images/eyes.png",
        next: 4,
      },
      {
        text: "throw them back at her",
        img: "../images/throw.png",
        next: 1,
      },
    ],
  },
  // INDEX 4

  {
    message:
      "The procedure went well! Abbi was given some weird dog pain meds & was feeling funky so she went home. Illana goes to check on her but she isnt there. Guess where she is?! Click on the right location to find her!",
    options: [
      {
        text: "Subway",
        img: "../images/gameboard/subway.jpeg",
        next: 1,
      },
      {
        text: "Bodega",
        img: "../images/gameboard/BODEGA.jpeg",
        next: 6,
      },
      {
        text: "Bed Bath & Beyond",
        img: "../images/gameboard/bedbathbeyond.jpeg",
        next: 1,
      },
      {
        text: "Dive-Bar",
        img: "../images/bar.png",
        next: 5,
      },
    ],
  },

  //INDEX 5
  {
    message:
      "You find Abbi at an Old-Timey bar. Everyone is calling her Val?? People are begging her to do a performance. Do you",
    options: [
      {
        text: "Take her home!",
        img: "../images/valoldlady.gif",
        next: 1,
      },
      {
        text: "Encourage Abbi to sing",
        img: "../images/val.jpg",
        next: 7,
      },
      {
        text: "Check out the scene..",
        img: "../images/abbi.val.gif",
        next: 7,
      },
    ],
  },
  // INDEX 6
  {
    message: "Abbi is at the Bodega petting the cat, what should you do next?",
    options: [
      {
        text: "Grab snacks!",
        img: "../images/Bodega_Cat.jpg",
        next: 4,
      },
      {
        text: "Go to the park",
        img: "../images/gameboard/centralpark.jpeg",
        next: 1,
      },
    ],
  },

  //INDEX 7
  {
    message: "YOU WIN",
    options: [
      {
        text: "You discover that when Abbi is under the influence she transforms into Val. Val speaks in 1920's slang ,loves martini's and swallows her own nose ring...because she loves diamonds.Apparenly she's been going to that bar for years?!",
        img: "../images/abbi.gif",
        next: 1,
        song: "winSong",
        confetti: "true",
      },
    ],
  },

  //INDEX 8

  {
    message: "YOU WIN!",
    options: [
      {
        text: "Yaaas Kween",
        img: "../images/wholefoods.gif",
        next: 1,
        song: "winSong",
        confetti: "true",
      },
    ],
  },

  // INDEX 9

  {
    message:
      "You see a craigslist add floating around to go clean a mans house but you have to do it half dressed, do you do it or keep looking for something else?",
    options: [
      {
        text: "Yes, let's get that money",
        img: "../images/money.gif",
        next: 10,
      },
      {
        text: "Absolutely not...what if we play some drums?",
        img: "../images/drums.gif",
        next: 11,
      },
    ],
  },

  // INDEX 10

  {
    message:
      "The Guy turned out to be a total weirdo and claimed he is a just a baby and has  no money, so he can't pay you",
    options: [
      {
        text: "",
        img: "../images/baby.gif",
        song: "lossSong",
        next: 1,
      },
    ],
  },

  //INDEX 11

  {
    message:
      "Abi and Ilana made decent money playing music in central park, they need to do something else though",
    options: [
      {
        text: "Sell clothes that the rich kids Nanny gave you to donate at Beacons Closet",
        img: "../images/thrift.webp",
        next: 12,
      },
      {
        text: "Air bnb the apartment for a weekend",
        img: "../images/map.webp",
        next: 13,
      },
    ],
  },
  // INDEX 12

  {
    message: "",
    options: [{}, {}],
  },
];

function generateContent() {}

export default storyLine;
