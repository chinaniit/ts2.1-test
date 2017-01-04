"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// https://github.com/Microsoft/TypeScript/pull/10762
// 在ES2015中， 返回对象的构造函数会隐身替换所有super()调用者的this的值.
var Animal = (function () {
    function Animal() {
        console.log("Animal");
        return {
            // 返回一个不同于‘this’的新对象
            go: function () {
                console.log("i'm going(Animal) in {}");
            }
        };
    }
    Animal.prototype.go = function () {
        console.log("i'm going(Animal)");
    };
    return Animal;
}());
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        var _this = _super.call(this) || this;
        console.log("Dog");
        return _this;
    }
    Dog.prototype.go = function () {
        //this.go();
        _super.prototype.go.call(this);
        console.log("i'm going(Dog)");
    };
    return Dog;
}(Animal));
var d1 = new Dog();
d1.go();
