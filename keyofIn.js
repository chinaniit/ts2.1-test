"use strict";
var UserKeyOfIn = (function () {
    function UserKeyOfIn(id) {
        this.id = id;
    }
    return UserKeyOfIn;
}());
// // Keep types the same, but make every property optional.
// type Partial<T> = {
//     [P in keyof T]?: T[P];
// };
// type Pick<T, K extends keyof T> = {
//     [P in K]: T[P];
// }
var p = { /*c:1*/ id: "1" };
var pi = { id: "", name: "" };
// Keep types the same, but make each property to be read-only.
// type Readonly<T> = {
//     readonly [P in keyof T]: T[P];
// };
var readonlyUser = { id: "1", name: "1" };
//r.id = "2";
/**
 * Construct a type with a set of properties K of type T
 */
// type Record<K extends string, T> = {
//     [P in K]: T;
// }
var record2 = { id: new UserKeyOfIn("1"),
    id2: new UserKeyOfIn("2") };
var anyR = record2;
console.log(anyR.id.id);
