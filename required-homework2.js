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
function checkIsDimensionValid (dimension) {
    const validDimensions = ['minutes', 'seconds', 'days', 'hours']

    return validDimensions.includes(dimension)
}

function checkIsDateValid(date) {
    const dateToValidate = Date.parse(date);
    const isInvalid = isNaN(dateToValidate)
    
    return !isInvalid
}

function formatDate (date, duration){
    return `${date} ${duration}`;
}


function durationBetweenDates(startDate = '22 Jun 2023' , endDate = '22 Jun 1997' , timeDimension = 'minutes') {
    const isDimensionValid = checkIsDimensionValid(timeDimension);

    if(!isDimensionValid) {
        'Invalid dimension'
    }

    const isStartValid = checkIsDateValid(startDate)
    const isEndValid = checkIsDateValid(endDate)

    if (!isStartValid || !isEndValid) {
        return 'Invalid date'
    }

    const getStartDate = new Date(startDate);
    const getEndDate = new Date(endDate);
    const dateInterval = Math.abc(getEndDate - getStartDate);

    if (timeDimension === 'days') {
        const date = dateInterval / (1000 * 60 * 60 * 24);
        return formatDate(date, timeDimension);
    }
    
    if (timeDimension === 'seconds'){
        const date = dateInterval / 1000;
        return formatDate(date, timeDimension);
    }
   
    if (timeDimension === 'minutes'){ 
        const date = dateInterval / (1000 * 60);
        return formatDate(date, timeDimension);
    }

    
    if (timeDimension === 'hours'){  
        const date = dateInterval / (1000 * 60 * 60);
        return formatDate(date, timeDimension);   
    }

    return 'Unsupported case';
    
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
    if(!data || Array.isArray(data) || typeof data !== 'object'){
        return 'Invalid data';
    }


    const result = {};
    for(const [key, value] of Object.entries(data)){
        result[key.toLowerCase()] = Number.parseFloat(value).toFixed(2);
    }
    return result;
};

let updatedPriceData = optimizer(priceData);
console.log(updatedPriceData)    // {apples: '23.40', bananas: '48.00', oranges: '48.76'}


// Задача про рекурсію та ітерацію
// Напишіть: - функцію яка рекурсивно буде знаходити суму всіх непарних додатніх чисел до якогось числа.
//Приклад:

function recursiveOddSumTo(number) {
    if (typeof number !== 'number' || isNaN(number)){
        return 'Invalid data'
    }
    if (number <= 0 ) {
        return 0;
    }
    if ( number === 1) {
        return 1
    }

    if ( number % 2 !== 0 ) {
        return number + recursiveOddSumTo(number - 2)  
    }
    
    return recursiveOddSumTo(number - 1)
        
}   
   

console.log(recursiveOddSumTo(1)) // 1
console.log(recursiveOddSumTo(10)) // 25

//- функцію яка ітеративно (в циклі) буде знаходити суму всіх непарних додатніх чисел до якогось числа.
//Приклад:


function iterativeOddSumTo(number) {
    const sum = 0;
    if (typeof number !== 'number' || isNaN(number)){
        return 'Invalid data'
    }
    if (number <= 0 ) {
        return 0;
    }

    for (let i = 1; i <= number; i+=2) {
        
        sum += i
    };

    return sum;

};

console.log(iterativeOddSumTo(1)) // 1
console.log(iterativeOddSumTo(10)) // 25