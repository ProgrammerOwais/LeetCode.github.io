/******* Longest Common Prefix *************
 * Write a function to find the longest common prefix string 
 * amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 
 */

var longestCommonPrefix = function (strs) {
    let output = "";
    if (strs[0] == "") return "";
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 0; j < strs.length; j++) {
            if (strs[0][i] != strs[j][i]) {
                return output;
            }
        }
        output += strs[0][i];
    }
    return output;
};
let str = ["flower", "flower", "flower", "flower"];
console.log(longestCommonPrefix(str));
