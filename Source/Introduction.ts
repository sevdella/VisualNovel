namespace Template {
  export async function Introduction(): ƒS.SceneReturn {
    console.log("Intro");


    let text = {
      narrator: {
        T0000: "It's the Year 2105, the world developed drastically, just like humanity whose hearts now function with neon lights.",
        T0001: "Every individual has their significant colour glowing from their heart",
        T0002: "Should they ever find their Soulmate, the colour of the significant other will fuse with ones own colour",
        T0003: "But..."

      },

      inara: {
        T0000: "First Day of College...",
        T0001: "Alright, deep breath",
        T0002: "This is a new start for me, I can do this!",
        T0003: "Oh no, group projects already?",
        T0004: "Maybe it's possible to do this project on my own?",
        T0005: ".. I won't be like this anymore!",
        T0006: "Hi I'm Ramé, nice to meet you, I'd love to",
        T0007: "Sorry, I think I'll work on a solo project"
      },

      rame: {
        T0000:"Hey, I'm Ramé!",
        T0001:"Seems like you don't have a group yet, wanna group together?",
        T0002:"Alright then..See ya.",
        T0003:"Cool! Come over to my table",
        T0004:"I think we've done enough for now, let's take a break",
        T0005:"Tell me a bit about yourself! I feel like we might have something in common",
        T0006:"I looove to read, what about you?",
      }
    };

    ƒS.Speech.setTickerDelays(80, 500);
    ƒS.Sound.fade(sound.backgroundTheme, 0.2, 0.9, true);


    await ƒS.Location.show(locations.black);
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0000);
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0001);
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0002);
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0003);
    alert("The neon hearts visible on the chest of the characters is just a visualisation and not visible to the characters");
    
    ƒS.Speech.hide();
    await ƒS.update(1);
    await ƒS.Location.show(locations.school);
    await ƒS.update(transitions.clock.duration, transitions.clock.alpha, transitions.clock.edge);
    await ƒS.Character.show(characters.inara, characters.inara.pose.shy, ƒS.positionPercent(30, 110));
    await ƒS.update(0.7);
    await ƒS.Speech.tell(characters.inara, text.inara.T0000);
    await ƒS.Speech.tell(characters.inara, text.inara.T0001);
    await ƒS.Speech.tell(characters.inara, text.inara.T0002);
    await ƒS.Character.hide(characters.inara);
    await ƒS.Speech.hide();
    await ƒS.update(0.5);

    await ƒS.Location.show(locations.classroom);
    await ƒS.update(transitions.clock.duration, transitions.clock.alpha, transitions.clock.edge);
    await ƒS.update(0.3);
    await ƒS.Character.show(characters.inara, characters.inara.pose.shy, ƒS.positionPercent(30, 110));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.inara, text.inara.T0003);
    await ƒS.Speech.tell(characters.inara, text.inara.T0004);
    await ƒS.Character.animate(characters.rame, characters.rame.pose.flirty, fromRighttoLeft());
    await ƒS.Speech.tell(characters.rame,text.rame.T0000);
    await ƒS.Speech.tell(characters.rame, text.rame.T0001)


    let firstDialogueElementOptions = {
        iSayYes: "Yes",
        iSayNo: "No"
      };

    let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementOptions, "individualCSSClass");
    


    switch (firstDialogueElement) {
      case firstDialogueElementOptions.iSayNo:
          await ƒS.Speech.tell(characters.inara, text.inara.T0007);
          await ƒS.Speech.tell(characters.rame, text.rame.T0002);
          await ƒS.update(0.2);
      return "QuickEnding";
        
        case firstDialogueElementOptions.iSayYes:
          await ƒS.Character.show(characters.inara, characters.inara.pose.happy, ƒS.positionPercent(120,110));
          await ƒS.Speech.tell(characters.inara,text.inara.T0005);
          await ƒS.Speech.tell(characters.inara,text.inara.T0006);
          await ƒS.Speech.tell(characters.rame, text.rame.T0003);
          ƒS.Character.hideAll();
          await ƒS.Location.show(locations.black);
          await ƒS.update(0.2);
          await ƒS.Location.show(locations.classroom);
          await ƒS.Character.show(characters.inara, characters.inara.pose.happy, ƒS.positionPercent(30,110));
          await ƒS.Character.show(characters.rame, characters.rame.pose.happy, ƒS.positionPercent(50,110));
          await ƒS.update(1);
          await ƒS.Speech.tell(characters.rame, text.rame.T0004);
          await ƒS.Speech.tell(characters.rame, text.rame.T0005);
          await ƒS.Speech.tell(characters.rame, text.rame.T0006);

        let replyToHerDecision ={
          answer: "Reply to her",
          dontAnswer: "Refuse to talk about yourself"
        };

        let replyToHer = await ƒS.Menu.getInput(replyToHerDecision,"individualCSSClass");

        switch(replyToHer) {

          case replyToHerDecision.answer:
            await ƒS.Speech.tell(characters.inara, "Alright, Alright");
            ƒS.update(0.7);
            return "Conversation";

          case replyToHerDecision.dontAnswer:
            await ƒS.Speech.tell(characters.inara, "I'd rather not talk about myself");
            break;
        }
        break;




      
    }
    

    

    ƒS.Sound.fade(sound.backgroundTheme, 0, 1);
    //ƒS.Character.hideAll();
    await ƒS.update(1);

    // if (dataForSave.points === 100) {
    //   return: End();
    // }

    // return "Ende";
    //return End();
  }

}