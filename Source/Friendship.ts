namespace Template {
    export async function Friendship(): ƒS.SceneReturn {
        console.log("Friendship");

        let text = {
            inara: {
                T0000: "yoohoo",
                T0001: "What the",
                T0002: "How did you find out",
                T0003:"Can You really help me?",
                T0004:"I can't show up to class like this",
                T0005: "What if they bully me as well"

            },

            rame: {
                T0000: "blablabla",
                T0001: "Let's head outside",
                T0002: "It's nothing to be ashamed of",
                T0003: "I'm just like you",
                T0004: "Yes"

            }
        }

        await ƒS.Location.show(locations.inbookshop);
        await ƒS.update(transitions.slide.duration, transitions.slide.alpha, transitions.slide.edge);
        await ƒS.Character.show(characters.rame, characters.rame.pose.happy,ƒS.positionPercent(50, 110));
        await ƒS.update(0.7);
        await ƒS.Speech.tell(characters.rame,text.rame.T0000);
        await ƒS.Character.show(characters.inara, characters.inara.pose.shy,ƒS.positionPercent(30,110));
        await ƒS.Speech.tell(characters.inara,text.inara.T0000);
        await ƒS.update(0.3);
        await ƒS.Speech.tell(characters.rame,text.rame.T0001);
        await ƒS.Location.show(locations.bookshop);
        ƒS.update(2);
        await ƒS.Speech.tell(characters.inara,text.inara.T0001);
        await ƒS.Character.hide(characters.inara);
        await ƒS.Character.show(characters.inara, characters.inara.pose.upset,ƒS.positionPercent(30,110));
        ƒS.update(2);
        await ƒS.Speech.tell(characters.inara, text.inara.T0002);
        await ƒS.Speech.tell(characters.rame, text.rame.T0002);
        await ƒS.Speech.tell(characters.rame, text.rame.T0003);
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
            await ƒS.Location.show(locations.timeskip);
            await ƒS.update(0.7);
            await ƒS.Location.show(locations.black);
            await ƒS.Location.show(locations.heart);
            ƒS.update(1);
            await ƒS.Character.show(characters.inara,characters.inara.pose.surprised, ƒS.positionPercent(60,110));
            await ƒS.Speech.tell(characters.inara, text.inara.T0004);
            await ƒS.Speech.tell(characters.inara, text.inara.T0005);
            await ƒS.Character.hide(characters.inara);
            await ƒS.Speech.hide();
            // School
            await ƒS.Location.show(locations.school);
            await ƒS.update(transitions.clock.duration, transitions.clock.alpha, transitions.clock.edge);
            await ƒS.Character.show(characters.rame,characters.rame.pose.scared, ƒS.positionPercent(50,110));
            await ƒS.update(1);
            return "Truth";

            case PanicAttack.runaway:
            await ƒS.Character.show(characters.inara,characters.inara.pose.upset, ƒS.positionPercent(30,110));
            await ƒS.Character.animate(characters.inara, characters.inara.pose.upset,fromLeftToOutOfCanvas());
            return "BadEnding";







        }
    }
}
