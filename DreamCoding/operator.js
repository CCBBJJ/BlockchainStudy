console.log('my' + 'cat');
console.log(typeof('1'+2));
console.log(`string literals: 1 + 2= ${1 + 2}`);

//2. Numeric operators -> 똑같음
//3. increment ++, decrement --
let count =2;
const preIncrement = ++count;
console.log(`preIncrement:${preIncrement}, count:${count}`)
const postIncrement = count++;
console.log(`postIncrement:${postIncrement}, count:${count}`)

//4. Logical operators: ||(or), &&(and), !(not)
const value1 = true;
const value2 = 4 < 2;

console.log(`or:${value1 || value2 || check()}`)
//or은 true를 만나게 되면 그 뒤의 조건(, 함수)은 생략한다
//simple한 애들을 맨 앞에서 판단하게 하고, heavy한 것은 뒤로
//and도 false 만나면 그 뒤 생략

function check(){
    for(let i=0; i<10; i++){
        console.log('😇')
    }
}

//5. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, type을 알아서 바꿈
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);
// === strict equlaity, type까지 검사
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//object equality
const beomjun1 = {name: 'beomjun'};
const beomjun2 = {name: 'beomjun'};
const beomjun3 = beomjun1;
console.log(beomjun1 == beomjun2);
console.log(beomjun1 === beomjun2);
console.log(beomjun1 === beomjun3);

//equality - puzzler
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

//6. Terneary operator: ?
//condition ? value1 : value2
const name = 'beomjun';
console.log(name === 'beomjun' ? 'yes' : 'no');