namespace Template {
    export async function Thriftshop(): ƒS.SceneReturn {
        console.log("Thriftshop");

        let text = {
            rame: {
                T0000: "Wow what a cute shop",
                T0001: "How did you even find it, it's in such a hidden location?",
                T0002: "This is such a nice break from the bustling city life",
                T0003: "Today was really fun! WE should do this more often"
            },
            inara: {
                T0000: "Happens if you wander around mindlessly...",
                T0001: "Right? Look at this skirt, isn't it cute?"
            }


        }

        await ƒS.update(1);
        await ƒS.Location.show(locations.thriftshop);
        await ƒS.Character.show(characters.inara, characters.inara.pose.happy, ƒS.positionPercent(30, 110));
        await ƒS.Character.show(characters.rame, characters.rame.pose.happy, ƒS.positionPercent(50, 110));
        await ƒS.Speech.tell(characters.rame, text.rame.T0000);
        await ƒS.Speech.tell(characters.rame, text.rame.T0001);
        await ƒS.Speech.tell(characters.inara, text.inara.T0000);
        await ƒS.Speech.tell(characters.rame, text.rame.T0002);
        await ƒS.Speech.tell(characters.inara, text.inara.T0001);
        await ƒS.Speech.tell(characters.rame,text.rame.T0003);
        await ƒS.Character.hide(characters.inara);
        await ƒS.Character.hide(characters.rame);
        return "Friendship";

    }
}