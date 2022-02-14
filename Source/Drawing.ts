namespace Template {
    export async function Drawing(): ƒS.SceneReturn {
        console.log("Drawing");

        let text = {
            inara:{
                T0000: "This is just a work in progress but my fave one so far",
                T0001: "Sure!"
            },
            rame:{
                T0000: "You are really talented!",
                T0001: "I need to get some drawing lessons from you!"
            }
        }

            await ƒS.Location.show(locations.drawing1);
            await ƒS.Speech.tell(characters.inara,text.inara.T0000);
            await ƒS.Sound.fade(sound.paper,0.2,1,true);
            await ƒS.update(2);
            await ƒS.Location.show(locations.drawing2);
            await ƒS.update(2);
            await ƒS.Sound.fade(sound.paper,0,1,false);
            await ƒS.Speech.tell(characters.rame,text.rame.T0000);
            await ƒS.Speech.tell(characters.rame,text.rame.T0001);
            await ƒS.Speech.tell(characters.inara,text.inara.T0001);
            return "Friendship";
    }
}