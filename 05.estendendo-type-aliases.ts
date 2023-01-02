type accountInfo = {
    id: number,
    name: string,
    email?: string // o ponto de interrogação significa que é opcional essa opção 
}

const account: accountInfo = {
    id: 123,
    name: "Willian", 
    email: "willianjustenqui@gmail.com"
}

type CharInfo = {
    nickname: string;
    level: number
}

const char: CharInfo = {
    nickname: "willjusten", 
    level: 100
}

//intersection 
type PlayerInfo = accountInfo & CharInfo;

const player: PlayerInfo = {
    id: 123,
    name: "Willian", 
    nickname: "willjusten", 
    level: 100
}

