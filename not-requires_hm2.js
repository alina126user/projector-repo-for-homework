/*
Напишіть цикл який буде добавляти рандомні числа в рядок (використати  Math.random).
Числа повинні бути випадкові 1 до 10 і тільки цілі.

Кінець циклу має бути коли довжина рядка буде 6 символів.

Наприклад

start 

number - 0
1 iteration - 0 + 2 (Random number) -> 02
2 iteration - 02 + 3 (Random number) -> 023
...
5 iteration - 02305 + 5 (Random number) -> 023055

end.
*/


let stringNumber = '';
const maxSizeOfString = 6;
for(let i = 0; i < maxSizeOfString; i++) {
    const randomNumber = Math.floor(Math.random() * 10 + 1)
    stringNumber = (stringNumber + randomNumber).slice(0, 6)

    console.log(stringNumber)
}