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
    const bread = '🥨, 🥐, 🥯, 🍞, 🌭';
    const a_bread = bread.split(', ');
    console.log(a_bread);
}
//Q3
//array 순서 역전
{
    const array = [1,2,3,4,5];
    array.reverse();
    console.log(array)
}
//Q4
//일정 영역 삭제ㅎ
{
    //splice는 지정한 범위의 요소를 해당 배열에서 제거하고, 제거한 요소를 반환
    //slice는 지정한 범위의 요소를 리턴만 해주고, 해당 배열은 건들지 않는다
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
//some()써도 된다. 얘는 or이고 every는 and의 느낌이다
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