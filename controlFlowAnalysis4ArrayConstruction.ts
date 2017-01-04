// https://github.com/Microsoft/TypeScript/pull/11432
// Control flow analysis for array construction

function f1(){
    let x= [];
    x[0] = 1;
    x[1] = "1";
    x[5] = true;
    return x; // (string | number | boolean)
}

function f2(){
    let x = [];
    x.push(1);
    x.push("1");
    x.push(true);
    return x; // (string | number | boolean)
}

var cond = 1===1?true:false;
function f3(){
    let x = null;
    if(cond){
        x = [];
        while(cond){
            x.push("1");
        }
    }
    return x; // string[] ? diff with github Microsoft
}

function f4(){
    let x= [];
    x.push(5);
    function g(){
        // x; // Error: Variable 'x' implicitly has an 'any[]' type.
    }
}