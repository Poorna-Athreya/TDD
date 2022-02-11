function isArmstrongNumber(number) {
    let     sum = 0
    const   digits = number.toString().length
            for(let i=number;i>0;i = Math.floor(i/10))
            {
                let temp = i%10
                    sum += temp**digits
            }
            if(sum == number) return "number = " + number
                else return -1
}

function generateArmstrongNumbers(number) {
    if(number < 0 || typeof number != 'number') {
        return "Invalid input, please enter a positive number!"
    }
        else if(number > Number.MAX_SAFE_INTEGER) {
            return "Input is too large, please input a smaller number!"
        }
    let armstrongNumArray = []
    for(let index=0,countArmstrongNums=0;index<number;index++)
    {
        if(isArmstrongNumber(index)!=-1)
        {
            armstrongNumArray.push(index);
            countArmstrongNums++;
        }
    }
    // console.log(armstrongNumArray.join(', '))
    return armstrongNumArray
}
module.exports = {
    generateArmstrongNumbers,
    isArmstrongNumber
}
