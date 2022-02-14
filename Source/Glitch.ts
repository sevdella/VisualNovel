namespace Template {
    export async function Glitch(): ƒS.SceneReturn {
        console.log("Glitch");

        let text= {
            narrator:{
                T0000:"Suddenly at home"
            },
            inara: {
                T0000:"What is happening to me??",
                T0001:"I can't show up to class like this",
                T0002:"What if they bully me too",
                T0003:"They will think I'm a freak",
                T0004:"This is all her fault",
                T0005:"I should stay away from her",
                T0006:"I should call her",
                T0007:"Maybe she has an idea what's happening",
                T0008:"Thank you for showing this side of myself",
                T0009:"I just had to believe in myself more"
            }
        };

        await ƒS.update(1);
        await ƒS.Location.show(locations.city);
        await ƒS.Character.show(characters.inara,characters.inara.pose.embarrassed, ƒS.positionPercent(30,110));
        await ƒS.Speech.tell(characters.inara,text.inara.T0008);
        ƒS.Sound.fade(sound.neonheart, 0.3,1);
        await ƒS.Location.show(locations.black);
        await ƒS.update(0.1);
        await ƒS.Location.show(locations.heart);
        await ƒS.update(0.1);
        await ƒS.Location.show(locations.yellowheart);
        await ƒS.update(0.1);
        await ƒS.Location.show(locations.black);
        await ƒS.update(0.1);
        await ƒS.Location.show(locations.yellowheart);
        await ƒS.update(0.1);
        await ƒS.Location.show(locations.purpleheart);
        await ƒS.update(0.1);
        await ƒS.Location.show(locations.yellowheart);
        await ƒS.update(0.1);
        await ƒS.Location.show(locations.black);

        ƒS.update(1);
        await ƒS.Character.show(characters.inara,characters.inara.pose.surprised, ƒS.positionPercent(60,110));
        await ƒS.Speech.tell(characters.inara, text.inara.T0000);
        await ƒS.Speech.tell(characters.inara, text.inara.T0001);
        await ƒS.Character.hide(characters.inara);
        await ƒS.Speech.hide();
        // School
        await ƒS.Location.show(locations.school);
        await ƒS.update(transitions.clock.duration, transitions.clock.alpha, transitions.clock.edge);
        await ƒS.Character.show(characters.rame,characters.rame.pose.scared, ƒS.positionPercent(50,110));
        await ƒS.update(1);
        return "";
    }
}