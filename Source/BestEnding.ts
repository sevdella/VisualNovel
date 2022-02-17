namespace Template {
    export async function BestEnding(): ƒS.SceneReturn {
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
        }
        
        await ƒS.Sound.fade(sound.neonheart,0.3,1);
        await ƒS.update();
        await ƒS.Location.show(locations.fullheart);
        await ƒS.Speech.tell(characters.inara, text.inara.T0000);
        await ƒS.Speech.tell(characters.rame,text.rame.T0000);
        await ƒS.Speech.tell(characters.inara, text.inara.T0001);
        await ƒS.Speech.tell(characters.rame,text.rame.T0001);
        await ƒS.Speech.tell(characters.rame,text.rame.T0002);
        await ƒS.Speech.tell(characters.inara, text.inara.T0002);
        await ƒS.Speech.tell(characters.rame,text.rame.T0003);
        await ƒS.Speech.tell(characters.inara, text.inara.T0003);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0000);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0001);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0002);
        ƒS.Speech.hide();
        await ƒS.Sound.fade(sound.backgroundTheme,0,0.2,false);
        
    }
}