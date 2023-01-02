interface GameTwo{
    id?: string | number,
    title: string,
    description: string,
    readonly genre: string,
    plataform?: string[] // string[] -> quer dizer um array de strings
    getSimilars?: (title: string) => void
}

const tlou: GameTwo = {
    title: "The last of us",
    description: "teste",
    genre: "teste",
    plataform: ['teste', 'tetse'],
    getSimilars: (title: string) => {
        console.log('teste ' + title);
    }
}

// tlou.plataform = ['teste'];

// if(tlou.getSimilars){
//     tlou.getSimilars(tlou.title);
// }

interface DCL extends GameTwo {
    originalGame: GameTwo,
    newContent: string[];
}

const lftbehind: DCL = {
    title: 'the las of us', 
    description: "teste",
    genre: "teste",
    plataform: ["tetse"],
    originalGame: tlou,
    newContent: [' 3 hours']
}

class teste1Game implements GameTwo{
    title: string;
    description: string;
    genre: string;

    constructor(t: string, d: string, g:string){
        this.title: t;
        this.description: d;
        this.genre: g;
    }
}