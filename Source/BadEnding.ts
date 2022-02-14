namespace Template {
    export async function BadEnding(): ƒS.SceneReturn {
        console.log("BadEnding");

      ƒS.Sound.fade(sound.backgroundTheme, 0, 0.1, false);
      ƒS.Sound.fade(sound.neonheart, 0.3, 0.1, true);
      ƒS.Character.hideAll();
      await ƒS.Location.show(locations.greyheart);
      await ƒS.update(0.7);

    }
}