type Todo = {
    task: string,
    description: string,
    status: string,
    completed: boolean
}

//Readonly -> só vai permitir que a variavel todo seja lida, e não editada
const todo: Readonly<Todo> = {
    task: "Estudar typescript",
    description: "Saber jamstack",
    status: "Andamento",
    completed: false
}

//update
//todo.completed = true //nao funciona porque definimos o readonly 

//partial diz que só naquele momento, as opções de todo são opcionais, então só ali não preciso ter todos os campos, e alterar os que eu precisar de fato
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>){
    return {...todo, ...fieldsToUpdate}
}

const todo2: Todo = updateTodo(todo, {completed: true});

// Pick pegamos partes especificas do type, não necessáriamente todas as funções
type TodoPreview = Pick<Todo, "task" | "completed">
const todo3: TodoPreview = {
    task: "Tetse", 
    completed: false
}


//Omit -> omit algumas opções do type

type TodoPreview2 = Omit<Todo, "description">

const todo4: TodoPreview2 = {
    task: "teste", 
    status: "Andamento",
    completed: false
}