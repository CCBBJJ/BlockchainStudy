'use strict';

//object-oriented programming
//class: template
//object: instance of class
//Javascript calss
// - ES6에서 추가

// 1. class declations
class Person{
    //constructor (생성자)
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    // 2. getter, setter
    get age(){
        return this._age;
    }
    set age(value){
        /* 
        if(value<0){
            throw Error('나이가 왜 마이너스냐?');
            console.log('나이가 왜 마이너스냐?');
        }
        */
        this._age = value < 0 ? 0 : value;
    }
    //methods
    speak(){
        console.log(`${this.name}: hi!`);
    }

}

const BJ = new Person('beomjun', 25);
const apple = new Person('Jobs', -1);
console.log(BJ);
console.log(apple.age);
BJ.speak();

// 3. Fields(public, private)
//너무 이름 Too soon!
class Experiment{
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); // undefined로 표시됨

// 4. Static
// Too soon!
class Article{
    static publisher = 'Beomjun' //object에 상관없이 class 자체에서 참조 가능하게 만들어준다
    constructor(articleName){
        this.articleName = articleName;
    }
    static printPublisher(){
        console.log(Article.publisher)
    }
}

const article1 = new Article(1);
const article2 = new Article(2);

// 5. Inheritance == 상속!
// 다른 클래스의 모든 것을 이어받을 수 있다
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color of`);
    }
    getArea(){
        return width * this.height
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    //5-1. Override 그냥 바로 쓰면 된다.
    getArea(){
        return this.width*this.height /2; 
    }
}

const rectangle = new Rectangle(10,10,'blue');
const triangle = new Triangle(5,5,'yellow');

rectangle.draw();
triangle.getArea();

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); // true
console.log(rectangle instanceof Shape); // true
console.log(rectangle instanceof Object); // true javascript의 모든 object는 Object의 상속이다 
