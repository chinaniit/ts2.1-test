// https://github.com/sebmarkbage/ecmascript-rest-spread
// https://github.com/Microsoft/TypeScript/issues/2103
"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var original = {
    a: 1, b: 2, c: Symbol('this is orignial symbol 8.')
};
var copy = __assign({}, original);
console.log(original === copy);
console.log(original.a === copy.a);
console.log(copy);
