
//S => state
//T => type
//K => Key
//V => Value 
//E => Element

//no type estamos definindo os tipos que vao ser recebidos lá na função useState
type numOrStr = number | string; 

// entre < >, estamos definindo que S, o valor que vai ser utilizado, extende do type numOrStr
//o que significa que ele recebe string ou number, mas só pode ser declarado uma vez o valor exato,
//se declarado string, depois só vai poder utilizar string, o mesmo se for declarado number
// o = string, significa o valor padrão, então nesse caso não é necessário chamar o useState passando o valor padrão (que seria no caso useState<string>();)
function useState<S extends numOrStr = string>(){
    let state: S;

    function getState(){
        return state;
    }

    function setState(newState: S){
        state = newState;
    }

    return {getState, setState}
}

const newState = useState();

newState.setState("foo")