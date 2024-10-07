/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // Define a map for Roman numeral values
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let total = 0;
    let prevValue = 0;

    // Loop through each character in the Roman numeral string
    for (let i = s.length - 1; i >= 0; i--) {
        const currentValue = romanMap[s[i]];

        // If current value is less than the previous value, subtract it; otherwise, add it
        if (currentValue < prevValue) {
            total -= currentValue;
        } else {
            total += currentValue;
        }

        // Update the previous value
        prevValue = currentValue;
    }

    return total;
};

module.exports = { romanToInt };
