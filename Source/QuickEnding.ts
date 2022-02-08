namespace Template {
    export async function QuickEnding(): ƒS.SceneReturn {
      console.log("QuickEnding");

      let text = {
          narrator:{
              T0000:"The End",
              T0001:""
          }
      };

      ƒS.Character.hideAll();
      await ƒS.Location.show(locations.greyheart);
      await ƒS.update(0.7);
      
    
      await ƒS.Speech.tell(characters.narrator, text.narrator.T0000);
      ƒS.Sound.fade(sound.backgroundTheme, 0, 1);
      ƒS.Speech.hide();
    }
}