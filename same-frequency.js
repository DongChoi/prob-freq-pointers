"use strict"

// add whatever parameters you deem necessary & write docstring

/**frequency counter, accepts a number, and returns an object*/
function freqCounter(num){
    let freq = {};
    for(let value of num){
        let valueCount = freq[value] || 0;
        freq[value] = valueCount + 1;
    }
    return freq;
}

/**accepts two numbers and checks if both have the same frequency of digits, returns true, else return false */
function sameFrequency(num1, num2) {
    const numString1 = stringify(num1);
    const numString2 = stringify(num2);
    const num1Freq = freqCounter(numString1);
    const num2Freq = freqCounter(numString2);
    for(let key in num1Freq){
        if(num1Freq[key] !== num2Freq[key]){
            return false
        }
    }
    return true
}


//turns number into string
function stringify(num) {
    return num.toString()
}