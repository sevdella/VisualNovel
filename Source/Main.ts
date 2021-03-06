namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");



  //define transitions
  export let transitions = {
    swirl: {
      duration: 0.7,
      alpha: "./Transitions/007.png",
      edge: 1
    },
    stripes: {
      duration: 0.5,
      alpha: "./Transitions/018.jpg",
      edge: 1
    },
    clock: {
      duration: 0.5,
      alpha: "./Transitions/cw-side.jpg",
      edge: 1
    },
    glitch: {
      duration: 1,
      alpha: "./Transitions/Glitch.gif",
      edge: 1
    },
    slide: {
      duration:1,
      alpha: "./Transitions/005.jpg",
      edge:1
    }
  };

  export let sound = {
    // music
    backgroundTheme: "./Audio/The_Introvert.mp3", //./Audio/The_Introvert.mp3

    neonheart:"./Audio/neon_sound.mp3", //./Audio/neon_sound.mp3

    //sound
    click: "",
    paper: "./Audio/paper.mp3", 
    thunder:"./Audio/Thunder.mp3",
    ring: "./Audio/Ring.mp3"
  };

  export let locations = {
    school: {
      name: "School",
      background: "./Images/Background/School_BG.png"
    },

    classroom: {
      name: "Classroom",
      background: "./Images/Background/Classroom.png"
    },

    bookshop: {
      name: "Bookshop",
      background: "./Images/Background/Bookshop_Outside.png"
    },

    inbookshop: {
      name: "Inbookshop",
      background: "./Images/Background/Bookshop_Inside.png"
    },

    city: {
      name: "City",
      background: "./Images/Background/Neocity.png"
    },

    greyheart: {
      name: "GreyHeart",
      background: "./Images/Background/Grey_Heart.png"
    },
    
    black: {
      name: "Black",
      background: "./Images/Background/Black.png"
    },
    
    thriftshop: {
      name: "ThriftShop",
      background: "./Images/Background/ThriftShop.png"
    },

    coffeeshop: {
      name: "CoffeeShop",
      background: "./Images/Background/CoffeeShop.png"
    },
    heart:{
      name:"Heart",
      background: "./Images/Background/Glitch.png"
    },
    timeskip:{
      name:"Timeskip",
      background: "./Images/Background/Timeskip.png"
    },
    drawing1:{
      name:"Drawing1",
      background: "./Images/Background/Drawing.png"
    },
    drawing2:{
      name:"Drawing2",
      background: "./Images/Background/Drawing2.png"
    },
    yellowheart:{ 
      name: "Yellowheart",
      background:"./Images/Background/Yellowheart.png"
    },
    purpleheart: {
      name:"Purpleheart",
      background:"./Images/Background/Purpleheart.png"
    },
    fullheart: {
      name:"Fullheart",
      background:"./Images/Background/Fullheart.png"
    },
    phone: {
      name: "Phone",
      background:"./Images/Background/phone.png"
    }
  };

  export let data = {
    phone: {
        number: ""
    },
    score: 0,
    state: {
        a: 1
    }
};

  export let characters = {
    narrator: {
      name: "Narrator"
    },
    rame: {
      name: "Ramé",
      origin: ƒS.ORIGIN.BOTTOMLEFT, //Anzeigeort des Charakters
      pose: {
        angry: "./Images/Characters/Angry_Rame.png",
        happy: "./Images/Characters/Happy_Rame.png",
        flirty: "./Images/Characters/Rame.png",
        sad: "./Images/Characters/Sad_Rame.png",
        scared: "./Images/Characters/Scared_Rame.png",
      }
    },
    inara: {
      name: "Inara",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "./Images/Characters/Angry_Inara.png",
        happy: "./Images/Characters/Happy_Inara.png",
        upset: "./Images/Characters/Sad_Inara.png",
        embarrassed: "./Images/Characters/Embarrassed_Inara.png",
        surprised: "./Images/Characters/Surprised_Inara.png",
        shy: "./Images/Characters/Shy_Inara2.png",
      }
    }
  };

  // Animationen
  export function fromRighttoLeft(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positions.bottomright },
      end: { translation: ƒS.positionPercent(50, 110) },
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  export function fromRightToOutOfCanvas(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(50, 110) },
      end: { translation: ƒS.positionPercent(120, 110) },
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  export function fromLeftToOutOfCanvas(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(30, 110) },
      end: { translation: ƒS.positionPercent(120, 110) },
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  export function ToTheCenterLeft(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(50, 110) },
      end: { translation: ƒS.positionPercent(40, 110) },
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  export function ToTheCenterRight(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(30, 110) },
      end: { translation: ƒS.positionPercent(40, 110) },
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }


  export let dataForSave = {
    points: 0

  };

  let inGameMenu = {
    save: "Save",
    load: "Load",
    close: "Close",
    credits: "Credits"
    // open: "Open"
  };


  let gameMenu: ƒS.Menu;

  // true = offen; false = geschlossen
  let menu: boolean = true;

  export function showCredits(): void {
    ƒS.Text.addClass("credits");
    ƒS.Text.print("<h4>Characters:</h4> Sevda Mahmutovic <p> <h4>Backgrounds:</h4> Sevda Mahmutovic <br> https://animelandscape.blogspot.com/</p> <p><h4>Sounds:</h4> https://www.youtube.com/watch?v=kXYIut4TnhI <br> https://www.youtube.com/watch?v=vJ08fwaLXwg <br> https://www.youtube.com/watch?v=SwGsS3jJkB8 <br> https://www.youtube.com/watch?v=MtHjkMYWI84 <br> https://pixabay.com/music/modern-classical-the-introvert-michael-kobrin-10959/ <br> NO COPYRIGHT FOR THE SOUNDS");
  }

  async function buttonFunctionalities(_option: string): Promise<void> {
    console.log(_option);
    switch (_option) {
      case inGameMenu.save:
        await ƒS.Progress.save();
        break;
      case inGameMenu.load:
        await ƒS.Progress.load();
        break;
      case inGameMenu.close:
        gameMenu.close();
        menu = false;
        break;
        case inGameMenu.credits:
      case inGameMenu.credits:
        showCredits();
      // case inGameMenu.open:
      //   gameMenu.open();
      //   menu = true;
      //   break;
    }
  }


  // Shortcuts für's Menü
  document.addEventListener("keydown", hndKeyPress);
  async function hndKeyPress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.F8:
        console.log("Save");
        await ƒS.Progress.save();
        break;
      case ƒ.KEYBOARD_CODE.F9:
        console.log("Load");
        await ƒS.Progress.load();
        break;
      case ƒ.KEYBOARD_CODE.M:
        if (menu) {
          console.log("Close");
          gameMenu.close();
          menu = false;
        }
        else {
          console.log("Open");
          gameMenu.open();
          menu = true;
        }
        break;
    }
  }




  // Branching path zeigen, wie's geht; Szenenstruktur erklären
  window.addEventListener("load", start);
  function start(_event: Event): void {
    // Menü
    gameMenu = ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu");
    let scenes: ƒS.Scenes = [
      // Linear
      { scene: Introduction, name: "Introduction to FS" },
    
      {id: "Conversation", scene:Conversation, name: "Conversation"},
      // Neutral Scenes
      {id: "Thriftshop", scene:Thriftshop, name: "Thriftshop"},
      {id: "Books", scene:Books, name: "Books"},
      {id: "Drawing", scene:Drawing, name: "Drawing"},
      // {id: "Truth", scene:Truth, name:"Truth"},
      {id: "Friendship", scene:Friendship, name: "Friendship"},
      // Turning Point
      {id: "Glitch", scene:Glitch, name:"Glitch"},
      // Endings
      {id: "QuickEnding", scene:QuickEnding, name: "QuickEnding", next: "End"},
      {id: "BadEnding", scene:BadEnding, name:"BadEnding", next: "End"},
      {id: "BestEnding", scene: BestEnding, name: "BestEnding", next: "End"},
      {id: "End", scene: End, name: "End"}


    ];


    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);



    // start the sequence
    ƒS.Progress.go(scenes);
  }

}