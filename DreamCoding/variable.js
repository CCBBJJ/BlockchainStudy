'use strict'; //vanila javascript로 개발할때는 반드시 strict 모드로 하자! 오류도 잡아주고, 성능개선도 굿!

//Variable
//mutable data type
//let (added in ES6)
//이제 javascript에서 무조건 let을 쓴다 var hoisiting(어디에 선언되든 상관 없이 가장 위로 끌어올려줌)
//var는 block scope이 안된다;
{
    let nam = 'beomjun';
    console.log(nam);
    nam = 'hello';
    console.log(nam);
}

//Constant : 상수 -> 한번 선언하면 바꿀 수 없다.
//immutable data type
// - security
// - thread safety
// - reduce human mistakes
// 그냥 바꿀 일 없으면 const로

// variable type
// primitive, single item
// object, 뭉텅이
// 걍 let으로! type script는 let:number
// bigInt의 추가 -> const big = 1234512345n 숫자 선언 맨 뒤에 n을 붙여주면 자동으로 bigInt 선언
const a = 17
const b = 17.1
console.log(`value: ${a}, type: ${typeof a}`); // template literals (string)
console.log(`value: ${b}, type: ${typeof b}`);

const infinity = 1/0;
const ninfinity = -1/0;
const nAn = 'notN' / 2;

console.log(infinity)
console.log(ninfinity)
console.log(nAn)

//Boolean
//false: 0, null, undefined, NaN, ''
//true: any other value
const canRead = true;
const test = 1>3;
console.log(`value: ${canRead}, type: ${typeof canRead}`)
console.log(`value: ${test}, type: ${typeof test}`)

//null의 type은 object

//undefined 선언만 하고 값을 안넣으면 value: undefined, type: undefined
let x

//symbol, create unique identifiers for object 유용함
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1==symbol2);
const gsymbol1 = Symbol.for('id'); // Symbol이 같다면 같은 개체로 취급해줘!
const gsymbol2 = Symbol.for('id'); // Symbol이 같다면 같은 개체로 취급해줘!
console.log(gsymbol1==gsymbol2);

//Dynamic typing: 할당된 값에 따라 변경되는 type, 다같이 하는 프로그래밍에선 지양하자
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);