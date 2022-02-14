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
    }
  };

  export let characters = {
    narrator: {
      name: "Narrator"
    },
    rame: {
      name: "Rame",
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
        embarrassed: "./Images/Charcters/Embarrassed_Inara.png",
        surprised: "./Images/Characters/Surprised_Inara.png",
        shy: "./Images/Characters/Shy_Inara.png",
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

  export let dataForSave = {
    points: 0

  };

  let inGameMenu = {
    save: "Save",
    load: "Load",
    close: "Close"
    // open: "Open"
  };


  let gameMenu: ƒS.Menu;

  // true = offen; false = geschlossen
  let menu: boolean = true;

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
      // { id: "Einführung", scene: Introduction, name: "Introduction to FS", next: "Ende"},
      { scene: Introduction, name: "Introduction to FS" },
      // { scene: Scene2, name: "Scene Two" }
      // { id: "Ende", scene: End, name: "The End" }
      {id: "QuickEnding", scene:QuickEnding, name: "QuickEnding"},
      {id: "Conversation", scene:Conversation, name: "Conversation"},
      {id: "Thriftshop", scene:Thriftshop, name: "Thriftshop"},
      {id: "Books", scene:Books, name: "Books"},
      {id:"Drawing", scene:Drawing, name: "Drawing"},
      {id: "Truth", scene:Truth, name:"Truth"},
      {id: "BadEnding", scene:BadEnding, name:"BadEnding"},
      //{id: "ShoppingWithRame", scene:ShoppingWithRame, name: "ShoppingWithRame"},
      //{id: "DayWithRame", scene:DayWithRame, name: "DayWithRame"},
      {id: "Friendship", scene:Friendship, name: "Friendship"},


    ];


    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);



    // start the sequence
    ƒS.Progress.go(scenes);
  }

}

//export function fromLJirkaAnimationt(); ƒS.AnimationDefinition {
 //return {
 //start: {translation: ƒS.positions.bottomleft, rotation: -20, scaling: new ƒS.Position(0.5, 1.5), color: ƒS.Color.CSS ("white", 0.5)},
 //end: { translation: ƒS.positions.bottomright, rotation: 20, scalind: new ƒS.Position(1.5,0.5), color: ƒS.Color.CSS("red")},
 //duration: 1,
 //playmode: ƒS.ANIMATION_PLAYMODE.LOOP
// };
//}
