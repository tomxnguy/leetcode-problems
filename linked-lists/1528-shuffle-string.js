You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

Return the shuffled string.

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */

 //initialize variable i to 1 to keep traversing indices list
 //assign indices[i] to (val)
 // iterate through input 's' and assign input at
var restoreString = function(s, indices) {
    let result = new Array(s.length);

    for (let i = 0; i < s.length; i++) {
        result[indices[i]] = s[i];
    }

    return result.join('');
};
