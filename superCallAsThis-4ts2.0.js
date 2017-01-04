var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Animal = (function () {
    function Animal() {
        console.log("Animal");
        return {
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
        _super.call(this);
        console.log("Dog");
    }
    Dog.prototype.go = function () {
        _super.prototype.go.call(this);
        console.log("i'm going(Dog)");
    };
    return Dog;
}(Animal));
var d1 = new Dog();
d1.go();
//# sourceMappingURL=file1.js.map
