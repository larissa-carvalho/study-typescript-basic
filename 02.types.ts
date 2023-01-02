let isOpen: boolean; //boolean
let message: string;
let total:number;

//array
let items: string[] //type[];
let items2: Array<string>;

//tuple (usamos quando sabemos exatamente o valor que vai ser recebido)
let title: [number, string]
title = [1, 'teste']; //exemplo

//enum //serve para criar chave e valor
enum Colors{
    white = "#fff",
    black = "#000"
}

//any (qualquer coisa)
let coisa: any 

//void (não tem retorno)
function logger(): void{
    console.log('teste')
}

//null && undefined (sem conteudo)
type bla = string | undefined;

//type never (nunca vai retornar)
function error():never{
    throw new Error('error');
}

//object
let cart: object 
cart = {
    key: 'teste'
}