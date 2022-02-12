namespace Template {
    export async function Friendship(): ƒS.SceneReturn {
        console.log("Friendship");

        let text = {
            inara: {

            },

            rame: {
                T0000: "blablabla"

            }
        }

        await ƒS.update(1);
        await ƒS.Location.show(locations.inbookshop);
        await ƒS.Character.show (characters.rame, characters.rame.pose.happy,ƒS.positionPercent(50, 110));
        await ƒS.Speech.tell (characters.rame,text.rame.T0000);
        await ƒS.Character.show (characters.inara, characters.inara.pose.shy,ƒS.positionPercent(30,110));



        



    }
}
