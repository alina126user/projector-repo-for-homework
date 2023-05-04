// Напишіть функцію addThemAll яка буде знаходити сумму усіх своїх аргументів незалежно від їх кількості (але без використання вбутованого об'єкту Math).
// Використайте оператор розширення:

console.log(addThemAll(2,4)); // 6*
console.log(addThemAll(1,2,3,4)); // 10*
console.log(addThemAll(5,5,10)); // 20*

function checkIsNumber(number) {
    return typeof number === 'number' && isNaN(number)
}

function addThemAll(...params){
    let sum = 0;

    for (let number of params){
        if(checkIsNumber(number)){
            sum += number;
        }
    }
    return sum;
}
  

  
/*
 Задача на використання замикання. Напишіть функцію яка працює таким чином: multiply(a)(b)// a * b
*/

console.log(multiply(5)(5))		// 25*
console.log(multiply(2)(-2))	// -4*
console.log(multiply(4)(3))		// 12*

    function multiply(a){
        return function (b) {
            if (!checkIsNumber(a) || !checkIsNumber(b)){
                return 'Invalid data'
            }
                return  a * b;
        }
        };
    

/* Напишіть функцію яка буде використовуватись для сортування масиву фільмів. Функція буде приймати два аргумента:
1.властивість за якою треба посортувати
2. опцію напрямку сортування, зростання чи спадання
*/
const movies = [
    {
        movieName: 'The Thing',
        releaseYear: 1982,
        directedBy: 'Carpenter',
        runningTimeInMinutes: 109,
    },
    {
        movieName: 'Aliens',
        releaseYear: 1986,
        directedBy: 'Cameron',
        runningTimeInMinutes: 137,
    },
    {
        movieName: 'Men in Black',
        releaseYear: 1997,
        directedBy: 'Sonnenfeld',
        runningTimeInMinutes: 98,
    },
    {
        movieName: 'Predator',
        releaseYear: 1987,
        directedBy: 'McTiernan',
        runningTimeInMinutes: 107,
    },
];
    
console.log(movies.sort(byProperty('releaseYear', '>'))); // виведе масив фільмів посортованих по року випуску, від старішого до новішого*
console.log(movies.sort(byProperty('runningTimeInMinutes', '<'))); // виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого*
console.log(movies.sort(byProperty('movieName', '>'))); // виведе масив фільмів посортованих по назві, в алфавітному порядку*

const SORT_PROPERTIES = {
    NAME: 'movieName',
    RELEASE: 'releaseYear',
    DIRECTOR: 'directedBy',
    DURATION: 'runningTimeInMinutes'
}

const SORT_ORDER = {
    ABC: '>',
    DESC: '<'
}

const SORT_ORDER_VALUES = {
    [SORT_ORDER.ABC]: 1,
    [SORT_ORDER.DESC]: -1
}

function checkDirection(direction) {
    const validValues = Object.values(SORT_ORDER);

    return validValues.includes(direction);
}

function checkProperty(property) {
    const validValues = Object.values(SORT_PROPERTIES);

    return validValues.include(property)
}


function byProperty(property, direction) {
    return function (a, b) {
        if (!checkDirection(direction) || !checkProperty(property)) {
            return 0;
        }

      const valueA = a[property];
      const valueB = b[property];
      
    const orderValue = SORT_ORDER_VALUES(direction);

    if (valueA === valueB) {
        return 0;
    }
    return valueA > valueB ? orderValue : -1 * orderValue
    }
  }
