// https://github.com/Microsoft/TypeScript/pull/11263
// Control flow analysis for implicit any variables
// --noImplicitAny: true
"use strict";
function f(c) {
    var x;
    if (c) {
        x = "hello";
        x; // string
    }
    else {
        x = 123;
        x; // number
    }
    return x; // string | number
    // function bar(){
    //     const y = x;
    // }
}
