namespace Template {
    export async function QuickEnding(): ƒS.SceneReturn {
      console.log("QuickEnding");

      let text = {
          narrator:{
              T0000:"Inara didn't befriend anyone throughout her college life",
              T0001:"She stayed in her safe bubble",
              T0002:"Not knowing what opportunities she might've missed",
              T0003:"Don't be shy, try to open up a bit towards people"
          }
      };

      ƒS.Sound.fade(sound.backgroundTheme, 0, 0.1, false);
      ƒS.Sound.fade(sound.neonheart, 0.3, 0.1, true);
      ƒS.Character.hideAll();
      await ƒS.Location.show(locations.greyheart);
      await ƒS.update(0.7);
      
    
      await ƒS.Speech.tell(characters.narrator, text.narrator.T0000);
      await ƒS.Speech.tell(characters.narrator, text.narrator.T0001);
      await ƒS.Speech.tell(characters.narrator, text.narrator.T0002);
      await ƒS.Speech.tell(characters.narrator, text.narrator.T0003);
      ƒS.Sound.fade(sound.neonheart,0,0.1,false);
      ƒS.Speech.hide();
    }
}