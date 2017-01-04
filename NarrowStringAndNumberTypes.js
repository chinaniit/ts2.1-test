"use strict";
function move(direction) {
}
function do1(command) {
    if (command === "up" || command === "down") {
        move(command);
    }
}
function do2(command) {
    switch (command) {
        case "up":
        case "down":
            move(command);
            break;
    }
}
function f1(x, y) {
    if (x === 0 || x == y) {
        x; // Narrowed to type 0 | 1 | 2
    }
}
function f2(x, y) {
    if (x === y) {
        x; // Narrowed to type "foo" | "bar" | 1 | 2
        y; // Narrowed to type "foo" | "bar" | 1 | 2
    }
}
