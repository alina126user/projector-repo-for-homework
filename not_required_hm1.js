// Придумайте правильні змінні для
let userName = 'Alina'; // імʼя користувача на сайті
let riverInKyiv = 'Dnipro'; // назва річки в Києві
let ageOfVinnytsia = 659; //вік міста, в якому ви мешкаєте

// Створіть три приклади змінних - констант
const nameofThirdPlanet = 'Earth';
const nameOfMyTeacher = 'Roman';
const bestJsCourses = 'Projector';

// Створіть три приклади змінних, які можна переприсвоїти

let numberOfTeams = 20;
let alertForClick = alert('Hey dude!');
let promptForAccess = prompt('Do you really want to click on it?');

//Як буде працювати цей скрипт 

const greeting = "I'm doing homework!";
const studentName = 'Alina' //put your name here.

console.log(`${studentName}: ${greeting}`);
console.log('${studentName}: greeting')
console.log("${studentName}: ${greeting}")

//Лапки "" і '' не відрізняються, але backstics виведе нам той запит який ми хочемо.

// Як буде працювати такйи код. Які значення будуть в newStudentResult і newTeacherResult.

let studentNumber = 100; 
let teacherNumber = 100;

let newStudentResult = ++studentNumber;
let newTeacherResult = teacherNumber++;

// В першому випадку нова змінна буде одразу ітеруватися на одиницю, в другому відбувається присвоєння змінної і
// вона зміниться на 1 після першого виконання

//Подумайте як буде йти перетворення типів. Якщо все продумали - запустіть код і перевірте себе

const result1 = 18 + "9px"; // результат перетворення в string - 1918px
const result2 = 10 - "1"; // результат перетворення в число - 9
const result3 = null + 0; // 0
const result4 = 31 + "  -30  "; // результат перетворення в строку '31 - 30 '
const result5 = undefined + 0; // NaN
const result6 = "example" ?? 0; // оператор ?? виведе стрічку
const result7 = undefined ?? 0; // оператор ?? виведе 0
const result8 = undefined || 0; // 0
const result9 = 0 && 1; // 0

//  Що буде в консолі?

console.log(null || true && 'result' || 1); // оператор && має вищу пріоритетність тому одразу буде виконано дію з по привірнянні true і 'result' -> 
// буде виведено 'result' бо цей оператор шукає перше false value on his way, далі буде виконано дія з || і він виводить перше truthy value і це буде 'result'
console.log(null && 1 || 'result'); // ті ж правила, виведеться 'result'
