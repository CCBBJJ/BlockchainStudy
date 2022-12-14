'use strict'
//Q1
//array to String -> .join()
{
    const fruits = ['apple', 'banana', 'orange']
    const fruitsString = fruits.join();
    console.log(fruitsString);
}
//Q2
//String to array -> .split()
{
    const bread = '๐ฅจ, ๐ฅ, ๐ฅฏ, ๐, ๐ญ';
    const a_bread = bread.split(', ');
    console.log(a_bread);
}
//Q3
//array ์์ ์ญ์ 
{
    const array = [1,2,3,4,5];
    array.reverse();
    console.log(array)
}
//Q4
//์ผ์  ์์ญ ์ญ์ ใ
{
    //splice๋ ์ง์ ํ ๋ฒ์์ ์์๋ฅผ ํด๋น ๋ฐฐ์ด์์ ์ ๊ฑฐํ๊ณ , ์ ๊ฑฐํ ์์๋ฅผ ๋ฐํ
    //slice๋ ์ง์ ํ ๋ฒ์์ ์์๋ฅผ ๋ฆฌํด๋ง ํด์ฃผ๊ณ , ํด๋น ๋ฐฐ์ด์ ๊ฑด๋ค์ง ์๋๋ค
    const array = [1,2,3,4,5];
    const splice = array.splice(0,2);
    console.log(array);
    console.log(splice);
}

class Student {
    constructor(name, age, enrolled, score){
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88)
];
//Q5
{
    for(const student of students){
        if(student.score >= 90){
            console.log(student.name);
        }
    }
}
//Q5.Answer
{
    const result = students.find((student) => student.score === 90);
    console.log(result);
}
//Q6
{
    const enrolledList = [];
    for(const student of students){
        if(student.enrolled){
            enrolledList.push(student.name);
        }
    }
    console.log(enrolledList);
}
//Q6.Answer
{
    const result = students.filter((student) => student.enrolled);
    console.log(result);
}

//Q7
{
    const scoreList = [];
    for(const student of students){
        scoreList.push(student.score);
    }
    console.log(scoreList);

}
//Q7. Answer
{
    const result = students.map((student) => student.score)
    console.log(result);
}

//Q8
//some()์จ๋ ๋๋ค. ์๋ or์ด๊ณ  every๋ and์ ๋๋์ด๋ค
{
    const result = students.every((student) => student.score>30);
    console.log(result);
}

//Q9. Answer
{
    const result = students.reduce((pre, cur) => {
        return pre + cur.score;
    }, 0);
    console.log(result/students.length);
}

//Q10
{
    const result = students
        .map((student) => student.score)
        .sort((a,b)=>b-a)
        .join();
    console.log(result);
}