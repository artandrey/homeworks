"use strict"

// ----------------------------------TASK-1---------------------------------------

// let list = document.querySelector("#categories");
// let items = list.querySelectorAll(".item");
// console.log(`В списке ${items.length} категории`);
// items.forEach((el) => {
//   console.log(`В списке ${el.querySelectorAll("li").length}`);
//   console.log(`Категория ${el.querySelector("h2").textContent}`);
// });

// ----------------------------------TASK-2---------------------------------------

// const ingredients = [
//   "Картошка",
//   "Грибы",
//   "Чеснок",
//   "Помидоры",
//   "Зелень",
//   "Приправы",
// ];

// let list = document.querySelector("#ingredients");
// console.log(list);
// const addToList = function (array) {
//   for (let i = 0; i < array.length; i++) {
//     let item = document.createElement("li");
//     list.append(item);
//     item.textContent = array[i];
//   }
// };
// addToList(ingredients);

// -------------------------------------TASK-3-------------------------------------

// const images = [
//   {
//     url:
//       "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];

// const createEl = function (array) {
//   let elemnts = new String();
//   for (const value of array) {
//     elemnts += `<li class = "gallery-elem"><img src = "${value.url}" alt = "${value.alt}"></li>`;
//   }
//   return elemnts;
// };
// let gallery = document.querySelector("#gallery");
// console.log(gallery);
// gallery.insertAdjacentHTML("afterbegin", createEl(images));

// // -----------------------------------------------TASK-4---------------------------------------------

// let counterValue = 0;

// let value = document.querySelector("#value");

// let counter = document.querySelector("#counter");

// let decrementBtn = counter.children[0];

// let incrementBtn = counter.children[2];
// console.log(counterValue, value, counter, decrementBtn);

// decrementBtn.addEventListener("click", () => decrement());
// incrementBtn.addEventListener("click", () => increment());

// const increment = function () {
//   counterValue++;
//   value.textContent = counterValue;
// };
// const decrement = function () {
//   counterValue--;
//   value.textContent = counterValue;
// };

// ---------------------------------------TASK-5-----------------------------------------------------------

// let input = document.querySelector("#name-input");
// let text = document.querySelector("#name-output");
// input.addEventListener("input", () => {
//   if (input.value) {
//     text.textContent = input.value;
//   } else {
//     console.log(value);
//     text.textContent = "незнакомец";
//   }
// });

// -------------------------------------TASK-6------------------------------------------------------------

// let input = document.querySelector("#validation-input");
// let symbol = +input.getAttribute("data-length");
// console.log(symbol);
// input.addEventListener("change", () => {
//   if (symbol === input.value.length) {
//     input.classList.add("valid");
//     input.classList.remove("invalid");
//   } else {
//     input.classList.add("invalid");
//     input.classList.remove("valid");
//   }
// });

// ---------------------------------------TASK-7------------------------------------------------------------

// let text = document.querySelector('#text');
// let input = document.querySelector('#font-size-control');
// input.addEventListener('input', () => text.style.fontSize = (`${input.value}px`));

// --------------------------------------TASK-8-----------------------------------------------------------

// let box = document.querySelector("#controls");

// let boxes = document.querySelector("#boxes");

// let input = document.querySelector("input");

// let btnCollection = document.querySelectorAll("button");

// console.log(box, input, btnCollection);

// const mathRandom = function (max) {
//   return Math.floor(Math.random() * Math.floor(max + 1));
// };

// const randomRGB = function () {
//   return `rgb(${mathRandom(255)}, ${mathRandom(255)}, ${mathRandom(255)})`;
// };

// const createBoxes = function (amount) {
//   let width = 30;
//   let height = 30;
//   for (let index = 0; index < amount; index++) {
//     let div = document.createElement("div");
//     div.style.width = width + "px";
//     div.style.height = height + "px";
//     div.style.backgroundColor = randomRGB();
//     console.log(randomRGB());
//     boxes.append(div);
//     width += 10;
//     height += 10;
//     console.log(width, height);
//   }
// };

// const destroyBoxes = function () {
//   let elements = boxes.querySelectorAll("div");
//   for (const el of elements) {
//     boxes.removeChild(el);
//   }
// };

// btnCollection[0].addEventListener("click", () => createBoxes(input.value));

// btnCollection[1].addEventListener("click", () => destroyBoxes());



// let input = document.querySelector('input');

// let renderBtn = document.querySelector('.render');

// let destroyBtn = document.querySelector('.destroy');
// let box = document.querySelector('#boxes');

// console.log(input, renderBtn, destroyBtn, box);

// const createBoxes = function(amount) {
//     let width = 30;
//     let height = 30;
//     for (let i = 0; i < amount; i++) {
//         let div = document.createElement('div');
//         box.append(div);
//         div.style.width = width + 'px';
//         div.style.height = height + 'px';
//         div.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
//         width += 10;
//         height += 10;
//     };
// };

// const destroy = function () {
//     box.innerHTML = '';
//     input.value = 0;
// }

// renderBtn.addEventListener('click', () => createBoxes(input.value));
// destroyBtn.addEventListener('click', destroy);