export class UserEmail{
    value : string;

    constructor(value: string){
        this.value = value;
        this.ensureIsValid();
    }

    private ensureIsValid(){
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        
        if (!emailRegex.test(this.value)) {
            throw new Error('El correo electrónico no es válido');
        }
        
    }
}