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

// function logOutNum(min, max) {
//     for (let i = max; i >= min; i--){
//         console.log(i)
//     }
//     for (let i = min; i <= max; i++){
//         if (i % 2 == 0) {
//             console.log(i)
//         }
//     }
// }

// logOutNum(3, 9);

/**
 *? При завантаженні сторінки користувачеві пропонується
 *? в prompt ввести число. Введення додається до значення
 *? змінної total.
 *? Операція введення числа триває до того часу,
 *? поки користувач не натисне кнопку Cancel у prompt.
 *? Після того як користувач припинив введення, натиснувши на
 *? кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
 
 *! Робити перевірку, що користувач ввів саме число,
 *! а не довільний набір символів не потрібно.
 */

// let total = 0;

// let userInput = prompt('введіть число');
// do {
//     total += Number(userInput);
//     userInput = prompt('введіть число');
// } while (userInput !== null);

// alert(`Загальна сума введених чисел дорівнює ${total}.`)

/**
 *?  Записать массив, const arr = ['BEST', 'the', 'foo', 'is',  'JS' ]
 *? развернуть массив,
 *? вырезать foo,
 *? перевести его в строку разделенную пробелами
 */

// const arr = ["BEST", "the", "foo", "is", "JS"];
// let arr1 = arr.slice(0).reverse();

// arr1.splice(arr1.indexOf("foo"), 1);
// const result = arr1.join(" ");
// console.log(result);

//TODO:=============================================
//Напиши функцію конструктор User для створення користувача з такими властивостями
//a. userName - ім'я, рядок
//b. age - вік, число
//c. numbersOfPost - кількість постів, число
//d. клас очікує 1 параметр - об'єкт налаштувань з однойменними властивостями

//Додай метод getInfo(), який повертає рядок:
//`Користувачеві ${} ${} років і в нього ${} публікацій.`

// function User({ userName, age, numberOfPost }) {
//   this.userName = userName;
//   this.age = age;
//   this.numberOfPost = numberOfPost;
//   this.getInfo = function () {
//     return `Користувачеві ${this.userName} ${this.age} років і в нього ${this.numberOfPost} публікацій.`;
//   };
// }

// const newUser = new User({
//   userName: "Андрій",
//   age: 34,
//   numberOfPost: 12,
// });
// console.log(newUser.getInfo());

//Напиши функцію конструктор Storage який створює об'єкти
//Для управління складом товарів.
//При виклику отримуватиме один агрумент - початковий масив товарів,
//і записувати їх у властивість items.
//Додай методи класу:
//getItems() - повертайте масив товарів
//addItems(item) - отримує новий товар та додає його до поточних
//removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних

function Storage(arr) {
  this.items = arr
  this.getItems = function () {
    return this.items
  }
  this.addItems = function (item) {
  this.items.push(item)
  }
  
}
Storage.prototype.removeItem = function (item) {
  const indexForRemoving = this.items.indexOf(item)
  if (indexForRemoving !== -1) {
    this.items.splice(indexForRemoving,1)
  }
}
const newStorage = new Storage(['PC', 'Laptop', 'Tablet'])
console.log(newStorage.getItems())
newStorage.removeItem('PC')
console.log(newStorage.getItems())