// 1. Напишіть функцію detonatorTimer(delay), яка виводить в консоль число кожну секунду,
// починаючи з delay (ціле число) і в кінці замість 0 виведе 'BOOM!'. Напишіть її двома варіантами:
// Використовуючи setInterval
//Використовуючи вкладений setTimeout


 
function detonatorTimer(delay) {
    for (let i = delay; i >= 0; i--) {
            setTimeout(console.log, (delay - i) * 1000, (i === 0) ? 'BOOM!' : i )
        }     
    }

    detonatorTimer(3);

    function detonatorTimer(delay) {
        let intervalId = setInterval(() => {
            --delay;
            console.log(delay + 1)
            if (delay === 0) {
              clearInterval(intervalId);
              console.log('BOOM!');
            }
          }, 1000)
        };
    
    detonatorTimer(3);    

// Напишіть об'єкт в якому опишіть свої довільні властивості та довільні методи (2-3 штуки) що ці властивості виводять.
// Наприклад:

let customer = {
    name: 'Roman',
    residency: 'Kyiv',
    gender: 'male',
    age: 25,
    hobby: 'developer',
    defaultMood: 'focused',
    currentMood: 'happy',
    introduce() {
    console.log(`My name is ${this.name} and I live in ${this.residency}`);
    },
    prognose() {
    console.log(`I hope that next year I'm gonna be ${this.age+1}`);
    },
    describeMyMood(){
    console.log(`Mostly I'm ${this.defaultMood}, but now I'm ${this.currentMood}`);
    }
    }
    

let securedSelfIntroduce = customer.introduce.bind(customer)
let securedSelfPrognose = customer.prognose.bind(customer)
let securedSelfDescribeMyMood = customer.describeMyMood.bind(customer)

setTimeout(securedSelfIntroduce, 1000); // виведе коректний результат*
setTimeout(securedSelfPrognose, 2000); // виведе коректний результат*
setTimeout(securedSelfDescribeMyMood, 3000); // виведе коректний результат*

//Напишіть функцію-декоратор яка вопвільнює виконання довільної функції на вказану кількість секунд.

function someFunction (firstArg, secondArg) {
    const i = firstArg * 5 
    const x = secondArg / 10
    const sum = i + x
    console.log(`sum: ${sum} - arg1: ${firstArg} & arg2: ${secondArg} `)
    return sum
}

function decoratorSlower(func, seconds) {
    
    return function () {
       setTimeout(func.apply(this, arguments), seconds * 1000)

    }

}

let slowedSomeFunction = decoratorSlower(someFunction, 5); 

slowedSomeFunction(10, 15) 