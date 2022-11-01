//function은 object다!

function printHello(){
    console.log('Hello');
}
printHello();

function log(message){
    console.log(message);
}
log('hello#')
log(1234)

//2. Parameters
//premitive parameter: 값을 그대로 전달
//object parameter: reference를 전달
function changeName(obj)
{
    obj.name='coder';
}   
const beom = {name: 'beomjun'}
changeName(beom)
console.log(beom)

//3. Default Parameters (added in ES6)
function showMessage(message,from='unknown'){
    console.log(`${message} by ${from}`)
}
showMessage('Hi!');

//4. Rest parameters (added in ES6)
//매개 변수를 배열로 받는다.
function printAll(...args){
    for (let i = 0; i<args.length; i++){
        console.log(args[i]);
    }
    for (const arg of args){
        console.log(arg)
    }
    args.forEach((arg)=> console.log(arg))
}
printAll('dream', 'coding', 'beomjun');

//5. Local scope
//지역 변수는 전역으로 못쓴다.
//전역은 함수 안에서도 쓸 수 있다.
let globalMessage = 'global';
function printMessage(){
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
}
printMessage();

//6. return value
function sum(a,b){
    return a+ b;
}
const result = sum(1,2);
console.log(`sum: ${sum(1,2)}`);

//7. early return, early exit

//bad example
function upgradeUser(user){
    if(user.point>10){
        //long logic...
    }
}

//Good example
function upgradeUser(user){
    if(user.point <= 10){
        return;
    }
    //long logic...
}

//1. Function Expression
const print = function print(){ //anonymous function
    console.log('print');
};
print();
const printAgain = print
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3))

//2. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer == 'i love you'){
        printYes();
    }else{
        printNo();
    }
}

const printYes = function (){
    console.log('Yes!');
};

const printNo = function (){
    console.log('No!')
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('i love you', printYes, printNo);

//Arrow Function은 언제나 anonymous
const simplePrint = function(){
    console.log('simple');
};

const SimplePrint = () => console.log('simple!');
const addPrint = (a,b) => a + b;

//IIFE: Immediately Invoked Function Expression
(function hello(){
    console.log('IIFE');
})();

const calculate = function (cmd = 'multiply', a='1', b='1'){
    switch(cmd){
        case 'add':
            return a+b;
        case 'subtract':
            return a-b;
        case 'divide':
            return a/b;
        case 'multiply':
            return a*b;
        case 'remainder':
            return a%b;
        default:
            console.log('error');
    }
};