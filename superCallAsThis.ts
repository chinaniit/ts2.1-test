// https://github.com/Microsoft/TypeScript/pull/10762
// 在ES2015中， 返回对象的构造函数会隐身替换所有super()调用者的this的值.
class Animal{
    constructor(){
        console.log("Animal");
        return {
            // 返回一个不同于‘this’的新对象
            go(){
                console.log("i'm going(Animal) in {}");
            }
        }
    }

    public go(){
        console.log("i'm going(Animal)");
    }
}
class Dog extends Animal{
    constructor(){
        super();
        console.log("Dog")
    }

    public go(){
        //this.go();
        super.go();
        console.log("i'm going(Dog)");
    }
}

var d1 = new Dog();
d1.go();