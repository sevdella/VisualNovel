declare namespace Template {
    function BadEnding(): ƒS.SceneReturn;
}
declare namespace Template {
    function Books(): ƒS.SceneReturn;
}
declare namespace Template {
    function Conversation(): ƒS.SceneReturn;
}
declare namespace Template {
    function Drawing(): ƒS.SceneReturn;
}
declare namespace Template {
    function Friendship(): ƒS.SceneReturn;
}
declare namespace Template {
    function Glitch(): ƒS.SceneReturn;
}
declare namespace Template {
    function Introduction(): ƒS.SceneReturn;
}
declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transitions: {
        swirl: {
            duration: number;
            alpha: string;
            edge: number;
        };
        stripes: {
            duration: number;
            alpha: string;
            edge: number;
        };
        clock: {
            duration: number;
            alpha: string;
            edge: number;
        };
        glitch: {
            duration: number;
            alpha: string;
            edge: number;
        };
        slide: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        backgroundTheme: string;
        neonheart: string;
        click: string;
        paper: string;
        thunder: string;
    };
    let locations: {
        school: {
            name: string;
            background: string;
        };
        classroom: {
            name: string;
            background: string;
        };
        bookshop: {
            name: string;
            background: string;
        };
        inbookshop: {
            name: string;
            background: string;
        };
        city: {
            name: string;
            background: string;
        };
        greyheart: {
            name: string;
            background: string;
        };
        black: {
            name: string;
            background: string;
        };
        thriftshop: {
            name: string;
            background: string;
        };
        coffeeshop: {
            name: string;
            background: string;
        };
        heart: {
            name: string;
            background: string;
        };
        timeskip: {
            name: string;
            background: string;
        };
        drawing1: {
            name: string;
            background: string;
        };
        drawing2: {
            name: string;
            background: string;
        };
        yellowheart: {
            name: string;
            background: string;
        };
        purpleheart: {
            name: string;
            background: string;
        };
        fullheart: {
            name: string;
            background: string;
        };
    };
    let characters: {
        narrator: {
            name: string;
        };
        rame: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                flirty: string;
                sad: string;
                scared: string;
            };
        };
        inara: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                upset: string;
                embarrassed: string;
                surprised: string;
                shy: string;
            };
        };
    };
    function fromRighttoLeft(): ƒS.AnimationDefinition;
    function fromRightToOutOfCanvas(): ƒS.AnimationDefinition;
    function fromLeftToOutOfCanvas(): ƒS.AnimationDefinition;
    let dataForSave: {
        points: number;
    };
}
declare namespace Template {
    function QuickEnding(): ƒS.SceneReturn;
}
declare namespace Template {
    function Scene(): ƒS.SceneReturn;
}
declare namespace Template {
    function Thriftshop(): ƒS.SceneReturn;
}
declare namespace Template {
    function Truth(): ƒS.SceneReturn;
}
