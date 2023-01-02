abstract class UserAccount{ //abstract, classes abstracts não podem criar objetos a partir dela, apenas extender
    name: string;
    protected age: number;  // protected só pode ser acessado dentro da classe ou outras classes extendidas

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    logDetails(): void{
        console.log(`The player ${this.name}, ${this.age}`);
    }
}

// const will = new UserAccount("Willian", 30);

class Game extends UserAccount{
    private nickname: string; //private só pode ser acessado dentro da própria classe (nao pode ser extendido)
    // readonly level: number;
    level: number;

    constructor(name: string, age: number, nickname: string, level: number){
        super(name, age);

        this.nickname = nickname;
        this.level = level;
    }

    set setLevel(level: number){
        this.level = level;
    }

    get getLevel(){
        return this.level;
    }
}

const lari = new Game("lari", 21, 'larilari', 30);

// will.logDetails();
console.log(lari.getLevel)
lari.setLevel = 40; 
// will.getLevel;





//install nodemon 
//npm install -g nodemon 
// rodar nodemon: nodemon dist/classes.js


