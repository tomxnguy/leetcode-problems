You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let merged = "";
    let i = 0;
    let j = 0;

    while (i < word1.length && j < word2.length){
         merged += word1[i];
         merged += word2[j];
         i++;
         j++;
    }

    if (i == word1.length){
        merged += word2.substring(j);
    }

    if (i == word2.length){
        merged += word1.substring(i);
    }
    return merged;
};
