namespace Template {
    export async function Conversation(): ƒS.SceneReturn {
        console.log("Conversation");

        let text = {
            rame: {
                T0000: "Let's go for some shopping then!",
                T0001: "Let's visit your bookshop, I really want to see it!",
                T0002: "You need to show me some drawings!",
                
            },
            inara: {
                T0000: "I love vintage clothing, so i go thrift shopping in my free time",
                T0001: "I'm a bookworm, whenever I find a few minutes, you'll find me reading.",
                T0002: "I work in a Book Shop aswell. It's not a busy one",
                T0003: "So I just get paid for reading basically",
                T0004: "I'm not that big of an artist but drawing has been one of my favourite hobbies since forever",
            }


        }

        let HobbyOption = {
            thrift: "Shopping",
            read: "Reading",
            draw: "Drawing"

        };

        let Hobby = await ƒS.Menu.getInput(HobbyOption, "individualCSSClass");

        switch (Hobby) {

            case HobbyOption.thrift:
                await ƒS.Speech.tell(characters.inara, text.inara.T0000);
                await ƒS.Speech.tell(characters.rame,text.rame.T0000);
                await ƒS.update(0.7);
                await ƒS.Character.animate(characters.rame, characters.rame.pose.happy, fromRightToOutOfCanvas());
                await ƒS.Character.animate(characters.inara, characters.inara.pose.happy, fromLeftToOutOfCanvas());
                await ƒS.Location.show(locations.black);
            return "Thriftshop";
            


            case HobbyOption.read:
                await ƒS.Speech.tell(characters.inara, text.inara.T0001);
                await ƒS.Speech.tell(characters.inara, text.inara.T0002);
                await ƒS.Speech.tell(characters.inara, text.inara.T0003);
                await ƒS.Speech.tell(characters.rame,text.rame.T0001); 
                await ƒS.Character.animate(characters.rame, characters.rame.pose.happy, fromRightToOutOfCanvas());
                await ƒS.Character.animate(characters.inara, characters.inara.pose.happy, fromLeftToOutOfCanvas());
            return "Books";
            
                

            case HobbyOption.draw:
                await ƒS.Speech.tell(characters.inara, text.inara.T0004);
                await ƒS.Speech.tell(characters.rame,text.rame.T0002);
                await ƒS.Character.hideAll();

            return "Drawing";
        

        }

        await ƒS.update(1);
    }
}