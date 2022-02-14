namespace Template {
    export async function Friendship(): ƒS.SceneReturn {
        console.log("Friendship");

        let text = {
            narrator:{
                T0000:"Inara and Rame grow closer and spend most of their time together",
                T0001:""
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
        }
        await ƒS.Location.show(locations.black);
        await ƒS.update(transitions.clock.duration, transitions.clock.alpha, transitions.clock.edge);
        await ƒS.Speech.tell(characters.narrator,text.narrator.T0000);
        await ƒS.update(1);
        await ƒS.Location.show(locations.inbookshop);
        await ƒS.update(transitions.clock.duration, transitions.clock.alpha, transitions.clock.edge);
        await ƒS.Character.show(characters.inara, characters.inara.pose.happy,ƒS.positionPercent(30,110));
        await ƒS.update(0.3);
        await ƒS.Speech.tell(characters.inara,text.inara.T0000);
        await ƒS.Character.show(characters.rame, characters.rame.pose.flirty,ƒS.positionPercent(50, 110));
        await ƒS.Speech.tell(characters.rame,text.rame.T0000);
        await ƒS.update(0.3);
        await ƒS.Speech.tell(characters.rame,text.rame.T0001);
        await ƒS.Location.show(locations.bookshop);
        await ƒS.update(transitions.swirl.duration, transitions.swirl.alpha, transitions.swirl.edge);
        ƒS.update(2);
        await ƒS.Character.hide(characters.rame);
        await ƒS.Character.show(characters.rame,characters.rame.pose.happy, ƒS.positionPercent(50,110));
        await ƒS.Speech.tell(characters.rame,text.rame.T0002);
        await ƒS.Speech.tell(characters.inara,text.inara.T0001);
        await ƒS.Character.hide(characters.inara);
        await ƒS.Sound.fade(sound.thunder,0.4,1);
        await ƒS.Character.show(characters.inara, characters.inara.pose.surprised,ƒS.positionPercent(30,110));
        ƒS.update(0.1);
        await ƒS.Speech.tell(characters.inara, text.inara.T0002);
        await ƒS.Speech.tell(characters.rame, text.rame.T0003);
        await ƒS.Speech.tell(characters.rame, text.rame.T0004);
        await ƒS.Speech.tell(characters.inara, text.inara.T0003);
        await ƒS.Speech.tell(characters.rame, text.rame.T0005);
        
        await ƒS.update(1);
        

        let PanicAttack = {
            seekhelp: "Help me",
            runaway: "I'm sorry"

        };

        let Panic = await ƒS.Menu.getInput(PanicAttack, "individualCSSClass");

        switch (Panic) {

            case PanicAttack.seekhelp:
            //await ƒS.Character.show(characters.inara,characters.inara.pose.upset, ƒS.positionPercent(30,110));
            await ƒS.Speech.tell(characters.inara, text.inara.T0003);
            await ƒS.Speech.tell(characters.rame,text.rame.T0004);
            await ƒS.Character.hide(characters.inara);
            await ƒS.Character.hide(characters.rame);
            return "Glitch";

            case PanicAttack.runaway:
            await ƒS.Character.hide(characters.inara);
            await ƒS.Character.show(characters.inara,characters.inara.pose.upset, ƒS.positionPercent(30,110));
            await ƒS.Speech.tell(characters.inara,text.inara.T0004);
            await ƒS.Character.animate(characters.inara, characters.inara.pose.upset,fromLeftToOutOfCanvas());
            return "BadEnding";







        }
    }
}
