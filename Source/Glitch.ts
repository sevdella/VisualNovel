namespace Template {
    export async function Glitch(): ƒS.SceneReturn {
        console.log("Glitch");

        let text= {
            inara: {
                T0000:"",
                T0001:""
            }
        }


        await ƒS.Location.show(locations.timeskip);
        await ƒS.update(0.7);
        await ƒS.Location.show(locations.black);
        await ƒS.Location.show(locations.heart);
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
    }
}