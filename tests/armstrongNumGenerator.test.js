// Armstrong Generator
const isArmstrongNumber = require('../armstrongNumGenerator'), generateArmstrongNumbers = require('../armstrongNumGenerator');

// IsArmstrongNum function
// Success cases:
// Should return the armstrong number if its an armstrong number
// Should return -1 if its not an armstrong number
// Failure cases:

describe('IsArmstrongNum function', function() {
    it('Should return the armstrong number if its an armstrong number', function() {
        const   isArmstrongNumResult = isArmstrongNumber(4)
                expect(isArmstrongNumResult).toBe("number = 4")
    })
    it('Should return -1 if its not an armstrong number', function() {
        const   isArmstrongNumResult = isArmstrongNumber(20)
                expect(isArmstrongNumResult).toBe(-1)
    })
})


// GenerateArmstrongNums function

// Success cases:
// Should print all armstrong numbers until the input number
// Failure cases:
// Should throw invalid input when input is negative
// Should throw invalid input when input is non-numerical
// Should throw invalid input when input is too large
describe('GenerateArmstrongNums function', function() {
    it('Should print all armstrong numbers until the input number', function() {
        const generateArmstrongNumsArray = generateArmstrongNumbers(20)
        expect(generateArmstrongNumsArray).toStrictEqual([0,1,2,3,4,5,6,7,8,9])
    })
    it('Should throw invalid input when input is negative', function() {
        const generateArmstrongNumsArray = generateArmstrongNumbers(-3)
        expect(generateArmstrongNumsArray).toBe("Invalid input, please enter a positive number!")
    })
    it('Should throw invalid input when input is non-numerical', function() {
        const generateArmstrongNumsArray = generateArmstrongNumbers('Hello')
        expect(generateArmstrongNumsArray).toBe("Invalid input, please enter a positive number!")
    })
    it('Should throw invalid input when input is too large', function() {
        const generateArmstrongNumsArray = generateArmstrongNumbers(50000000000000000000000000000001234567891011121314151617181920)
        expect(generateArmstrongNumsArray).toBe("Input is too large, please input a smaller number!")
    })
})