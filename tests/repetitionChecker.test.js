// RepetitionChecker 
const repetitionCheckerObject = require("../repetitionChecker")
// returnWordIndex function

// Success cases:
// Should return true if it is the first encountered instance of the word
// Should return the false if its a repeated word
// Should return false if the word is absent
// Failure cases:
// Should return false if position is negative
describe('ReturnWordIndex function', function() {
    const   stringExample = "word repeat checker word"
    it('Should return the position if it is the first encountered instance of the word', function() {
        const   wordIndex = repetitionCheckerObject.returnWordIndex('word',0,stringExample)
                expect(wordIndex).toBe(true)
    })
    it('Should return false if its a repeated word', function() {
        const   wordIndex = repetitionCheckerObject.returnWordIndex('word',20,stringExample)
                expect(wordIndex).toBe(false)
    })
    it('Should return false if the word is absent in input string', function() {
        const   wordIndex = repetitionCheckerObject.returnWordIndex('banana',0,stringExample)
                expect(wordIndex).toBe(false)
    })
    it('Should return false if position is negative', function() {
        const   wordIndex = repetitionCheckerObject.returnWordIndex('word',-9,stringExample)
                expect(wordIndex).toBe(false)
    })
})
//RepetitionChecker function

// Success cases:
// Should return number of repeated words if repeated words exist
// Should return No repeated words when repeated words dont exist
// Failure cases:
// Should throw invalid input if input is not string
// Should throw invalid input when string too large

describe('RepetitionChecker function', function() {
    it('Should return number of repeated words if repeated words exist', function() {
        const stringExample = 'Naa Naa Banana banana potato naa'
        const   repetitionCheckResult = repetitionCheckerObject.checkForRepetition(stringExample)
                expect(repetitionCheckResult).toBe('3 Repeated Word(s)!')
    })
    it('Should return No repeated words when repeated words dont exist', function() {
        const   stringExample = 'Banana potato naa'
        const   repetitionCheckResult = repetitionCheckerObject.checkForRepetition(stringExample)
                expect(repetitionCheckResult).toBe('No Repeated Word(s)!')
    })
    it('Should throw invalid input if input is not string', function() {
        const   repetitionCheckResult = repetitionCheckerObject.checkForRepetition([1,2,34])
                expect(repetitionCheckResult).toBe('Invalid input, please enter a string!')
    })
    // it('Should throw invalid input if input is not string', function() {
    //     const   longStringExample = "I'm about ready to cry out of frustration so lets sit here and listen to my sob story cuz haha depression amirite? Anyways lets go with htishgghjgfhhgffgcuuuggsdwiudiuduishudbffncjskijwdhuncjdjsijeudhduwhushsuhsuhuhuhuhyhtrgdfhjgtrfdghwrwtudjbxvsauanbxvdywcquoeulkpiouqrguioij984739y4.r;.[k9ulp.o;op;.plo0i9ok,;.l0i9jok,pl09i"
    //     const   repetitionCheckResult = repetitionCheckerObject.checkForRepetition(longStringExample)
    //             expect(repetitionCheckResult).toBe('Invalid input, please enter a string!')
    // })
})