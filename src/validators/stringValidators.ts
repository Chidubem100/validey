import { RequiredFieldError, StringMaxLengthError,StringMinLengthError } from "../errorHandlers/customErrorHndler";

function isRequiredString(input:string):boolean{
    if(!input.trim()){
        throw new RequiredFieldError()
    }
    return true;
}

function hasMinLength(input:string, minLength:number):boolean{
    if(input.length < minLength){
        throw new StringMinLengthError(minLength)
    }
    return true
}

function hasMaxLength(input:string, maxLength:number):boolean{
    if(input.length > maxLength){
        throw new StringMaxLengthError(maxLength)
    }
    return true;
}

export {
    hasMaxLength,
    hasMinLength,
    isRequiredString
}