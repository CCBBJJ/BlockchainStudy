//Object
//모든 오브젝트들은 Object의 인스턴스다
//object = {key: value};


//1. Literals and Properties

function print(person){
    console.log(person.name);
    console.log(person.age);
}

const beomjun = {name:'beomjun', age: 25};
print (beomjun);

const obj1 ={} // 'object literal' syntax
const obj2 = new Object() // 'object constructor' syntax

//JavaScript는 중간에 property(속성) 추가 가능

beomjun.jasJob = true; // 추천안함

delete beomjun.hasJob; // 바로 삭제도 가능

// 2. Computed properties 변수로 불러와서 key값을 찾아야하는 경우 String으로 넣기위해 이용
console.log(beomjun.name); //얘는 내가 정확히 어떤 key값을 갖고올지 알고 쓸 때 이용
console.log(beomjun['name']); // 이것이 computed properties인데 꼭 []안에 '' -> String으로 key값을 넣어주자
beomjun['hasJob'] = true;
console.log(beomjun.hasJob);

function printValue(obj, key){
    console.log(obj[key]);
}
printValue(beomjun, 'name');

// 3. Property value shorthand
const person1 = {name: 'bob', age:2};
const person2 = {name: 'steve', age:3};
const person3 = {name: 'jin', age:4};
const person4 = new Person('king', 19)
console.log(person4)

//4. Consturctor Function

function Person(name, age){ // 이런 class같은 function은 대문자로 시작
    //this = {};
    this.name = name;
    this.age = age;
    //return this;
}

//5. in operator
console.log('name' in beomjun);
console.log('age' in beomjun);
console.log('tt' in beomjun);
console.log(beomjun.tt); // undefined 출력

//6. for..in vs for..of
//for(key in obj)
console.clear();
for (key in beomjun){
    console.log(key);
}

//for (value of iterable)
const array = [1, 2, 4, 5];
for (tt of array){
    console.log(tt);
}

// 7. Cloning
const user = {name: 'jojji',age: 5};
const user2 = user
user2.name = 'coder';
console.log(user);

//object복사를 해보자

//old way
const user3 = {};
for(key in user){
    user3[key] = user[key];
}

console.clear();
console.log(user3);

//new 
//개꿀팁, cmd누르고 메소드 클릭하면 lib으로 이동
const user4 = Object.assign({}, user);

const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2); // 앞에 있는 놈과 뒤에 있는 놈이 같은 속성을 공유하면 뒤에 놈 것으로 덮어씌워진다.
console.log(mixed);