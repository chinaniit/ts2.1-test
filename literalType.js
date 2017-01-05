// https://github.com/Microsoft/TypeScript/pull/10676
"use strict";
///
/// Scope demo
///
var c1 = 1;
{
    var c1_1 = 2;
    console.log(c1_1);
}
{
    var c1_2 = 3;
    console.log(c1_2);
}
console.log(c1);
///
/// widening vs. non-widening
///
var c5 = 1 == 1 ? 1 : "abc"; // 1 | "bac"
// 
// if(c5 == "2"){
//     // operator '==' can not be applied to types '1|"bac"' and '"2"'
// }
var v5 = c5; // number | string
if (v5 == "2") {
}
var v6 = 1 == 1 ? 1 : "abc"; // number | string
function error(message) {
    throw new Error(message);
}
function do123() {
    return error("");
}
