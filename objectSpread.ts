// https://github.com/sebmarkbage/ecmascript-rest-spread
// https://github.com/Microsoft/TypeScript/issues/2103

let original = {
    a: 1, b:2, c: Symbol('this is orignial symbol 8.')
}
let copy = {...original};
console.log(original === copy);
console.log(original.a === copy.a);
console.log(copy);