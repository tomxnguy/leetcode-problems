For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) {
        return "";
    }

    // Function to compute gcd of two numbers
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

    // Find the gcd of the lengths of the two strings
    let gcdLength = gcd(str1.length, str2.length);

    // The common substring is the prefix of length gcdLength from either string
    return str1.substring(0, gcdLength);
};
