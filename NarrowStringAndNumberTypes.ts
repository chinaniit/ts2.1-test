function move(direction: "up"|"down"){

}

function do1(command: string){
    if(command === "up" || command === "down"){
        move(command);
    }
}
function do2(command: string){
    switch(command){
        case "up":
        case "down":
            move(command);
            break;
    }
}

function f1(x: number, y: 1|2){
    if(x === 0 || x==y){
        x;// Narrowed to type 0 | 1 | 2
    }
}
function f2(x: number | "foo"|"bar", y: 1|2|string){
    if(x===y){
        x; // Narrowed to type "foo" | "bar" | 1 | 2
        y; // Narrowed to type "foo" | "bar" | 1 | 2
    }
}