
// Validation Rules

// validation rule for string
function validationChain(input:any): ValidationContext{
    return {
        required (customErrorMessage?:string) {
            
            return validationChain(input);
        },
    }
}


interface ValidationContext {
    required: (customErrorMessage?:string) => ValidationContext;
}
