namespace Template {
    export async function ShoppingWithRame(): ƒS.SceneReturn {
        console.log("ShoppingWithRame");

        let text = {
            rame: {
                T0000: "Wow what a cute shop",
                T0001: "How did you even find it, it's in such a hidden location?",
                T0002: "This is such a nice break from the bustling city life",
                T0003: "I get why you like it here"
            },
            inara: {
                T0000: "Happens if you wander around mindlessly...",
                T0001: "Right? Look at this skirt, isn't it cute?"
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
        await ƒS.Speech.tell(characters.inara, text.inara.T0001);
        await ƒS.Character.hideAll();
        await ƒS.Location.show(locations.black);
        await ƒS.Location.show(locations.thriftshop);
        await ƒS.Character.show(characters.inara, characters.inara.pose.happy, ƒS.positionPercent(30, 110));
        await ƒS.Character.show(characters.rame, characters.rame.pose.happy, ƒS.positionPercent(50, 110));
        



    }
}
