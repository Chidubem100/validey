import {validationChain} from "../src/validationEngine/stringValidationRule";



const input = 'example'; 

try {
    const isValid = validationChain(input)
    .required()
    .minLength(3)
    .maxLength(4)
    .blackList("top")
    .caseSensitive()
    .normalize("lowercase ")
    .pattern(/^[^\s@]+/)
    // .custom(() =>{})
} catch (error) {
    console.error('Validation error: ', error.message)
}