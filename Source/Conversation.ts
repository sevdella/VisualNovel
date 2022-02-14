namespace Template {
    export async function Conversation(): ƒS.SceneReturn {
        console.log("Conversation");

        let text = {
            rame: {
                T0000: "Let's go for some shopping then!",
                T0001: "Let's visit your bookshop, I really want to see it!",
                T0002: "You need to show me some drawings!",
                T0003: "Wow what a cute shop",
                T0004: "How did you even find it, it's in such a hidden location?",
                T0005: "This is such a nice break from the bustling city life",
                T0006: "Today was really fun! WE should do this more often"
            },
            inara: {
                T0000: "I love vintage clothing, so i go thrift shopping in my free time",
                T0001: "I'm a bookworm, whenever I find a few minutes, you'll find me reading.",
                T0002: "I work in a Book Shop aswell. It's not a busy one",
                T0003: "So I just get paid for reading basically",
                T0004: "I'm not that big of an artist but drawing has been one of my favourite hobbies since forever",
                T0005: "Happens if you wander around mindlessly...",
                T0006: "Right? Look at this skirt, isn't it cute?"
            }


        }

        let HobbyOption = {
            thrift: "Thrift Shopping",
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
            return "Friendship";
        

        }

        await ƒS.update(1);
    }
}