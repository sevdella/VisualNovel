"use strict";
var Template;
(function (Template) {
    async function Conversation() {
        console.log("Conversation");
        let text = {
            rame: {
                T0000: "Let's go for some shopping then!",
                T0001: "Let's visit your bookshop, I really want to see it!",
                T0002: "You need to show me some drawings!",
            },
            inara: {
                T0000: "I love vintage clothing, so i go thrift shopping in my free time",
                T0001: "I'm a bookworm, whenever I find a few minutes, you'll find me reading.",
                T0002: "I work in a Book Shop aswell. It's not a busy one",
                T0003: "So I just get paid for reading basically",
                T0004: "I'm not that big of an artist but drawing has been one of my favourite hobbies since forever"
            }
        };
        await Template.ƒS.update(Template.transitions.clock.duration, Template.transitions.clock.alpha, Template.transitions.clock.edge);
        await Template.ƒS.Character.show(Template.characters.inara, Template.characters.inara.pose.happy, Template.ƒS.positionPercent(30, 110));
        //await ƒS.Speech.tell(characters.rame, text.rame.T0000);
        let HobbyOption = {
            thrift: "Thrift Shopping",
            read: "Reading",
            draw: "Drawing"
        };
        let Hobby = await Template.ƒS.Menu.getInput(HobbyOption, "individualCSSClass");
        switch (Hobby) {
            case HobbyOption.thrift:
                await Template.ƒS.Speech.tell(Template.characters.inara, text.inara.T0000);
                await Template.ƒS.Speech.tell(Template.characters.rame, text.rame.T0000);
                return "ShoppingWithRame";
            case HobbyOption.read:
                await Template.ƒS.Speech.tell(Template.characters.inara, text.inara.T0001);
                await Template.ƒS.Speech.tell(Template.characters.inara, text.inara.T0002);
                await Template.ƒS.Speech.tell(Template.characters.inara, text.inara.T0003);
                await Template.ƒS.Speech.tell(Template.characters.rame, text.rame.T0001);
                return "DayWithRame";
            case HobbyOption.draw:
                await Template.ƒS.Speech.tell(Template.characters.inara, text.inara.T0004);
                await Template.ƒS.Speech.tell(Template.characters.rame, text.rame.T0002);
                break;
        }
        Template.ƒS.Character.hideAll();
        await Template.ƒS.update(1);
    }
    Template.Conversation = Conversation;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function DayWithRame() {
        console.log("DayWithRame");
        await Template.ƒS.Location.show(Template.locations.coffeeshop);
        await Template.ƒS.update(Template.transitions.stripes.duration, Template.transitions.stripes.alpha, Template.transitions.stripes.edge);
        await Template.ƒS.Character.show(Template.characters.inara, Template.characters.inara.pose.happy, Template.ƒS.positionPercent(30, 110));
        await Template.ƒS.Character.show(Template.characters.rame, Template.characters.rame.pose.happy, Template.ƒS.positionPercent(50, 110));
    }
    Template.DayWithRame = DayWithRame;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Introduction() {
        console.log("Intro");
        let text = {
            narrator: {
                T0000: "It's the Year 20XX, the world developed drastically just as humanity whose hearts now function with neon lights.",
                T0001: "Every individual has their significant colour glowing from their heart",
                T0002: "Should they ever find their Soulmate, the colour of the significant other will fuse with ones own colour",
                T0003: "But...",
                T0004: "Even today dysfunctions exist"
            },
            inara: {
                T0000: "First Day of College...",
                T0001: "Alright, deep breath",
                T0002: "I can do this!",
                T0003: "Great, a group project",
                T0004: "Maybe it's possible to do this project on my own?",
                T0005: "Sorry, I think I'll work on a solo project"
            },
            rame: {
                T0000: "Hey, I'm Ramé!",
                T0001: "Would you like to do this project together?",
                T0002: "Alright then..",
                T0003: "Cool! Come over to my table",
                T0004: "I think we've done enough for now, let's take a break",
                T0005: "Tell me a bit about yourself! I feel like we might have something in common",
                T0006: "I looove to read, what about you?"
            }
        };
        Template.ƒS.Speech.setTickerDelays(80, 500);
        Template.ƒS.Sound.fade(Template.sound.backgroundTheme, 0.2, 0.9, true);
        await Template.ƒS.Location.show(Template.locations.black);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0001);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0002);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0003);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0004);
        await Template.ƒS.Location.show(Template.locations.school);
        await Template.ƒS.update(Template.transitions.clock.duration, Template.transitions.clock.alpha, Template.transitions.clock.edge);
        await Template.ƒS.Character.show(Template.characters.inara, Template.characters.inara.pose.shy, Template.ƒS.positionPercent(30, 110));
        await Template.ƒS.update(0.7);
        await Template.ƒS.Speech.tell(Template.characters.inara, text.inara.T0000);
        await Template.ƒS.Speech.tell(Template.characters.inara, text.inara.T0001);
        await Template.ƒS.Speech.tell(Template.characters.inara, text.inara.T0002);
        await Template.ƒS.Character.hide(Template.characters.inara);
        await Template.ƒS.Speech.hide();
        await Template.ƒS.update(0.5);
        await Template.ƒS.Location.show(Template.locations.classroom);
        await Template.ƒS.update(Template.transitions.clock.duration, Template.transitions.clock.alpha, Template.transitions.clock.edge);
        await Template.ƒS.update(0.3);
        await Template.ƒS.Character.show(Template.characters.inara, Template.characters.inara.pose.shy, Template.ƒS.positionPercent(30, 110));
        await Template.ƒS.update(0.3);
        await Template.ƒS.Speech.tell(Template.characters.inara, text.inara.T0003);
        await Template.ƒS.Speech.tell(Template.characters.inara, text.inara.T0004);
        await Template.ƒS.Character.animate(Template.characters.rame, Template.characters.rame.pose.flirty, Template.fromRighttoLeft());
        await Template.ƒS.Speech.tell(Template.characters.rame, text.rame.T0000);
        await Template.ƒS.Speech.tell(Template.characters.rame, text.rame.T0001);
        let firstDialogueElementOptions = {
            iSayYes: "Yes",
            iSayNo: "No"
        };
        let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementOptions, "individualCSSClass");
        switch (firstDialogueElement) {
            case firstDialogueElementOptions.iSayNo:
                await Template.ƒS.Speech.tell(Template.characters.inara, text.inara.T0005);
                await Template.ƒS.Speech.tell(Template.characters.rame, text.rame.T0002);
                await Template.ƒS.update(0.2);
                return "QuickEnding";
            case firstDialogueElementOptions.iSayYes:
                await Template.ƒS.Character.show(Template.characters.inara, Template.characters.inara.pose.happy, Template.ƒS.positionPercent(120, 110));
                await Template.ƒS.Speech.tell(Template.characters.rame, text.rame.T0003);
                Template.ƒS.Character.hideAll();
                await Template.ƒS.Location.show(Template.locations.black);
                await Template.ƒS.update(0.2);
                await Template.ƒS.Location.show(Template.locations.classroom);
                await Template.ƒS.Character.show(Template.characters.inara, Template.characters.inara.pose.happy, Template.ƒS.positionPercent(30, 110));
                await Template.ƒS.Character.show(Template.characters.rame, Template.characters.rame.pose.happy, Template.ƒS.positionPercent(50, 110));
                await Template.ƒS.update(1);
                await Template.ƒS.Speech.tell(Template.characters.rame, text.rame.T0004);
                await Template.ƒS.Speech.tell(Template.characters.rame, text.rame.T0005);
                await Template.ƒS.Speech.tell(Template.characters.rame, text.rame.T0006);
                let replyToHerDecision = {
                    answer: "Reply to her",
                    dontAnswer: "Refuse to talk about yourself"
                };
                let replyToHer = await Template.ƒS.Menu.getInput(replyToHerDecision, "individualCSSClass");
                switch (replyToHer) {
                    case replyToHerDecision.answer:
                        await Template.ƒS.Speech.tell(Template.characters.inara, "Alright, Alright");
                        Template.ƒS.update(0.7);
                        return "Conversation";
                    case replyToHerDecision.dontAnswer:
                        await Template.ƒS.Speech.tell(Template.characters.inara, "I'd rather not about personal stuff");
                        return "";
                }
                break;
        }
        Template.ƒS.Sound.fade(Template.sound.backgroundTheme, 0, 1);
        //ƒS.Character.hideAll();
        await Template.ƒS.update(1);
        // if (dataForSave.points === 100) {
        //   return: End();
        // }
        // return "Ende";
        //return End();
    }
    Template.Introduction = Introduction;
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    //define transitions
    Template.transitions = {
        swirl: {
            duration: 0.7,
            alpha: "./Transitions/007.png",
            edge: 1
        },
        stripes: {
            duration: 0.7,
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
        }
    };
    Template.sound = {
        // music
        backgroundTheme: "",
        //sound
        click: ""
    };
    Template.locations = {
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
        }
    };
    Template.characters = {
        narrator: {
            name: "Narrator"
        },
        rame: {
            name: "Rame",
            origin: Template.ƒS.ORIGIN.BOTTOMLEFT,
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
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
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
    function fromRighttoLeft() {
        return {
            start: { translation: Template.ƒS.positions.bottomright },
            end: { translation: Template.ƒS.positionPercent(50, 110) },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.fromRighttoLeft = fromRighttoLeft;
    function fromRightToOutOfCanvas() {
        return {
            start: { translation: Template.ƒS.positionPercent(30, 100) },
            end: { translation: Template.ƒS.positionPercent(120, 100) },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.fromRightToOutOfCanvas = fromRightToOutOfCanvas;
    Template.dataForSave = {
        points: 0
    };
    let inGameMenu = {
        save: "Save",
        load: "Load",
        close: "Close"
        // open: "Open"
    };
    let gameMenu;
    // true = offen; false = geschlossen
    let menu = true;
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case inGameMenu.save:
                await Template.ƒS.Progress.save();
                break;
            case inGameMenu.load:
                await Template.ƒS.Progress.load();
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
    async function hndKeyPress(_event) {
        switch (_event.code) {
            case Template.ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await Template.ƒS.Progress.save();
                break;
            case Template.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await Template.ƒS.Progress.load();
                break;
            case Template.ƒ.KEYBOARD_CODE.M:
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
    function start(_event) {
        // Menü
        gameMenu = Template.ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu");
        let scenes = [
            // Linear
            // { id: "Einführung", scene: Introduction, name: "Introduction to FS", next: "Ende"},
            { scene: Template.Introduction, name: "Introduction to FS" },
            // { scene: Scene2, name: "Scene Two" }
            // { id: "Ende", scene: End, name: "The End" }
            { id: "QuickEnding", scene: Template.QuickEnding, name: "QuickEnding" },
            { id: "Conversation", scene: Template.Conversation, name: "Conversation" },
        ];
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
//export function fromLJirkaAnimationt(); ƒS.AnimationDefinition {
//return {
//start: {translation: ƒS.positions.bottomleft, rotation: -20, scaling: new ƒS.Position(0.5, 1.5), color: ƒS.Color.CSS ("white", 0.5)},
//end: { translation: ƒS.positions.bottomright, rotation: 20, scalind: new ƒS.Position(1.5,0.5), color: ƒS.Color.CSS("red")},
//duration: 1,
//playmode: ƒS.ANIMATION_PLAYMODE.LOOP
// };
//}
var Template;
(function (Template) {
    async function QuickEnding() {
        console.log("QuickEnding");
        let text = {
            narrator: {
                T0000: "The End",
                T0001: ""
            }
        };
        Template.ƒS.Character.hideAll();
        await Template.ƒS.Location.show(Template.locations.greyheart);
        await Template.ƒS.update(0.7);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000);
        Template.ƒS.Sound.fade(Template.sound.backgroundTheme, 0, 1);
    }
    Template.QuickEnding = QuickEnding;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene() {
        console.log("FudgeStory Template Scene starting");
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function ShoppingWithRame() {
        console.log("ShoppingWithRame");
        let text = {
            rame: {
                T0000: "Wow what a cute shop"
            }
        };
        await Template.ƒS.Location.show(Template.locations.thriftshop);
        await Template.ƒS.update(Template.transitions.stripes.duration, Template.transitions.stripes.alpha, Template.transitions.stripes.edge);
        await Template.ƒS.Character.show(Template.characters.inara, Template.characters.inara.pose.happy, Template.ƒS.positionPercent(30, 110));
        await Template.ƒS.Character.show(Template.characters.rame, Template.characters.rame.pose.happy, Template.ƒS.positionPercent(50, 110));
        await Template.ƒS.Speech.tell(Template.characters.rame, text.rame.T0000);
    }
    Template.ShoppingWithRame = ShoppingWithRame;
})(Template || (Template = {}));
//# sourceMappingURL=InvisiblePeople.js.map