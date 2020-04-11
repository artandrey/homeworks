"use strict"


//-----------------------TASK-1----------------------------------

// const Account = function(obj) {
//     this.login = obj.login;
//     this.email = obj.email;
// }
// Account.prototype.getInfo = function() {
//     return console.log(`Login: ${this.login}, Email: ${this.email}`)
// };

// console.log(Account.prototype.getInfo); // function

// const mango = new Account({
//   login: 'Mangozedog',
//   email: 'mango@dog.woof',
// });

// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// poly.getInfo(); // Login: Poly, Email: poly@mail.com

//----------------------TASK-2-------------------------------------

// class User {
//     constructor(obj) {
//         this.name = obj.name;
//         this.age = obj.age;
//         this.followers = obj.followers;
//         this.getInfo = function() {
//             console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`)
//         }
//     }
// }

// const mango = new User({
//     name: 'Mango',
//     age: 2,
//     followers: 20,
//   });
  
//   mango.getInfo(); // User Mango is 2 years old and has 20 followers
  
//   const poly = new User({
//     name: 'Poly',
//     age: 3,
//     followers: 17,
//   });
  
//   poly.getInfo(); // User Poly is 3 years old and has 17 followers

//-----------------------TASK-3--------------------------------------------------

// class Storage {
//     constructor(array) {
//         this.items = array;
//     }
//     getItems = function() {
//         return this.items
//     };
//     addItem = function(itemName) {
//         this.items.push(itemName);
//         return this.items
//     }
//     removeItem = function(itemName) {
//         for(let i = 0; i < this.items.length; i++) {
//             if(this.items[i].includes(itemName)) {
//                 this.items.splice(i, 1)
//                 return this.items
//             }
//         }
//     }
// }
// const storage = new Storage([
//     'Нанитоиды',
//     'Пролонгер',
//     'Железные жупи',
//     'Антигравитатор',
//   ]);
  
//   const items = storage.getItems();
//   console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
  
//   storage.addItem('Дроид');
//   console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
  
//   storage.removeItem('Пролонгер');
//   console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

//---------------------------TASK-4------------------------------------------------



// class StringBuilder {
//     constructor(str) {
//         this._value = str
//     }

// }


// const builder = new StringBuilder('.');



// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='









// const numbers = [1,2,3,4,5,6];

// numbers.forEach((number, idx) => console.log(number + 'number of number = ' + idx))

// const doDouble = function(array) {
//  return array.map(number => number * 2)
// }
// console.log(doDouble(numbers))

// const users = [
//     { id: 1, name: 'Mango', isActive: true },
//     { id: 2, name: 'Poly', isActive: false },
//     { id: 3, name: 'Ajax', isActive: true },
//   ];

//   console.log(users.filter(user => user.isActive)); 

//   console.log(numbers.filter(number => number >= 5))

//   console.log(numbers.find(number => number > 1))

//   console.log(users.find(user => user.id > 0))

//   console.log(users.every(user => user.isActive))
//   console.log(users.some(user => user.isActive))

//   const tweets = [
//     { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//     { id: '001', likes: 2, tags: ['html', 'css'] },
//     { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//     { id: '003', likes: 8, tags: ['css', 'react'] },
//     { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
//   ];

//   console.log(tweets.reduce((total, tweet) => total + tweet.likes, 0 ))


//   const names = ['Flex', 'Mango', 'Poly', 'Alex']
//   console.log(names.sort())


//   const allUsers = [
//     { name: 'Mango', daysActive: 15 },
//     { name: 'Poly', daysActive: 4 },
//     { name: 'Ajax', daysActive: 27 },
//     { name: 'Chelsey', daysActive: 2 },
//   ];
  
//   const sortByActiveDays = (a, b) => a.daysActive - b.daysActive;
  
//   console.log(allUsers.sort(sortByActiveDays));    



  