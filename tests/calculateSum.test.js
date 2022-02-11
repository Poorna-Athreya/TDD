// Add 2 numbers Function

// Success cases:
// Should give the sum of 2 numbers
// Should return the input directly only 1 number is given
// Should return the sum of first 2 numbers when more than 2 inputs are given

// Failure cases:
// Should throw invalid input when array given as input
// Should throw invalid input when string given as input
// Should throw error when integer raange exceeded

const addNums = require('../calculateSum');

describe('Add function', function() {
    it('Should give the sum of 2 numbers', function() {
        const sum = addNums(2, 3);
        expect(sum).toBe(5);
    });
    it('Should return the input directly only 1 number is given', function() {
        const sum = addNums(2);
        expect(sum).toBe(2);
    });
    it('Should return the sum of first 2 numbers when more than 2 inputs are given',function() {
        const sum = addNums(2,3,4,5);
        expect(sum).toBe(5);
    });

    it('Should throw invalid input when string given as input', function() {
        const sum = addNums(2,"two");
        expect(sum).toBe("Invalid input, please enter 2 numbers!");
    });    
    it('Should throw invalid input when array given as input', function() {
        const sum = addNums([2,3,4]);
        expect(sum).toBe("Invalid input, please enter 2 numbers!");
    });  
    it('Should throw error when integer range is exceeded', function() {
        const sum = addNums(50000000000000000000000000000001234567891011121314151617181920, 9999999999999999999999999999999999999999999999246810121416182022);
        expect(sum).toBe("Input number is too large, please enter smaller values!");
    });
});

