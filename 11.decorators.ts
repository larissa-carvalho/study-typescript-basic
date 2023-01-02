

function setAPIVersion(apiVersion: string){
    return (constructor) => {
        return class extends constructor{
            version = apiVersion;
        }
    } 
}

@setAPIVersion('1.0.0')
class API { }