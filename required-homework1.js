//Задача на повернення ініціалів для кожного імені з масиву, посортованих в алфавітному порядку
const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
let initials = [];
for (let i = 0; i < userNames.length; i++ ) {
    const nameParse = userNames[i].split(" ");
    const firstLetter = nameParse.map(function(word) {
        return word.charAt(0);      
    });
    const result = [firstLetter[0], firstLetter[1], firstLetter[2]].join(".");
    initials.push(result);
}
initials = initials.sort();

console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]

//Задача на розворот числа

const currentMaxValue = 4589;
let stringMaxValue = String(currentMaxValue).split('').reverse().join('');
let reverseMaxValue = Number(stringMaxValue);
console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'

//Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності:

const resultsArray = [1, 2, [3, [4]]];
let productOfArray = resultsArray.flat(Infinity).reduce((accumulator, nextItem, position, 
    array) => {
        return accumulator * nextItem
    });
    
console.log(productOfArray); // 24