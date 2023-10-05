// Addition function
function add(...nums) {
    return nums.reduce((acc, val) => acc + val, 0);
}
// Subtraction function
function subtract(...nums) {
    if (nums.length === 0) {
        return 0;
    }
    
    return nums.reduce((acc, val) => acc - val);
}


// Multiplication function
function multiply(...nums) {
    return nums.reduce((acc, val) => acc * val, 1);
}

// Division function
function divide(dividend, divisor) {
    if (divisor === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return dividend / divisor;
}

// Arithmetic Average function
function arithmeticAverage(...nums) {
    const sum = add(...nums);
    return sum / nums.length;
}


module.exports = {
    add,
    multiply,
    divide,
    arithmeticAverage,
    subtract
};
