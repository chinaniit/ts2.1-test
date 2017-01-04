// https://github.com/sebmarkbage/ecmascript-rest-spread
// https://github.com/Microsoft/TypeScript/issues/2103
"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var obj = { x: 1, y: 2, z: 3 };
var z = obj.z, x = obj.x, obj1 = __rest(obj, ["z", "x"]);
console.log(obj1);
