function addNums(number1, number2) {

    if(typeof number1 == 'string' || typeof number2 == 'string' || Array.isArray(number1) || Array.isArray(number2)) {
        return "Invalid input, please enter 2 numbers!"
    }
        else if(number1 > Number.MAX_SAFE_INTEGER || number2 > Number.MAX_SAFE_INTEGER) {
            return "Input number is too large, please enter smaller values!"
        }
            else if(number1 && number2) {
                return number1 + number2
            }
    return number1
}

module.exports = addNums