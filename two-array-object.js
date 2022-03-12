"use strict"

// add whatever parameters you deem necessary & write docstring

/**  make an object from accepting two arrays. if theres not enough 
 * values, the rest of the keys will have nulls as values. we want to loop through the keysArray, assign the keys array as keys and valuesArray at the same index as the key's value.
if there is more keys index than value's index, put the rest of the key values as null; */
function twoArrayObject(keysArray, valuesArray) {
    let object = {};
    for (let i = 0; i < keysArray.length; i++) {
        if (valuesArray[i] === undefined) {
            object[keysArray[i]] = null;
        }
        else { object[keysArray[i]] = valuesArray[i]; }
    }
    return object;
}

