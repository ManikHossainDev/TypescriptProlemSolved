"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatValue = (value) => {
    if (typeof value === 'string') {
        const UpperCase = value.toUpperCase();
        return UpperCase;
    }
    else if (typeof value === 'number') {
        const Number = value * 10;
        return Number;
    }
    else {
        return !value;
    }
};
// Problem 2
const getLength = (value) => {
    if (typeof value === 'string') {
        return value.length;
    }
    else if (Array.isArray(value)) {
        return value.length;
    }
    return 0;
};
console.log(getLength('typescript'));
console.log(getLength([10, 20, 30, 40]));
//# sourceMappingURL=solution.js.map