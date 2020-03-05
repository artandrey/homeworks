"use strict";

// // ----------------------------------------TASK-1---------------------------------------------

// const logItems = function(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${array[i]} - ${i + 1}`);
//   }
// };

// logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// // ---------------------------------------------TASK-2------------------------------------------

// const calculateEngravingPrice = function(message, pricePerWord) {
//   let wordArray = message.split(" ");
//   return wordArray.length * pricePerWord;
// };

// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     10
//   )
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     20
//   )
// ); // 160

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
// ); // 240

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
// ); // 120

// // -------------------------------------------TASK-3--------------------------------------

// const findLongestWord = function(string) {
//   const words = string.split(" ");
//   let numberOfWordRememberer;
//   let numberRememberer = 0;
//   let takeOneWord;
//   let LargestWord;
//   for (let i = 0; i < words.length; i++) {
//     takeOneWord = words.slice(i, i + 1);
//     if (takeOneWord.join("").length > numberRememberer) {
//       numberRememberer = takeOneWord.join("").length;
//       numberOfWordRememberer = i;
//     }
//     LargestWord = words[numberOfWordRememberer];
//   }

//   return LargestWord;
// };

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

// console.log(findLongestWord("Google do a roll")); // 'Google'

// console.log(findLongestWord("May the force be with you")); // 'force'

// // -------------------------------------------TASK-4---------------------------------------------

// const formatString = function(string) {
//   if (string.length > 40) {
//     let shortedArray = string.split("");
//     shortedArray.splice(40);
//     let text = shortedArray.join("");
//     return `${text}...`;
//   } else {
//     return string;
//   }
// };

// console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// // вернется оригинальная строка

// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// // вернется форматированная строка

// console.log(formatString("Curabitur ligula sapien."));
// // вернется оригинальная строка

// console.log(
//   formatString(
//     "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
//   )
// );
// // вернется форматированная строка

// // ---------------------------------------------TASK-5-----------------------------------

// const checkForSpam = function(message) {
//   let forbiddenWords = ["spam", "sale"];
//   let chekWords = forbiddenWords
//     .join(" ")
//     .split("")
//     .join(" ")
//     .toLowerCase()
//     .split("  ");
//   let messageToCheck = message
//     .split("")
//     .join(" ")
//     .toLowerCase();
//   let check = false;

//   for (let i = 0; i < forbiddenWords.length; i++) {
//     if (messageToCheck.includes(chekWords[i])) {
//       check = true;
//     }
//   }
//   return check;
// };

// console.log(checkForSpam("Latest technology news")); // false

// console.log(checkForSpam("JavaScript weekly newsletter")); // false

// console.log(checkForSpam("Get best sale offers now!")); // true

// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// // -------------------------------------------TASK-6----------------------------------

// let input;
// const numbers = [];
// let total = 0;

// while (input !== null) {
//   input = prompt("Введите число:");
//   if (Number.isNaN(+input)) {
//     alert("Было введено не число, попробуйте еще раз");
//   } else {
//     numbers.push(+input);
//   }
// }
// for (const interger of numbers) {
//   total += +interger;
// }
// console.log(`Общая сумма чисел равна ${total}`);

// // ------------------------------------------TASK-7--------------------------------------

// const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
// let message;

// const isLoginValid = function(login) {
//   if (login.length >= 4 && login.length <= 16) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const isLoginUnique = function(allLogins, login) {
//   let check;
//   for (let i = 0; i < allLogins.length; i++) {
//     if (allLogins[i] !== login) {
//       check = true;
//     } else {
//       check = false;
//       return check;
//     }
//   }
//   return check;
// };

// const addLogin = function(allLogins, login) {
//   if (isLoginValid(login)) {
//     if (isLoginUnique(allLogins, login)) {
//       logins.push(login);
//       message = "Логин успешно добавлен!";
//     } else {
//       message = "Такой логин уже используется!";
//     }
//   } else {
//     message = "Ошибка! Логин должен быть от 4 до 16 символов";
//   }

//   return message;
// };

// console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
// console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
// console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
