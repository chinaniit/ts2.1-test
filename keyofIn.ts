class UserKeyOfIn{
    constructor(id: string){
        this.id = id;
    }
    id: string;
    name: string;
}

// // Keep types the same, but make every property optional.
// type Partial<T> = {
//     [P in keyof T]?: T[P];
// };
// type Pick<T, K extends keyof T> = {
//     [P in K]: T[P];
// }
var p: Partial<UserKeyOfIn> ={ /*c:1*/ id:"1" };
var pi: Pick<UserKeyOfIn, "id"|"name"> = { id: "", name: "" };


// Keep types the same, but make each property to be read-only.
// type Readonly<T> = {
//     readonly [P in keyof T]: T[P];
// };
var readonlyUser: Readonly<UserKeyOfIn> ={ id:"1", name:"1" };
//r.id = "2";


/**
 * Construct a type with a set of properties K of type T
 */
// type Record<K extends string, T> = {
//     [P in K]: T;
// }

let record2: Record<string, UserKeyOfIn> 
                = { id: new UserKeyOfIn("1"), 
                    id2: new UserKeyOfIn("2") };
let anyR = (<any>record2);
console.log(anyR.id.id);