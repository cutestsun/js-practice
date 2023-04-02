//TODO:==============================================
/*
Завдання 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
*/

// const showBtnEl = document.querySelector('#alertButton')
// const inputEl = document.querySelector('#alertInput')
// showBtnEl.addEventListener('click',onShowBtnClick)
// function onShowBtnClick() {
//     alert(inputEl.value)
// }

//TODO:==============================================
/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/

const swapBtnEl = document.querySelector("#swapButton");
const leftSwapInputEl = document.querySelector("#leftSwapInput");
const rightSwapInputEl = document.querySelector("#rightSwapInput");

swapBtnEl.addEventListener("click", onSwapBtnClick);

function onSwapBtnClick() {
  const leftInputValue = leftSwapInputEl.value;
  const rightInputValue = rightSwapInputEl.value;

  leftSwapInputEl.value = rightInputValue;
  rightSwapInputEl.value = leftInputValue;
}
//TODO:==============================================
/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/
const hideInputEl = document.querySelector("#passwordInput");
const hideBtnEl = document.querySelector("#passwordButton");

hideBtnEl.addEventListener("click", onHideBtnClick);

function onHideBtnClick() {
  if (hideInputEl.type === "text") {
    hideInputEl.setAttribute("type", "password");
    hideBtnEl.textContent = "Розкрити";
  } else {
    hideInputEl.type = "text";
    hideBtnEl.textContent = "Скрити";
  }
}

//TODO:==============================================
/*
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів,  "Збільшити" - більше на 10 пікселів.
*/

//TODO:==============================================
/*
Завдання 5
Додайте слухач кліку на window і визначте чи клікнув користувач у дів з id="place".
*/

//TODO:==============================================
/*
Завдання 6
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази
*/

//TODO:==============================================
/*
Завдання 7
При натисканні на коло він повинен слідувати за курсором.
При повторному натисканні він стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/
