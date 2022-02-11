// Add function

// success cases
//  should give the sum of 2 numbers
//  should return the input directly only 1 number is given
//  should return the sum of first 2 numbers when more than 2 inputs are given

// failure cases
//  should throw invalid input when array given as input
//  should throw invalid input when string given as input
//  should throw error when integer raange exceeded

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
        throw new error("I