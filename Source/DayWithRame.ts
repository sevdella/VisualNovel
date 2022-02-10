namespace Template {
    export async function DayWithRame(): ƒS.SceneReturn {
        console.log("DayWithRame");

        let text ={
            inara: {

            },
            rame: {
                
            }
        }

        await ƒS.Location.show(locations.bookshop);
        await ƒS.update(transitions.stripes.duration, transitions.stripes.alpha, transitions.stripes.edge);
        await ƒS.Character.show(characters.inara, characters.inara.pose.happy, ƒS.positionPercent(30, 110));
        await ƒS.Character.show(characters.rame, characters.rame.pose.happy, ƒS.positionPercent(50, 110));






    }
}
