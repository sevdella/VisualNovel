"use strict";
var Template;
(function (Template) {
    async function BadEnding() {
        console.log("BadEnding");
        let text = {
            narrator: {
                T0000: "Yet Again Inara pushes the people away from her as soon as she experiences an inconvenience",
                T0001: "She doesn't want to get hurt",
                T0002: "But she has people to lean on",
                T0003: "Try to be more trusting and don't try to get through your sufferings on your own"
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
        Template.ƒS.Speech.hide();
        Template.ƒS.Sound.fade(Template.sound.neonheart, 0, 0.1, false);
    }
    Template.BadEnding = BadEnding;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function BestEnding() {
        console.log("BestEnding");
        let text = {
            narrator: {
                T0000: "You have made it it to the Best Ending",
                T0001: "Inara has finally found happiness",
                T0002: "and much more..."
            },
            inara: {
                T0000: "What's going on?",
                T0001: "M-My heart's starting to glow again?",
                T0002: "Ramé is that your colour??",
                T0003: "This is amazing"
            },
            rame: {
                T0000: "I have no idea?",
                T0001: "Mine too",
                T0002: "Look at the other half of your heart!",
                T0003: "Yes it is, and I have yours..."
            }
        };
        await Template.ƒS.Sound.fade(Template.sound.neonheart, 0.3, 1);
        await Template.ƒS.update();
        await Template.ƒS.Location.show(Template.locations.fullheart);
        await Template.ƒS.Speech.tell(Template.characters.inara, text.inara.T0000);
        await Template.ƒS.Speech.tell(Template.characters.rame, text.rame.T0000);
        await Template.ƒS.Speech.tell(Template.characters.inara, text.inara.T0001);
        await Template.ƒS.Speech.tell(Template.characters.rame, text.rame.T0001);
        await Template.ƒS.Speech.tell(Template.characters.rame, text.rame.T0002);
        await Template.ƒS.Speech.tell(Template.characters.inara, text.inara.T0002);
        await Template.ƒS.Speech.tell(Template.characters.rame, text.rame.T0003);
        await Template.ƒS.Speech.tell(Template.characters.inara, text.inara.T0003);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0001);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0002);
        Template.ƒS.Speech.hide();
        await Template.ƒS.Sound.fade(Template.sound.backgroundTheme, 0, 0.2, false);
    }
    Template.BestEnding = BestEnding;
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
    async function End() { }
    Template.End = End;
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
            },
            rame: {
                T0000: "Hahaha yes!",
                T0001: "Let's head home, it's already dark outside",
                T0002: "Oh cool, I didn't know your heart doesn't glow as well",
                T0003: "Don't panic! It's not that big of a deal!",
                T0004: "You shouldn't hide it, let me help you get rid of that fear",
                T0005: "I'm just like you",
                T0006: "You learned to love yourself and that's how you got confident",
                T0007: "If you ever need someone to talk to, call me",
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
        await Template.ƒS.update(0.2);
        await Template.ƒS.Speech.tell(Template.characters.rame, text.rame.T0001);
        await Template.ƒS.Location.show(Template.locations.bookshop);
        await Template.ƒS.update(Template.transitions.stripes.duration, Template.transitions.stripes.alpha, Template.transitions.stripes.edge);
        Template.ƒS.update();
        await Template.ƒS.Character.hide(Template.characters.rame);
        await Template.ƒS.Character.show(Template.characters.rame, Template.characters.rame.pose.happy, Template.ƒS.positionPercent(50, 110));
        await Template.ƒS.Speech.tell(Template.characters.rame, text.rame.T0002);
        await Template.ƒS.Speech.tell(Template.characters.inara, text.inara.T0001);
        await Template.ƒS.Sound.fade(Template.sound.thunder, 0.4, 1);
        await Template.ƒS.Character.hide(Template.characters.inara);
        await Template.ƒS.Character.show(Template.characters.inara, Template.characters.inara.pose.surprised, Template.ƒS.positionPercent(30, 110));
        Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.inara, text.inara.T0002);
        await Template.ƒS.Speech.tell(Template.characters.rame, text.rame.T0003);
        await Template.ƒS.Speech.tell(Template.characters.rame, text.rame.T0004);
        await Template.ƒS.Character.hide(Template.characters.rame);
        await Template.ƒS.Character.show(Template.characters.rame, Template.characters.rame.pose.sad, Template.ƒS.positionPercent(50, 110));
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
                await Template.ƒS.Speech.tell(Template.characters.inara, text.inara.T0003);
                await Template.ƒS.Speech.tell(Template.characters.rame, text.rame.T0004);
                await Template.ƒS.Speech.tell(Template.characters.rame, text.rame.T0007);
                await Template.ƒS.Character.hide(Template.characters.inara);
                await Template.ƒS.Character.hide(Template.characters.rame);
                await Template.ƒS.update(2);
                await Template.ƒS.Location.show(Template.locations.phone);
                await Template.ƒS.update(2);
                await Template.ƒS.Location.show(Template.locations.timeskip);
                Template.ƒS.Speech.hide();
                return "Glitch";
            case PanicAttack.runaway:
                await Template.ƒS.Character.hide(Template.characters.inara);
                await Template.ƒS.Character.show(Template.characters.inara, Template.characters.inara.pose.upset, Template.ƒS.positionPercent(30, 110));
                await Template.ƒS.Speech.tell(Template.characters.inara, text.inara.T0004);
                await Template.ƒS.Character.animate(Template.characters.inara, Template.characters.inara.pose.upset, Template.fromLeftToOutOfCanvas());
                return "BadEnding";
        }
        await Template.ƒS.update(1);
    }
    Template.Friendship = Friendship;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Glitch() {
        console.log("Glitch");
        let text = {
            narrator: {
                T0000: "Suddenly at Inara's home"
            },
            inara: {
                T0000: "What is happening to me??",
                T0001: "I can't show up to class like this",
                T0002: "What if they bully me too",
                T0003: "They will think I'm a freak",
                T0004: "This is all her fault",
                T0005: "I should stay away from her",
                T0006: "Should I call her?",
                T0007: "Maybe she has an idea what's happening",
                T0008: "Thank you for showing this side of myself",
                T0009: "I just had to believe in myself more",
                T0010: "Her number is"
            },
            rame: {
                T0000: "That was all you!",
                T0001: "You learned to love yourself and that's how you got confident",
                T0002: "Come here, don't be scared"
            }
        };
        //City
        await Template.ƒS.update(3);
        await Template.ƒS.Location.show(Template.locations.city);
        await Template.ƒS.Character.show(Template.characters.inara, Template.characters.inara.pose.embarrassed, Template.ƒS.positionPercent(30, 110));
        await Template.ƒS.Speech.tell(Template.characters.inara, text.inara.T0008);
        await Template.ƒS.Character.show(Template.characters.rame, Template.characters.rame.pose.flirty, Template.ƒS.positionPercent(50, 110));
        await Template.ƒS.Speech.tell(Template.characters.rame, text.rame.T0000);
        await Template.ƒS.Speech.tell(Template.characters.rame, text.rame.T0001);
        await Template.ƒS.Character.hideAll();
        await Template.ƒS.Location.show(Template.locations.black);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000);
        await Template.ƒS.Speech.hide();
        //Glitch
        Template.ƒS.Sound.fade(Template.sound.neonheart, 0.5, 1);
        await Template.ƒS.Location.show(Template.locations.black);
        await Template.ƒS.update(0.1);
        await Template.ƒS.Location.show(Template.locations.heart);
        await Template.ƒS.update(0.1);
        await Template.ƒS.Location.show(Template.locations.yellowheart);
        await Template.ƒS.update(0.1);
        await Template.ƒS.Location.show(Template.locations.black);
        await Template.ƒS.update(0.1);
        await Template.ƒS.Location.show(Template.locations.yellowheart);
        await Template.ƒS.update(0.1);
        await Template.ƒS.Location.show(Template.locations.purpleheart);
        await Template.ƒS.update(0.1);
        await Template.ƒS.Location.show(Template.locations.yellowheart);
        await Template.ƒS.update(0.1);
        await Template.ƒS.Location.show(Template.locations.black);
        Template.ƒS.update(4);
        await Template.ƒS.Character.show(Template.characters.inara, Template.characters.inara.pose.surprised, Template.ƒS.positionPercent(60, 110));
        await Template.ƒS.Speech.tell(Template.characters.inara, text.inara.T0000);
        await Template.ƒS.Speech.tell(Template.characters.inara, text.inara.T0001);
        await Template.ƒS.Speech.tell(Template.characters.inara, text.inara.T0006);
        let GlitchOption = {
            callrame: "Call Rame",
            donotcall: "Don't Call Rame"
        };
        let Glitch = await Template.ƒS.Menu.getInput(GlitchOption, "individualCSSClass");
        switch (Glitch) {
            case GlitchOption.callrame:
                Template.data.phone.number = await Template.ƒS.Speech.getInput();
                await Template.ƒS.Speech.tell(Template.characters.inara, "Her number is  " + Template.data.phone.number);
                await Template.ƒS.Character.hide(Template.characters.inara);
                await Template.ƒS.Sound.fade(Template.sound.ring, 0.3, 1);
                await Template.ƒS.update(0.7);
                await Template.ƒS.Speech.tell(Template.characters.rame, "Hello?");
                await Template.ƒS.Speech.tell(Template.characters.inara, "Something weird is happening to me!");
                await Template.ƒS.Speech.tell(Template.characters.rame, "I'll be right there");
                Template.ƒS.Speech.hide();
                // Meet-Up
                await Template.ƒS.Location.show(Template.locations.city);
                await Template.ƒS.update(Template.transitions.clock.duration, Template.transitions.clock.alpha, Template.transitions.clock.edge);
                await Template.ƒS.Character.show(Template.characters.rame, Template.characters.rame.pose.scared, Template.ƒS.positionPercent(50, 110));
                await Template.ƒS.Character.show(Template.characters.inara, Template.characters.inara.pose.upset, Template.ƒS.positionPercent(30, 110));
                await Template.ƒS.Speech.tell(Template.characters.rame, text.rame.T0002);
                await Template.ƒS.Character.animate(Template.characters.rame, Template.characters.rame.pose.scared, Template.ToTheCenterLeft());
                await Template.ƒS.Character.animate(Template.characters.inara, Template.characters.inara.pose.upset, Template.ToTheCenterRight());
                await Template.ƒS.update(1);
                await Template.ƒS.Speech.tell(Template.characters.rame, "Shhh, you're fine, I'm here now");
                await Template.ƒS.Speech.tell(Template.characters.inara, "What would I do without you...");
                Template.ƒS.Character.hideAll();
                Template.ƒS.Speech.hide();
                await Template.ƒS.Location.show(Template.locations.black);
                return "BestEnding";
            case GlitchOption.donotcall:
                await Template.ƒS.Speech.tell(Template.characters.inara, text.inara.T0005);
                await Template.ƒS.Speech.tell(Template.characters.inara, text.inara.T0004);
                return "BadEnding";
        }
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
        alert("DISCLAIMER!: The neon hearts are only visible to the reader to have a better understanding of the visualisation");
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
                        await Template.ƒS.Speech.tell(Template.characters.rame, "That's fine, I won't ask any further personal questions");
                        return "QuickEnding";
                }
                break;
        }
        Template.ƒS.Sound.fade(Template.sound.backgroundTheme, 0, 1);
        await Template.ƒS.update(1);
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
        thunder: "./Audio/Thunder.mp3",
        ring: "./Audio/Ring.mp3"
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
        },
        yellowheart: {
            name: "Yellowheart",
            background: "./Images/Background/Yellowheart.png"
        },
        purpleheart: {
            name: "Purpleheart",
            background: "./Images/Background/Purpleheart.png"
        },
        fullheart: {
            name: "Fullheart",
            background: "./Images/Background/Fullheart.png"
        },
        phone: {
            name: "Phone",
            background: "./Images/Background/phone.png"
        }
    };
    Template.data = {
        phone: {
            number: ""
        },
        score: 0,
        state: {
            a: 1
        }
    };
    Template.characters = {
        narrator: {
            name: "Narrator"
        },
        rame: {
            name: "Ramé",
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
                embarrassed: "./Images/Characters/Embarrassed_Inara.png",
                surprised: "./Images/Characters/Surprised_Inara.png",
                shy: "./Images/Characters/Shy_Inara2.png",
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
    function ToTheCenterLeft() {
        return {
            start: { translation: Template.ƒS.positionPercent(50, 110) },
            end: { translation: Template.ƒS.positionPercent(40, 110) },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.ToTheCenterLeft = ToTheCenterLeft;
    function ToTheCenterRight() {
        return {
            start: { translation: Template.ƒS.positionPercent(30, 110) },
            end: { translation: Template.ƒS.positionPercent(40, 110) },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.ToTheCenterRight = ToTheCenterRight;
    Template.dataForSave = {
        points: 0
    };
    let inGameMenu = {
        save: "Save",
        load: "Load",
        close: "Close",
        credits: "Credits"
        // open: "Open"
    };
    let gameMenu;
    // true = offen; false = geschlossen
    let menu = true;
    function showCredits() {
        Template.ƒS.Text.addClass("credits");
        Template.ƒS.Text.print("<h4>Characters:</h4> Sevda Mahmutovic <p> <h4>Backgrounds:</h4> Sevda Mahmutovic <br> https://animelandscape.blogspot.com/</p> <p><h4>Sounds:</h4> https://www.youtube.com/watch?v=kXYIut4TnhI <br> https://www.youtube.com/watch?v=vJ08fwaLXwg <br> https://www.youtube.com/watch?v=SwGsS3jJkB8 <br> https://www.youtube.com/watch?v=MtHjkMYWI84 <br> https://pixabay.com/music/modern-classical-the-introvert-michael-kobrin-10959/ <br> NO COPYRIGHT FOR THE SOUNDS");
    }
    Template.showCredits = showCredits;
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
            { scene: Template.Introduction, name: "Introduction to FS" },
            { id: "Conversation", scene: Template.Conversation, name: "Conversation" },
            // Neutral Scenes
            { id: "Thriftshop", scene: Template.Thriftshop, name: "Thriftshop" },
            { id: "Books", scene: Template.Books, name: "Books" },
            { id: "Drawing", scene: Template.Drawing, name: "Drawing" },
            // {id: "Truth", scene:Truth, name:"Truth"},
            { id: "Friendship", scene: Template.Friendship, name: "Friendship" },
            // Turning Point
            { id: "Glitch", scene: Template.Glitch, name: "Glitch" },
            // Endings
            { id: "QuickEnding", scene: Template.QuickEnding, name: "QuickEnding", next: "End" },
            { id: "BadEnding", scene: Template.BadEnding, name: "BadEnding", next: "End" },
            { id: "BestEnding", scene: Template.BestEnding, name: "BestEnding", next: "End" },
            { id: "End", scene: Template.End, name: "End" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
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