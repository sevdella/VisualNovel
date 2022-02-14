"use strict";
var Template;
(function (Template) {
    async function BadEnding() {
        console.log("BadEnding");
        Template.ƒS.Sound.fade(Template.sound.backgroundTheme, 0, 0.1, false);
        Template.ƒS.Sound.fade(Template.sound.neonheart, 0.3, 0.1, true);
        Template.ƒS.Character.hideAll();
        await Template.ƒS.Location.show(Template.locations.greyheart);
        await Template.ƒS.update(0.7);
    }
    Template.BadEnding = BadEnding;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Books() {
        console.log("Books");
        let text = {
            rame: {
                T0000: "Lovely Bookshop",
                T0001: "I can see why you like it here"
            },
            inara: {
                T0000: "I think I've read almost 80% of the books in this shop",
                T0001: "You should come by sometimes",
                T0002: "Just search for a cosy corner and read whatever you like"
            }
        };
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.locations.bookshop);
        await Template.ƒS.update(Template.transitions.clock.duration, Template.transitions.clock.alpha, Template.transitions.clock.edge);
        await Template.ƒS.Character.show(Template.characters.inara, Template.characters.inara.pose.happy, Template.ƒS.positionPercent(30, 110));
        await Template.ƒS.Character.show(Template.characters.rame, Template.characters.rame.pose.happy, Template.ƒS.positionPercent(50, 110));
        await Template.ƒS.Speech.tell(Template.characters.rame, text.rame.T0000);
        await Template.ƒS.Speech.tell(Template.characters.inara, text.inara.T0000);
        await Template.ƒS.Speech.tell(Template.characters.rame, text.rame.T0001);
        await Template.ƒS.Speech.tell(Template.characters.inara, text.inara.T0001);
        await Template.ƒS.Speech.tell(Template.characters.inara, text.inara.T0002);
        await Template.ƒS.Character.hide(Template.characters.inara);
        await Template.ƒS.Character.hide(Template.characters.rame);
        return "Friendship";
    }
    Template.Books = Books;
})(Template || (Template = {}));
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
                T0004: "I'm not that big of an artist but drawing has been one of my favourite hobbies since forever",
            }
        };
        let HobbyOption = {
            thrift: "Shopping",
            read: "Reading",
            draw: "Drawing"
        };
        let Hobby = await Template.ƒS.Menu.getInput(HobbyOption, "individualCSSClass");
        switch (Hobby) {
            case HobbyOption.thrift:
                await Template.ƒS.Speech.tell(Template.characters.inara, text.inara.T0000);
                await Template.ƒS.Speech.tell(Template.characters.rame, text.rame.T0000);
                await Template.ƒS.update(0.7);
                await Template.ƒS.Character.animate(Template.characters.rame, Template.characters.rame.pose.happy, Template.fromRightToOutOfCanvas());
                await Template.ƒS.Character.animate(Template.characters.inara, Template.characters.inara.pose.happy, Template.fromLeftToOutOfCanvas());
                await Template.ƒS.Location.show(Template.locations.black);
                return "Thriftshop";
            case HobbyOption.read:
                await Template.ƒS.Speech.tell(Template.characters.inara, text.inara.T0001);
                await Template.ƒS.Speech.tell(Template.characters.inara, text.inara.T0002);
                await Template.ƒS.Speech.tell(Template.characters.inara, text.inara.T0003);
                await Template.ƒS.Speech.tell(Template.characters.rame, text.rame.T0001);
                await Template.ƒS.Character.animate(Template.characters.rame, Template.characters.rame.pose.happy, Template.fromRightToOutOfCanvas());
                await Template.ƒS.Character.animate(Template.characters.inara, Template.characters.inara.pose.happy, Template.fromLeftToOutOfCanvas());
                return "Books";
            case HobbyOption.draw:
                await Template.ƒS.Speech.tell(Template.characters.inara, text.inara.T0004);
                await Template.ƒS.Speech.tell(Template.characters.rame, text.rame.T0002);
                await Template.ƒS.Character.hideAll();
                return "Drawing";
        }
        await Template.ƒS.update(1);
    }
    Template.Conversation = Conversation;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Drawing() {
        console.log("Drawing");
        let text = {
            inara: {
                T0000: "This is just a work in progress but my fave one so far",
                T0001: "Sure!"
            },
            rame: {
                T0000: "You are really talented!",
                T0001: "I need to get some drawing lessons from you!"
            }
        };
        await Template.ƒS.Location.show(Template.locations.drawing1);
        await Template.ƒS.Speech.tell(Template.characters.inara, text.inara.T0000);
        await Template.ƒS.Sound.fade(Template.sound.paper, 0.2, 1, true);
        await Template.ƒS.update(2);
        await Template.ƒS.Location.show(Template.locations.drawing2);
        await Template.ƒS.update(2);
        await Template.ƒS.Sound.fade(Template.sound.paper, 0, 1, false);
        await Template.ƒS.Speech.tell(Template.characters.rame, text.rame.T0000);
        await Template.ƒS.Speech.tell(Template.characters.rame, text.rame.T0001);
        await Template.ƒS.Speech.tell(Template.characters.inara, text.inara.T0001);
        return "Friendship";
    }
    Template.Drawing = Drawing;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Friendship() {
        console.log("Friendship");
        let text = {
            narrator: {
                T0000: "Inara and Rame grow closer and spend most of their time together",
                T0001: ""
            },
            inara: {
                T0000: "This was fun again!",
                T0001: "What the",
                T0002: "No! I always cover it up how did you notice?!",
                T0003: "How will you be able to help me?",
                T0004: "I'm sorry, I can't do this",
                T0005: "I can't show up to class like this",
                T0006: "What if they bully me as well"
            },
            rame: {
                T0000: "Hahaha yes!",
                T0001: "Let's head home, it's already dark outside",
                T0002: "Oh cool, I didn't know your heart doesn't glow as well",
                T0003: "Don't panic! It's not that big of a deal!",
                T0004: "You shouldn't hide it, let me help you get rid of that fear",
                T0005: "I'm just like you",
                T0006: "You learned to love yourself and that's how you got confident"
            }
        };
        await Template.ƒS.Location.show(Template.locations.black);
        await Template.ƒS.update(Template.transitions.clock.duration, Template.transitions.clock.alpha, Template.transitions.clock.edge);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000);
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.locations.inbookshop);
        await Template.ƒS.update(Template.transitions.clock.duration, Template.transitions.clock.alpha, Template.transitions.clock.edge);
        await Template.ƒS.Character.show(Template.characters.inara, Template.characters.inara.pose.happy, Template.ƒS.positionPercent(30, 110));
        await Template.ƒS.update(0.3);
        await Template.ƒS.Speech.tell(Template.characters.inara, text.inara.T0000);
        await Template.ƒS.Character.show(Template.characters.rame, Template.characters.rame.pose.flirty, Template.ƒS.positionPercent(50, 110));
        await Template.ƒS.Speech.tell(Template.characters.rame, text.rame.T0000);
        await Template.ƒS.update(0.3);
        await Template.ƒS.Speech.tell(Template.characters.rame, text.rame.T0001);
        await Template.ƒS.Location.show(Template.locations.bookshop);
        await Template.ƒS.update(Template.transitions.swirl.duration, Template.transitions.swirl.alpha, Template.transitions.swirl.edge);
        Template.ƒS.update(2);
        await Template.ƒS.Character.hide(Template.characters.rame);
        await Template.ƒS.Character.show(Template.characters.rame, Template.characters.rame.pose.happy, Template.ƒS.positionPercent(50, 110));
        await Template.ƒS.Speech.tell(Template.characters.rame, text.rame.T0002);
        await Template.ƒS.Speech.tell(Template.characters.inara, text.inara.T0001);
        await Template.ƒS.Character.hide(Template.characters.inara);
        await Template.ƒS.Sound.fade(Template.sound.thunder, 0.4, 1);
        await Template.ƒS.Character.show(Template.characters.inara, Template.characters.inara.pose.surprised, Template.ƒS.positionPercent(30, 110));
        Template.ƒS.update(0.1);
        await Template.ƒS.Speech.tell(Template.characters.inara, text.inara.T0002);
        await Template.ƒS.Speech.tell(Template.characters.rame, text.rame.T0003);
        await Template.ƒS.Speech.tell(Template.characters.rame, text.rame.T0004);
        await Template.ƒS.Speech.tell(Template.characters.inara, text.inara.T0003);
        await Template.ƒS.Speech.tell(Template.characters.rame, text.rame.T0005);
        await Template.ƒS.update(1);
        let PanicAttack = {
            seekhelp: "Help me",
            runaway: "I'm sorry"
        };
        let Panic = await Template.ƒS.Menu.getInput(PanicAttack, "individualCSSClass");
        switch (Panic) {
            case PanicAttack.seekhelp:
                //await ƒS.Character.show(characters.inara,characters.inara.pose.upset, ƒS.positionPercent(30,110));
                await Template.ƒS.Speech.tell(Template.characters.inara, text.inara.T0003);
                await Template.ƒS.Speech.tell(Template.characters.rame, text.rame.T0004);
                await Template.ƒS.Character.hide(Template.characters.inara);
                await Template.ƒS.Character.hide(Template.characters.rame);
                return "Glitch";
            case PanicAttack.runaway:
                await Template.ƒS.Character.hide(Template.characters.inara);
                await Template.ƒS.Character.show(Template.characters.inara, Template.characters.inara.pose.upset, Template.ƒS.positionPercent(30, 110));
                await Template.ƒS.Speech.tell(Template.characters.inara, text.inara.T0004);
                await Template.ƒS.Character.animate(Template.characters.inara, Template.characters.inara.pose.upset, Template.fromLeftToOutOfCanvas());
                return "BadEnding";
        }
    }
    Template.Friendship = Friendship;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Glitch() {
        console.log("Glitch");
        let text = {
            inara: {
                T0000: "",
                T0001: ""
            }
        };
        await Template.ƒS.Location.show(Template.locations.timeskip);
        await Template.ƒS.update(0.7);
        await Template.ƒS.Location.show(Template.locations.black);
        await Template.ƒS.Location.show(Template.locations.heart);
        Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.inara, Template.characters.inara.pose.surprised, Template.ƒS.positionPercent(60, 110));
        await Template.ƒS.Speech.tell(Template.characters.inara, text.inara.T0000);
        await Template.ƒS.Speech.tell(Template.characters.inara, text.inara.T0001);
        await Template.ƒS.Character.hide(Template.characters.inara);
        await Template.ƒS.Speech.hide();
        // School
        await Template.ƒS.Location.show(Template.locations.school);
        await Template.ƒS.update(Template.transitions.clock.duration, Template.transitions.clock.alpha, Template.transitions.clock.edge);
        await Template.ƒS.Character.show(Template.characters.rame, Template.characters.rame.pose.scared, Template.ƒS.positionPercent(50, 110));
        await Template.ƒS.update(1);
    }
    Template.Glitch = Glitch;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Introduction() {
        console.log("Intro");
        let text = {
            narrator: {
                T0000: "It's the Year 2105, the world developed drastically, just like humanity whose hearts now function with neon lights.",
                T0001: "Every individual has their significant colour glowing from their heart",
                T0002: "Should they ever find their Soulmate, the colour of the significant other will fuse with ones own colour",
                T0003: "But..."
            },
            inara: {
                T0000: "First Day of College...",
                T0001: "Alright, deep breath",
                T0002: "This is a new start for me, I can do this!",
                T0003: "Oh no, group projects already?",
                T0004: "Maybe it's possible to do this project on my own?",
                T0005: ".. I won't be like this anymore!",
                T0006: "Hi I'm Ramé, nice to meet you, I'd love to",
                T0007: "Sorry, I think I'll work on a solo project"
            },
            rame: {
                T0000: "Hey, I'm Ramé!",
                T0001: "Seems like you don't have a group yet, wanna group together?",
                T0002: "Alright then..See ya.",
                T0003: "Cool! Come over to my table",
                T0004: "I think we've done enough for now, let's take a break",
                T0005: "Tell me a bit about yourself! I feel like we might have something in common",
                T0006: "I looove to read, what about you?",
            }
        };
        Template.ƒS.Speech.setTickerDelays(80, 500);
        Template.ƒS.Sound.fade(Template.sound.backgroundTheme, 0.2, 0.9, true);
        await Template.ƒS.Location.show(Template.locations.black);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0001);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0002);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0003);
        alert("The neon hearts visible on the chest of the characters is just a visualisation and not visible to the characters");
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(1);
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
        await Template.ƒS.update(1);
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
                await Template.ƒS.Speech.tell(Template.characters.inara, text.inara.T0007);
                await Template.ƒS.Speech.tell(Template.characters.rame, text.rame.T0002);
                await Template.ƒS.update(0.2);
                return "QuickEnding";
            case firstDialogueElementOptions.iSayYes:
                await Template.ƒS.Character.show(Template.characters.inara, Template.characters.inara.pose.happy, Template.ƒS.positionPercent(120, 110));
                await Template.ƒS.Speech.tell(Template.characters.inara, text.inara.T0005);
                await Template.ƒS.Speech.tell(Template.characters.inara, text.inara.T0006);
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
                        await Template.ƒS.Speech.tell(Template.characters.inara, "I'd rather not talk about myself");
                        break;
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
            duration: 1,
            alpha: "./Transitions/005.jpg",
            edge: 1
        }
    };
    Template.sound = {
        // music
        backgroundTheme: "./Audio/The_Introvert.mp3",
        neonheart: "./Audio/neon_sound.mp3",
        //sound
        click: "",
        paper: "./Audio/paper.mp3",
        thunder: "./Audio/Thunder.mp3"
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
        },
        heart: {
            name: "Heart",
            background: "./Images/Background/Glitch.png"
        },
        timeskip: {
            name: "Timeskip",
            background: "./Images/Background/Timeskip.png"
        },
        drawing1: {
            name: "Drawing1",
            background: "./Images/Background/Drawing.png"
        },
        drawing2: {
            name: "Drawing2",
            background: "./Images/Background/Drawing2.png"
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
            start: { translation: Template.ƒS.positionPercent(50, 110) },
            end: { translation: Template.ƒS.positionPercent(120, 110) },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.fromRightToOutOfCanvas = fromRightToOutOfCanvas;
    function fromLeftToOutOfCanvas() {
        return {
            start: { translation: Template.ƒS.positionPercent(30, 110) },
            end: { translation: Template.ƒS.positionPercent(120, 110) },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.fromLeftToOutOfCanvas = fromLeftToOutOfCanvas;
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
            { id: "Thriftshop", scene: Template.Thriftshop, name: "Thriftshop" },
            { id: "Books", scene: Template.Books, name: "Books" },
            { id: "Drawing", scene: Template.Drawing, name: "Drawing" },
            { id: "Truth", scene: Template.Truth, name: "Truth" },
            { id: "Glitch", scene: Template.Glitch, name: "Glitch" },
            { id: "BadEnding", scene: Template.BadEnding, name: "BadEnding" },
            //{id: "ShoppingWithRame", scene:ShoppingWithRame, name: "ShoppingWithRame"},
            //{id: "DayWithRame", scene:DayWithRame, name: "DayWithRame"},
            { id: "Friendship", scene: Template.Friendship, name: "Friendship" },
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
                T0000: "Inara didn't befriend anyone throughout her college life",
                T0001: "She stayed in her safe bubble",
                T0002: "Not knowing what opportunities she might've missed",
                T0003: "Don't be shy, try to open up a bit towards people"
            }
        };
        Template.ƒS.Sound.fade(Template.sound.backgroundTheme, 0, 0.1, false);
        Template.ƒS.Sound.fade(Template.sound.neonheart, 0.3, 0.1, true);
        Template.ƒS.Character.hideAll();
        await Template.ƒS.Location.show(Template.locations.greyheart);
        await Template.ƒS.update(0.7);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0001);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0002);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0003);
        Template.ƒS.Sound.fade(Template.sound.neonheart, 0, 0.1, false);
        Template.ƒS.Speech.hide();
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
    async function Thriftshop() {
        console.log("Thriftshop");
        let text = {
            rame: {
                T0000: "Wow what a cute shop",
                T0001: "How did you even find it, it's in such a hidden location?",
                T0002: "This is such a nice break from the bustling city life",
                T0003: "Today was really fun! WE should do this more often"
            },
            inara: {
                T0000: "Happens if you wander around mindlessly...",
                T0001: "Right? Look at this skirt, isn't it cute?"
            }
        };
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.locations.thriftshop);
        await Template.ƒS.Character.show(Template.characters.inara, Template.characters.inara.pose.happy, Template.ƒS.positionPercent(30, 110));
        await Template.ƒS.Character.show(Template.characters.rame, Template.characters.rame.pose.happy, Template.ƒS.positionPercent(50, 110));
        await Template.ƒS.Speech.tell(Template.characters.rame, text.rame.T0000);
        await Template.ƒS.Speech.tell(Template.characters.rame, text.rame.T0001);
        await Template.ƒS.Speech.tell(Template.characters.inara, text.inara.T0000);
        await Template.ƒS.Speech.tell(Template.characters.rame, text.rame.T0002);
        await Template.ƒS.Speech.tell(Template.characters.inara, text.inara.T0001);
        await Template.ƒS.Speech.tell(Template.characters.rame, text.rame.T0003);
        await Template.ƒS.Character.hide(Template.characters.inara);
        await Template.ƒS.Character.hide(Template.characters.rame);
        return "Friendship";
    }
    Template.Thriftshop = Thriftshop;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Truth() {
        console.log("Truth");
    }
    Template.Truth = Truth;
})(Template || (Template = {}));
//# sourceMappingURL=InvisiblePeople.js.map