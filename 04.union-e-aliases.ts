
//union é quando queremos passar a uma var que pode recerber dois tipos 

function logdetails(id: number | string, item: string){
    console.log(`id: ${id}, item:${item}`)
}

logdetails(182, 'string')

//type alias
type Uid = number | string | undefined; //serve pra não ficar definindo sempre a mesma coisa 

function logInfo(id: Uid, item: string){
    console.log(`teste`)
}

type Plataform = 'Windows' | 'Linux' | 'Mac OS'

function renderPlataform(plataform: Plataform){
    return plataform;
}


