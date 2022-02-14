namespace Template {
    export async function Books(): ƒS.SceneReturn {
        console.log("Books");

        let text ={
            rame: {
                T0000: "Lovely Bookshop",
                T0001:"I can see why you like it here"
            },
            inara: {
                T0000:"I think I've read almost 80% of the books in this shop",
                T0001:"You should come by sometimes",
                T0002:"Just search for a cosy corner and read whatever you like"
            }
        }

        await ƒS.update(1);
                await ƒS.Location.show(locations.bookshop);
                await ƒS.update(transitions.clock.duration, transitions.clock.alpha, transitions.clock.edge);
                await ƒS.Character.show(characters.inara, characters.inara.pose.happy, ƒS.positionPercent(30, 110));
                await ƒS.Character.show(characters.rame, characters.rame.pose.happy, ƒS.positionPercent(50, 110));
                await ƒS.Speech.tell(characters.rame,text.rame.T0000);
                await ƒS.Speech.tell(characters.inara,text.inara.T0000);
                await ƒS.Speech.tell(characters.rame,text.rame.T0001);
                await ƒS.Speech.tell(characters.inara,text.inara.T0001);
                await ƒS.Speech.tell(characters.inara,text.inara.T0002);
                await ƒS.Character.hide(characters.inara);
                await ƒS.Character.hide(characters.rame);

        return "Friendship";
    }
}