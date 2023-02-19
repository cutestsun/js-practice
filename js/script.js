// /**
//  *? Використовуючи функцію if...else,
//  *? напишіть код, який запитуватиме:
//  *? "Яка офіційна назва JavaScript?"
//  *? Якщо користувач вводить "ECMAScript",
//  *? то показати через alert: "Вірно!"
//  *? інакше відобразити:"Не знаєте? ECMAScript!"
//  */

// const userInput = prompt("Яка офіційна назва JavaScript ?");

// if (userInput === "ECMAScript") {
//   alert("Вірно!");
// } else {
//   alert("Не знаєте? ECMAScript!");
// }

/**
 *? Напишіть програму, яка отримає від користувача
 *? число (кількість хвилин) та виведе в консоль
 *? рядок у форматі годин та хвилин
 *? https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
 *? 70 === 01:10
 */

// const userTime = prompt('Введіть число');
//  function time(number){
// let hours = String(Math.floor(number / 60)).padStart(2, "0");
// let minutes = String(number % 60).padStart(2, "0");
// return `${hours}:${minutes}`;
//  }

// console.log(time(userTime));

/**
 *? Напишіть цикл, який виводить у консоль
 *? числа від max до min за спаданням.
 *? Виведіть у консоль усі парні числа від min до max
 */

function logOutNum(min, max) {
    for (let i = max; i >= min; i--){
        console.log(i)
    }
    for (let i = min; i <= max; i++){
        if (i % 2 == 0) {
            console.log(i)
        }
    } 
}
 
logOutNum(3, 9);