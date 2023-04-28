// Напишіть функцію addThemAll яка буде знаходити сумму усіх своїх аргументів незалежно від їх кількості (але без використання вбутованого об'єкту Math).
// Використайте оператор розширення:

console.log(addThemAll(2,4)); // 6*
console.log(addThemAll(1,2,3,4)); // 10*
console.log(addThemAll(5,5,10)); // 20*

function addThemAll(...params){
    if (typeof params !== 'number' || isNaN(params)){
        return 'Invalid data'
    } else {
    let sum = 0;
    for (let arg of params) sum += arg;
    return sum;
    }
  
}

  
/*
 Задача на використання замикання. Напишіть функцію яка працює таким чином: multiply(a)(b)// a * b
*/

console.log(multiply(5)(5))		// 25*
console.log(multiply(2)(-2))	// -4*
console.log(multiply(4)(3))		// 12*

    function multiply(a){
        if (typeof a !== 'number' || isNaN(a)){
            return 'Invalid data'
        } else if  (typeof b !== 'number' || isNaN(b)){
            return 'Invalid data'
        } else {
            return function (b) {
                return  a * b;
        }
        };
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
    
function byProperty(property, direction) {
    return function (a, b) {
      const valueA = a[property];
      const valueB = b[property];
      let compare = 0;
      if (valueA > valueB) {
        compare = 1;
      } else if (valueA < valueB) {
        compare = -1;
      }
      if (direction === '<') {
        compare = -compare;
      }
      return compare;
    }
  }
