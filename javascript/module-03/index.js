"use strcit";



// // --------------------------------TASK-1------------------------------

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;
// const keys = Object.keys(user);
// for (const key of keys) {
//   console.log(key + ":" + user[key]);
// }

// // ------------------------------TASK-2-------------------------------

// const countProps = function(obj) {
//   return Object.keys(obj).length;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countProps({})); // 0

// console.log(countProps({ name: "Mango", age: 2 })); // 2

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3

// // -------------------------------TASK-3-------------------------------

// const findBestEmployee = function(employees) {
//   let valuesArray = Object.values(employees);
//   const maxNumber = Math.max(...valuesArray);
//   let indexOfMaxValue;
//   for (let i = 0; i < valuesArray.length; i++) {
//     if (maxNumber == valuesArray[i]) {
//       indexOfMaxValue = i;
//     }
//   }
//   return Object.keys(employees)[indexOfMaxValue];
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99
//   })
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4
//   })
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38
//   })
// ); // lux

// // -----------------------------------TASK-4---------------------------

// const countTotalSalary = function(employees) {
//   let valuesArray = Object.values(employees);
//   let total = 0;
//   for (const salary of valuesArray) {
//     total += salary;
//   }
//   return total;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80
//   })
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150
//   })
// ); // 400

// // ---------------------------------TASK-5-----------------------

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 }
// ];

// const getAllPropValues = function(arr, prop) {
//   let valuesArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i][prop] == undefined) {
//       valuesArray.push();
//     } else {
//       valuesArray.push(arr[i][prop]);
//     }
//   }
//   return valuesArray;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, "category")); // []

// // -----------------------------------TASK-6-------------------------------------

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 }
// ];

// const calculateTotalPrice = function(allProdcuts, productName) {
//   for (let i = 0; i < allProdcuts.length; i++) {
//     if (allProdcuts[i].name == productName) {
//       return allProdcuts[i].price * allProdcuts[i].quantity;
//     }
//   }
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(calculateTotalPrice(products, "Радар")); // 5200

// console.log(calculateTotalPrice(products, "Дроид")); // 2800



// //-----------------------------------TASK-7------------------------------------

