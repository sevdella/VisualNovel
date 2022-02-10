namespace Template {
    export async function ShoppingWithRame(): ƒS.SceneReturn {
        console.log("ShoppingWithRame");

        let text = {
            rame: {
                T0000: "Wow what a cute shop",
                T0001: "How did you even find it, it's in such a hidden location?",
                T0002: "This is such a nice break from the bustling city life",
                T0003: "I get why you like it here",
                T0004: "I have to say, after hanging out with you...",
                T0005: "..it seems to me, that we actually have a lot in common",
                T0006: "It feels good not to be alone anymore",
                T0007: "It's quite hard to find someone with a dysfunctional heart these days",
                T0008: "It's nothing to be ashamed of! It's actually really cool",
                T0009: "Inara..believe me. I will show you"
            },
            inara: {
                T0000: "Happens if you wander around mindlessly...",
                T0001: "Right? Look at this skirt, isn't it cute?",
                T0002: "W-What do you mean??",
                T0003: "H-How did you-",
                T0004: "I was bullied for it, there's nothing cool about it!!"

            }

    
        }
        await ƒS.Location.show(locations.thriftshop);
        await ƒS.update(transitions.stripes.duration, transitions.stripes.alpha, transitions.stripes.edge);
        await ƒS.Character.show(characters.inara, characters.inara.pose.happy, ƒS.positionPercent(30, 110));
        await ƒS.Character.show(characters.rame, characters.rame.pose.happy, ƒS.positionPercent(50, 110));
        await ƒS.Speech.tell(characters.rame, text.rame.T0000);
        await ƒS.Speech.tell(characters.rame, text.rame.T0001);
        await ƒS.Speech.tell(characters.inara, text.inara.T0000);
        await ƒS.Speech.tell(characters.rame, text.rame.T0002);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.inara, text.inara.T0001);
        await ƒS.Character.hideAll();
        //await ƒS.Location.show(locations.black);
        //await ƒS.Location.show(locations.thriftshop);
        //await ƒS.Character.show(characters.inara, characters.inara.pose.happy, ƒS.positionPercent(30, 110));
        //await ƒS.Character.show(characters.rame, characters.rame.pose.happy, ƒS.positionPercent(50, 110));



        let PanicOption = {
            seekhelp: "Help me",
            runaway: "I'm sorry"

        };
        
        let Panic = await ƒS.Menu.getInput(PanicOption, "individualCSSClass");

        switch (Panic) {

            case PanicOption.seekhelp:

            case PanicOption.runaway:

        }



    }
}
