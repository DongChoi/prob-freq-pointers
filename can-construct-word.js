"use strict";



//build frequency counters
function freqCounter(targetArray){
    let freq = {};
    for(let value of targetArray){
        let valueCount = freq[value] || 0;
        freq[value] = valueCount + 1;
    }
    return freq;
}


// add whatever parameters you deem necessary & write doc comment

//We need to get letter list from first word and second word
//
/**  
//build frequency counters of the first and second word
check values of the second is greater than or equal to the values of the second object
return false if the second object does not have the letter in the target object
*/
//two arguments
function canConstructWord(word, letters) {
    //*****what is it asking for empty letter string?!?!?!******
    if(word === "" ){
        return true;
    }
    if(letters === ""){
        return false;
    }
    let wordCounter = freqCounter(word);
    let lettersCounter = freqCounter(letters);
    for(let wordLetters in wordCounter){
        if(wordCounter[wordLetters] > lettersCounter[wordLetters]){
            return false;
        }
    }
    return true;
}

//wordCounter[wordLetters] -> wordCounter.a 
//{a : 2}//
//{a: 1, b: 1, c: 1}