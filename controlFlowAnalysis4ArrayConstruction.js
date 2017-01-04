// https://github.com/Microsoft/TypeScript/pull/11432
// Control flow analysis for array construction
"use strict";
function f1() {
    var x = [];
    x[0] = 1;
    x[1] = "1";
    x[5] = true;
    return x; // (string | number | boolean)
}
function f2() {
    var x = [];
    x.push(1);
    x.push("1");
    x.push(true);
    return x; // (string | number | boolean)
}
var cond = 1 === 1 ? true : false;
function f3() {
    var x = null;
    if (cond) {
        x = [];
        while (cond) {
            x.push("1");
        }
    }
    return x; // string[] ? diff with github Microsoft
}
function f4() {
    var x = [];
    x.push(5);
    function g() {
        // x; // Error: Variable 'x' implicitly has an 'any[]' type.
    }
}
