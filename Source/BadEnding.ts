namespace Template {
    export async function BadEnding(): ƒS.SceneReturn {
        console.log("BadEnding");

        let text = {
          narrator: {
            T0000: "Yet Again Inara pushes the people away from her as soon as she experiences an inconvenience",
            T0001: "She doesn't want to get hurt",
            T0002: "But she has people to lean on",
            T0003: "Try to be more trusting and don't try to get through your sufferings on your own"
          }
        }

      ƒS.Sound.fade(sound.backgroundTheme, 0, 0.1, false);
      ƒS.Sound.fade(sound.neonheart, 0.3, 0.1, true);
      ƒS.Character.hideAll();
      await ƒS.Location.show(locations.greyheart);
      await ƒS.update(0.7);
      await ƒS.Speech.tell(characters.narrator, text.narrator.T0000);
      await ƒS.Speech.tell(characters.narrator, text.narrator.T0001);
      await ƒS.Speech.tell(characters.narrator, text.narrator.T0002);
      await ƒS.Speech.tell(characters.narrator, text.narrator.T0003);
      ƒS.Speech.hide();
      ƒS.Sound.fade(sound.neonheart, 0, 0.1, false);
    }
}