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
        return value;
    }
};
console.log(formatValue('hello'));
console.log(formatValue(5));
console.log(formatValue(true));
//# sourceMappingURL=Problem1.js.map