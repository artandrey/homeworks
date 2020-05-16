'use strict';


//--------------------TASK-1--------------------------------------

// const delay = ms => {
//     const promise = new Promise((resolve, reject)=>{
//         setTimeout(() => {
//           resolve(ms);
//         }, ms)
//     });
//     return promise;
//   };
  
//   const logger = time => console.log(`Resolved after ${time}ms`);
  
//   // Вызовы функции для проверки
//   delay(2000).then(logger); // Resolved after 2000ms
//   delay(1000).then(logger); // Resolved after 1000ms
//   delay(1500).then(logger); // Resolved after 1500ms

//--------------------TASK-2--------------------------------------

// const users = [
//     { name: 'Mango', active: true },
//     { name: 'Poly', active: false },
//     { name: 'Ajax', active: true },
//     { name: 'Lux', active: false },
//   ];


// const toggleUserState = (allUsers, userName) => {
//     const promise = new Promise ((reslove, reject) => {
        
//     const updatedUsers = allUsers.map(user =>
//     user.name === userName ? { ...user, active: !user.active } : user,
//     );
//         reslove(updatedUsers);
//     });
//     return promise;
//     // const updatedUsers = allUsers.map(user =>
//     //   user.name === userName ? { ...user, active: !user.active } : user,
//     // );
  
//     // callback(updatedUsers);
//   };
  
//   const logger = updatedUsers => console.table(updatedUsers);
  
//   /*
//    * Сейчас работает так
//    */
// //   toggleUserState(users, 'Mango', logger);
// //   toggleUserState(users, 'Lux', logger);
  
//   /*
//    * Должно работать так
//    */
//   toggleUserState(users, 'Mango').then(logger);
//   toggleUserState(users, 'Lux').then(logger);



//--------------------TASK-3--------------------------------------



const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  
  const makeTransaction = (transaction) => {
    const delay = randomIntegerFromInterval(200, 500);
    const promise = new Promise((res,rej) => {
    setTimeout(() => {
      const canProcess = Math.random() > 0.3;
  
      if (canProcess) {
        res([transaction.id, delay]);
      } else {
        rej(transaction.id);
      }
    }, delay);
    })
    return promise
    
  };
  
  const logSuccess = (dataArray) => {
    console.log(`Transaction ${dataArray[0]} processed in ${dataArray[1]}ms`);
  };
  
  const logError = id => {
    console.warn(`Error processing transaction ${id}. Please try again later.`);
  };
  
  /*
   * Работает так
   */
//   makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
//   makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
//   makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
//   makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);
  /*
   * Должно работать так
   */
  makeTransaction({ id: 70, amount: 150 })
    .then(logSuccess)
    .catch(logError);
  
  makeTransaction({ id: 71, amount: 230 })
    .then(logSuccess)
    .catch(logError);
  
  makeTransaction({ id: 72, amount: 75 })
    .then(logSuccess)
    .catch(logError);
  
  makeTransaction({ id: 73, amount: 100 })
    .then(logSuccess)
    .catch(logError);





