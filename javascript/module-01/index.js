"use strict"
// -----------------------------------------TASK-1---------------------------------
// const name = "Генератор защитного поля"
// let price = 1000;

// console.log(`Выбран ${name}, цена за штуку ${price} кредитов.`);

// price = 2000;

// console.log(`Выбран ${name}, цена за штуку ${price} кредитов.`);


// -------------------------------------------TASK-2----------------------------------

// const total = 100;
// const order = 50;
// if (order > total) {
//     console.log("На складе недостаточно твоаров!");
// }
// else {
//     console.log("Заказ оформлен, с вами свяжется менеджер");
// }

// ------------------------------------------------TASK-3------------------------------




// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;


// let userPassword = prompt("Введите пароль");

// if (userPassword === null) {
//     message = 'Отменено пользователем!';
// }
// else if (userPassword == ADMIN_PASSWORD) {
//         message = 'Добро пожаловать!';
//     }
//     else {
//         message = 'Доступ запрещен, неверный пароль!';
//     }
// alert(message);



// -----------------------------------TASK-4-------------------------------------



// const credits = 23580;
// let pricePerDroid = 3000;
// let countOfDroid;
// let totalPrice;
// let message;
// let creditsLeft;


// countOfDroid = prompt("Сколько дроидов желаете приобрести?");
// totalPrice = countOfDroid * pricePerDroid;
// if (countOfDroid === null) {
//     message = 'Отменено пользователем!';
// }
// else 
//     if (totalPrice > credits) {
//       message = 'Недостаточно средств на счету!';
//   }
//   else {
//       creditsLeft = credits - totalPrice;
//       message = `Вы купили ${countOfDroid} дроидов, на счету осталось ${creditsLeft} кредитов.`
  
// }
// alert(message);



// -----------------------------------------------------TASK-5-------------------------------------

// let country = prompt("Введите страну").toUpperCase();
// let price;
// let message;

// switch (country) {
//     case ("КИТАЙ"): {
//         price = 100;
//         break;
//     }
//     case ("ЧИЛИ"): {
//         price = 250;
//         break;
//     }
//     case ("АВСТРАЛИЯ"): {
//         price = 170;
//         break;
//     }
//     case ("ИНДИЯ"): {
//         price = 80;
//         break;
//     }
//     case ("ЯМАЙКА"): {
//         price = 120;
//         break;
//     }
//     default: {
//         message = 'В вашей стране доставка не доступна';
//     }
// }
// if (price) {message = `Доставка в ${country} будет стоить ${price} кредитов`;}
// alert(message);

// ------------------------------------------------------------TASK-6--------------------------------


// let total = 0;
// let userNumber;

// while (userNumber !== null) {
//   userNumber = prompt("Введите число:");
//   if (Number.isNaN(+userNumber)) {
//     alert('Было введено не число, попробуйте еще раз');
//   }
//   else {
//   total = total + +userNumber;
//   }
// }
// alert(`Общая сумма чисел равна ${total}`);