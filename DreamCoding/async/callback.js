'use strict'

//javascript는 synchronous
//hoisting 이후 선언된 코드가 순서되로 실행된다
//hoisting = var, function은 어디에서 선언되든 가장 먼저 처리를 해준다.

console.log('1');
setTimeout(()=>console.log('2'), 1000);
console.log(`3`);

//Synchronous callback

function printImmadiately(print){
    print();
}

printImmadiately(()=>console.log('hi'));

//Asynchronous callback
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}

printWithDelay(()=>console.log('async'),2000);

//callback hell ex

class UserStorage{
    loginUser(id, pass, onSucess, onError){
        setTimeout(()=>{
            if (
                (id=='beomjun' && pass == 'cho') ||
                (id=='yen' && pass == 'cho')
            ){
                onSucess(id);
            } else{
                onError(new Error('not found'))
            }

        }, 2000)
    }
    getRoles(user, onSucess, onError){
        setTimeout(()=>{
            if(user == 'beomjun'){
                onSucess({name:'beomjun', role:'admin'});
            }else{
                onError(new Error('no access'));
            }
        },1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const pass = prompt('enter your pass');
userStorage.loginUser(
    id, 
    pass, 
    user=>{
        userStorage.getRoles(
            user, 
            userWithRole =>{
                alert(`Hello ${userWithRole.name}, you have a${userWithRole.role} role`)
            },
            error =>(
                console.log(error)
            )
        )
        
    },
    error =>{console.log(error)}
)