interface A{ a: string}
interface B{ b: string}
interface C{c: string}
interface D{d:string}

type X1 = (A|B);
type X2 = (A|B) & (C|D);

let x1:X1 = { a: "" };
let x2:X2 = { a: "", d:"" };