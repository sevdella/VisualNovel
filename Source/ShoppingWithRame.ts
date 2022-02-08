namespace Template {
    export async function ShoppingWithRame(): ƒS.SceneReturn {
        console.log("ShoppingWithRame");

        await ƒS.Location.show(locations.thriftshop);
        await ƒS.update(transitions.stripes.duration, transitions.stripes.alpha, transitions.stripes.edge);









    }
}
