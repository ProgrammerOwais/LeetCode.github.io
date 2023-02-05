/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let sArray = s.split("");
    let output = 0;
    for (let i = 0; i < sArray.length; i++) {
        if (sArray[i] == "I") {
            if (
                (i + 1 < sArray.length && sArray[i + 1] == "V") ||
                sArray[i + 1] == "X"
            ) {
                output -= 1;
            } else {
                output += 1;
            }
            continue;
        } else if (sArray[i] == "V") output += 5;
        else if (sArray[i] == "X") {
            if (
                (i + 1 < sArray.length && sArray[i + 1] == "L") ||
                sArray[i + 1] == "C"
            ) {
                output -= 10;
            } else {
                output += 10;
            }
            continue;
        } else if (sArray[i] == "L") {
            output += 50;
        } else if (sArray[i] == "C") {
            if (
                (i + 1 < sArray.length && sArray[i + 1] == "D") ||
                sArray[i + 1] == "M"
            ) {
                output -= 100;
            } else {
                output += 100;
            }
        } else if (sArray[i] == "D") {
            output += 500;
        } else if (sArray[i] == "M") {
            output += 1000;
        }
    }
    return output;
};
console.log(romanToInt("MCMXCIV"));
