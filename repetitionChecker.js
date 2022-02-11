// checkForRepetition("1 1 h")

function returnWordIndex(word, position, self) {
    return self.indexOf(word) === position
}

function checkForRepetition(inputString)
{
            if(!inputString || typeof inputString != 'string') {
                return 'Invalid input, please enter a string!'
            }
            inputString = inputString.toLowerCase()
    const   words = inputString.split(" ")        
    const   uniqueWords = words.filter(returnWordIndex)
    let     repeatedWords = words.length - uniqueWords.length
            if(repeatedWords==0)
            {
                return "No Repeated Word(s)!"
            }
            return repeatedWords + " Repeated Word(s)!"
}

module.exports = {
    returnWordIndex,
    checkForRepetition
}