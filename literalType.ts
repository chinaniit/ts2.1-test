// https://github.com/Microsoft/TypeScript/pull/10676

///
/// Scope demo
///
const c1 = 1;
{
    const c1 = 2;
    console.log(c1);
}
{
    const c1 = 3;
    console.log(c1);
}
console.log(c1);

///
/// widening vs. non-widening
///
const c5 = 1==1? 1:"abc"; // 1 | "bac"
// 
// if(c5 == "2"){
//     // operator '==' can not be applied to types '1|"bac"' and '"2"'
// }

let v5 = c5; // number | string
if(v5 == "2"){
    // ok
}

let v6 = 1==1? 1:"abc"; // number | string


function error(message: string): never {
    throw new Error(message);
}
function do123(){
    return error("")
}