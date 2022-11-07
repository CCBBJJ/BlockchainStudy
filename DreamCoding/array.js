'use strict';

//Array

//1. Declaration
const ar1 = new Array();
const ar2 = [1,2];

// 2. Index position

const fruits = ['🍏', '🥑', '🍖'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
//print all fruits

console.clear();

for(let i =0; i<fruits.length; i++){
    console.log(fruits[i])
}

for( let fruit of fruits){
    console.log(fruit)
}

fruits.forEach((fruit, index) => console.log(fruit, index));

//4. Addition, delection, copy
//push: add an item to the end

fruits.push('🥝', '🍉');
console.log(fruits);

//pop:remove an item from the end
fruits.pop();
console.log(fruits);

//unshift: add an item to the begining
fruits.unshift('🥭');
console.log(fruits);

//shift: remove an item from the begining
fruits.shift();
console.log(fruits);

//note!! shift 와 unshift는 pop과 remove보다 훨씬 느리다!!!
//왜 와이? shift, unshift하면 배열의 모든 index가 수정되어야함(한칸씩 밀림)
//splice: remove item by index
// count인자 안넣으면 시작 index포함한 그 뒤 모든 요소 삭제
//count뒤에 인자 넣어주면 지운자리에 생성
fruits.splice(0,1, '🍌');
console.log(fruits);

const fruits2 = ['🥒', '🍔'];
const newfruits = fruits.concat(fruits2);
console.log(newfruits);

//5. searching
//indexof는 해당하는 가장 첫 요소의 index 반환

console.log(fruits.indexOf('🍏'));
console.log(fruits.includes('🍔'));

//lastIndexof
//얘는 해당하는 가장 마지막 요소의 index 반환

console.clear();
