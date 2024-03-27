// Validation Rules
import { isRequiredString,hasMaxLength,hasMinLength } from "../validators/stringValidators";
import {ValidationError} from '../errorHandlers/customErrorHndler';

// validation rule for string
function validationChain(input:any): ValidationContext{
    if(typeof input !== 'string'){
        throw new ValidationError("Input must be a string");
    }
    return {
        required (customErrorMessage) {
            
            return validationChain(input);
        },
        maxLength (maxLength, customErrorMessage){

            return validationChain(input)
        },
        minLength( minLength, customErrorMessage) {
            
            return validationChain(input)
        },
        pattern(regex, customErrorMessage) {
            
            return validationChain(input)
        },
        whiteList(allowedChar, customErrorMessage) {
            
            return validationChain(input)
        },
        blackList(disallowedChar, customErrorMessage) {
            
            return validationChain(input)
        },
        caseSensitive(customErrorMessage) {
            
            return validationChain(input)
        },
        normalize(mode, customErrorHndler) {
            
            return validationChain(input)
        },
        custom(validator) {
            return validationChain(input)
        },
    }
}


interface ValidationContext {
    required: (customErrorMessage?:string) => ValidationContext;
    minLength: (minLength:number,customErrorMessage?:string) => ValidationContext;
    maxLength: (maxLength:number, customErrorMessage?: string) => ValidationContext;
    pattern: (regex: RegExp, customErrorMessage?:string) => ValidationContext;
    whiteList: (allowedChar: string, customErrorMessage?:string) => ValidationContext;
    blackList: (disallowedChar: string, customErrorMessage?:string) => ValidationContext;
    caseSensitive: (customErrorMessage?:string) => ValidationContext;
    normalize: (mode: 'lowercase ' | 'uppercase', customErrorHndler?:string) => ValidationContext;
    custom: (validator:(input:string)=>boolean) => ValidationContext;
}

export {validationChain}