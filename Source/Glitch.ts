namespace Template {
    export async function Glitch(): ƒS.SceneReturn {
        console.log("Glitch");

        let text= {
            narrator:{
                T0000:"Suddenly at Inara's home"
            },
            inara: {
                T0000:"What is happening to me??",
                T0001:"I can't show up to class like this",
                T0002:"What if they bully me too",
                T0003:"They will think I'm a freak",
                T0004:"This is all her fault",
                T0005:"I should stay away from her",
                T0006:"Should I call her?",
                T0007:"Maybe she has an idea what's happening",
                T0008:"Thank you for showing this side of myself",
                T0009:"I just had to believe in myself more",
                T0010: "Her number is"
            },

            rame:{
                T0000:"That was all you!",
                T0001:"You learned to love yourself and that's how you got confident",
                T0002:"Come here, don't be scared"
            }
        };

        //City
        await ƒS.update(3);
        await ƒS.Location.show(locations.city);
        await ƒS.Character.show(characters.inara,characters.inara.pose.embarrassed, ƒS.positionPercent(30,110));
        await ƒS.Speech.tell(characters.inara,text.inara.T0008);
        await ƒS.Character.show(characters.rame,characters.rame.pose.flirty,ƒS.positionPercent(50,110));
        await ƒS.Speech.tell(characters.rame,text.rame.T0000);
        await ƒS.Speech.tell(characters.rame,text.rame.T0001);
        await ƒS.Character.hideAll();
        await ƒS.Location.show(locations.black);
        await ƒS.Speech.tell(characters.narrator,text.narrator.T0000);
        await ƒS.Speech.hide();


        //Glitch
        ƒS.Sound.fade(sound.neonheart,0.5,1);
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

        ƒS.update(4);
        await ƒS.Character.show(characters.inara,characters.inara.pose.surprised, ƒS.positionPercent(60,110));
        await ƒS.Speech.tell(characters.inara, text.inara.T0000);
        await ƒS.Speech.tell(characters.inara, text.inara.T0001);
        await ƒS.Speech.tell(characters.inara, text.inara.T0006);

        let GlitchOption = {
            callrame: "Call Rame",
            donotcall: "Don't Call Rame"
        }

        let Glitch = await ƒS.Menu.getInput(GlitchOption, "individualCSSClass");

        switch (Glitch) {

            case GlitchOption.callrame:
        data.phone.number = await ƒS.Speech.getInput();
        await ƒS.Speech.tell(characters.inara, "Her number is  " + data.phone.number);
        await ƒS.Character.hide(characters.inara);
        await ƒS.Sound.fade(sound.ring, 0.3,1);
        await ƒS.update(0.7);
        await ƒS.Speech.tell(characters.rame, "Hello?");
        await ƒS.Speech.tell(characters.inara, "Something weird is happening to me!");
        await ƒS.Speech.tell(characters.rame, "I'll be right there");
        ƒS.Speech.hide();  
         // Meet-Up
        await ƒS.Location.show(locations.city);
        await ƒS.update(transitions.clock.duration, transitions.clock.alpha, transitions.clock.edge);
        await ƒS.Character.show(characters.rame,characters.rame.pose.scared, ƒS.positionPercent(50,110));
        await ƒS.Character.show(characters.inara,characters.inara.pose.upset, ƒS.positionPercent(30,110));
        await ƒS.Speech.tell(characters.rame,text.rame.T0002);
        await ƒS.Character.animate(characters.rame,characters.rame.pose.scared, ToTheCenterLeft());
        await ƒS.Character.animate(characters.inara,characters.inara.pose.upset, ToTheCenterRight());
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.rame, "Shhh, you're fine, I'm here now");
        await ƒS.Speech.tell(characters.inara, "What would I do without you...");
        ƒS.Character.hideAll();
        ƒS.Speech.hide();
        await ƒS.Location.show(locations.black);
         return "BestEnding"; 


            case GlitchOption.donotcall:
        await ƒS.Speech.tell(characters.inara, text.inara.T0005);
        await ƒS.Speech.tell(characters.inara,text.inara.T0004);
        return "BadEnding";
            

        }

    
    }
}