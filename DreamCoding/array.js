'use strict';

//Array

//1. Declaration
const ar1 = new Array();
const ar2 = [1,2];

// 2. Index position

const fruits = ['๐', '๐ฅ', '๐'];
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

fruits.push('๐ฅ', '๐');
console.log(fruits);

//pop:remove an item from the end
fruits.pop();
console.log(fruits);

//unshift: add an item to the begining
fruits.unshift('๐ฅญ');
console.log(fruits);

//shift: remove an item from the begining
fruits.shift();
console.log(fruits);

//note!! shift ์ unshift๋ pop๊ณผ remove๋ณด๋ค ํจ์ฌ ๋๋ฆฌ๋ค!!!
//์ ์์ด? shift, unshiftํ๋ฉด ๋ฐฐ์ด์ ๋ชจ๋  index๊ฐ ์์ ๋์ด์ผํจ(ํ์นธ์ฉ ๋ฐ๋ฆผ)
//splice: remove item by index
// count์ธ์ ์๋ฃ์ผ๋ฉด ์์ indexํฌํจํ ๊ทธ ๋ค ๋ชจ๋  ์์ ์ญ์ 
//count๋ค์ ์ธ์ ๋ฃ์ด์ฃผ๋ฉด ์ง์ด์๋ฆฌ์ ์์ฑ
fruits.splice(0,1, '๐');
console.log(fruits);

const fruits2 = ['๐ฅ', '๐'];
const newfruits = fruits.concat(fruits2);
console.log(newfruits);

//5. searching
//indexof๋ ํด๋นํ๋ ๊ฐ์ฅ ์ฒซ ์์์ index ๋ฐํ

console.log(fruits.indexOf('๐'));
console.log(fruits.includes('๐'));

//lastIndexof
//์๋ ํด๋นํ๋ ๊ฐ์ฅ ๋ง์ง๋ง ์์์ index ๋ฐํ

console.clear();
