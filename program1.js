/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        // If the character is a closing bracket
        if (char in map) {
            // Pop the top element from the stack, if it exists. Otherwise, set a dummy value '#'
            const topElement = stack.length === 0 ? '#' : stack.pop();

            // If the popped element doesn't match the corresponding opening bracket
            if (topElement !== map[char]) {
                return false;
            }
        } else {
            // If it is an opening bracket, push it to the stack
            stack.push(char);
        }
    }

    // If the stack is empty, then the string is valid
    return stack.length === 0;
};

module.exports = { isValid };
