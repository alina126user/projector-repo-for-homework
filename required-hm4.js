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
    
    customer.introduce();
    customer.prognose();
    customer.describeMyMood();

let securedSelfIntroduce = customer.introduce.bind(customer)
let securedSelfPrognose = customer.prognose.bind(customer)
let securedSelfDescribeMyMood = customer.describeMyMood.bind(customer)

setTimeout(securedSelfIntroduce, 1000); // виведе коректний результат*
setTimeout(securedSelfPrognose, 2000); // виведе коректний результат*
setTimeout(securedSelfDescribeMyMood, 3000); // виведе коректний результат*

//Напишіть функцію-декоратор яка вопвільнює виконання довільної функції на вказану кількість секунд.

function someFunction // тут напишіть довільну функцію яка робить якусь роботу зі своїми аргументами та виводить результат в консоль

function slower(func, seconds) {
// тут ваш код для декоратора*
}

let slowedSomeFunction = slower(someFunction, 5); // обгортаєте свою довільну функцію 'someFunction' в декоратор*

slowedSomeFunction(/*якісь аргументи*/) // викликаєте декоратор*