Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]


/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

 // inititialize 2 variables left and right. left = 0 and right = length - 1
 // using a while loop, with a condition that left (less than right)
 // assign the value at left index to right index. then assign value of right index to left.
var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right){
        let leftVal = s[left];
        s[left] = s[right];
        s[right] = leftVal;
        left++;
        right--;
    }
    return s;
};
