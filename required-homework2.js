/*
Напишіть функцію яка буде буде приймати 3 параметри
- початкову дату (string)
- кінцеву дату (string)
- розмірність ('days', 'hours', 'minutes', seconds)
Функція повертатиме часовий період між цими датами згідно розмірності.
Також вкажіть значення по замовчуванню для всіх цих параметрів (на ваш вибір).
Функція має коректно працювати навіть якщо початкова дата пізніше ніж кінцева дата.
*/


   // startDate = startDate || '22 Jun 2023';
   // endDate = endDate || '22 Jun 1997';
   // timeDimension = timeDimension || 'minutes'

function durationBetweenDates(startDate = '22 Jun 2023' , endDate = '22 Jun 1997' , timeDimension = 'minutes') {

    const getStartDate = new Date (startDate);
    const getEndDate = new Date (endDate);
    const dateInterval = getEndDate - getStartDate;

    if (timeDimension === 'days') {
        return(dateInterval / 86400000)
    }
    
    if (timeDimension === 'seconds'){
        return(dateInterval / 1000);
    }
   
    if (timeDimension === 'minutes'){ 
        return(dateInterval / 60000 ) 
    }
    
    if (timeDimension === 'hours'){  
        return(dateInterval / 3600000)   
    }
    
};
durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds') // поверне '86400 seconds'
durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days') // поверне '362 days'

/* Допустимо у вас є об'єкт, у якому кожен ключ - це назва товару (одинм словом), а значення - його ціна.
Напишіть функцію яка буде всі ключі переводити у нижній регістр, а всі ціни буде заокруглювати до двох знаків після коми.
*/
const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584',
};

function optimizer(data) {
    let obj = {};
    for(const [key, value] of Object.entries(data)){
        obj[key.toLowerCase()] = Number.parseFloat(value).toFixed(2);
    }
    return obj;
};

let updatedPriceData = optimizer(priceData);
console.log(updatedPriceData)    // {apples: '23.40', bananas: '48.00', oranges: '48.76'}


// Задача про рекурсію та ітерацію
// Напишіть: - функцію яка рекурсивно буде знаходити суму всіх непарних додатніх чисел до якогось числа.
//Приклад:

function recursiveOddSumTo(number) {
    if ( number === 1) {
        return 1
    } else {
        if ( number % 2 !== 0 ) {
            return number + recursiveOddSumTo(number - 2)  
        } else {
            return recursiveOddSumTo(number - 1)
        }
            }   
   }

console.log(recursiveOddSumTo(1)) // 1
console.log(recursiveOddSumTo(10)) // 25

//- функцію яка ітеративно (в циклі) буде знаходити суму всіх непарних додатніх чисел до якогось числа.
//Приклад:


function iterativeOddSumTo(number) {
    const sum = 0;
    for (let i = 1; i <= number; i+=2) {
        
        sum += i
    };

    return sum;

};

console.log(iterativeOddSumTo(1)) // 1
console.log(iterativeOddSumTo(10)) // 25