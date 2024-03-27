
class ValidationError extends Error{
    constructor(message:string){
        super(message);
        this.name = 'ValidationError';
    }
}


class InvlidFormatError extends ValidationError{
    constructor (field:string){
        super(`Invalid for mat for field ${field}`)
        this.name = 'InvalidFormatError';
    }
}

class RequiredFieldError extends ValidationError{
    constructor (){
        super(`Field  is required`)
        this.name = 'RequiredFieldError'
    }
}

class StringMinLengthError extends ValidationError{
    constructor (minLength: number){
        super(`Field must be at least ${minLength} long`)
        this.name = 'StringMinLengthError'
    }
} 


class StringMaxLengthError extends ValidationError{
    constructor (maxLength: number){
        super(`Field must be at least ${maxLength} long`)
        this.name = 'StringMaxLengthError'
    }
}

export {
    RequiredFieldError,
    StringMaxLengthError,
    StringMinLengthError,
    InvlidFormatError   ,
    ValidationError
}