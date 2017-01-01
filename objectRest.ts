// https://github.com/sebmarkbage/ecmascript-rest-spread
// https://github.com/Microsoft/TypeScript/issues/2103

var obj = {x:1, y:2,z:3};
var {z, x, ...obj1} = obj;
console.log(obj1);