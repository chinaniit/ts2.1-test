// https://github.com/Microsoft/TypeScript/pull/11929
//  Static types for dynamically named properties (keyof T and T[K])
"use strict";
// get/setProperty
function getProperty1(obj1, key1) { }
function getProperty2(obj, key) {
    return obj[key];
}
function getProperty2Demo() {
    var u1 = { id: "1", name: "2" };
    var p = getProperty2(u1, "id");
    console.log(p);
}
getProperty2Demo();
