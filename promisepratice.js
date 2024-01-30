// Q1. Write a promise function to add a new record at the end of array users using spread operator,
// functions : addLast(users,temp)

const users = [
  {
    id: 2,
    name: "Bonathon Haley",
    username: "Monte.Weber2",
    email: "Daphne43@yahoo.com",
    phone: "1-563-675-1857 x11708",
    website: "carmela.net",
    password: "hashed_password",
    ages: 34,
  },
  {
    id: 3,
    name: "Bean John",
    username: "dd.1",
    email: "deno@google.com",
    phone: "1-123-543-1857 123212",
    website: "dd.net",
    password: "Dean_hashed_password",
    ages: 23,
  },
];

const user1 = {
  id: 1,
  name: "Aditya Balbudhe",
  username: "adityabalbudhe",
  email: "adityabalbudhe0@gmail.com",
  phone: "9067452349",
  website: "Myportfolio",
  password: "pass@334567",
  ages: 21,
};

// const addLast = (us, u1) => {
//   const add = new Promise((resolve, reject) => {
//     if (us && u1) resolve([...us, u1]);
//     else reject("user not found");
//   });
//   add
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// };
// addLast(users, user1);

// Q2. Write a promise function to add a new record at the begining of array users using spread operator,
// functions : addFirst(users,temp)

// const addlist = () => {
//   new Promise((resolve, reject) => {
//     if (us && us1) resolve([us1, ...us]);
//     reject("not found");
//   })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log(OverconstrainedError);
//     });
// };
// addlist(users, user1);

// Q3. Write a promise function to display all records only 3 fields id,name,username.
// functions : display(users)
// HINT : map

//     const display =(users)=>{
//        const add = new Promise((resolve,reject)=>{
//           const newusers  = users.map((user)=>{
//             return `${user.username},${user.id},${user.name}`
//           })
//           if (newusers) {
//                 resolve(newusers)
//           }else
//           reject("not found")
//        })
//        add.then((data) => {
//         console.log(data);

//        }).catch((err) => {
//         console.log(err);
//        });
//     }
// display(users);

// Q4. Write a promise function which will display all records with name ==='demon'
// function Name ---> findNameEquals(users)
// If there are no records matching criteria then reject with message "NO RECORDS FOUND"
// If there are records matching criteria then resolve with the data in form of array
// HINT : Use filter.

// const findNameEquals = (users) => {
//   const add = new Promise((resolve, reject) => {
//     const newUsers = users.filter((user) => {
//       if (user.name === "Dean John") {
//         return true;
//       }
//     });
//     if (newUsers) {
//       resolve(newUsers);
//     } else reject("NO RECORDS FOUND");
//   });
//   add
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// };
// findNameEquals(users);

// Q6. Write a promise function which will display sum of all ages.
// function Name ---> findSumAges(users)
// If there are no records matching criteria then reject with message "NO RECORDS FOUND"
// If there are records matching criteria then resolve with the data in form of array.
// HINT : Use reduce functions.

// const findSumAges = (users) => {
//   const add = new Promise((resolve, reject) => {
//     const newUsers = users.reduce((user1, user2) => user1 + user2.ages, 0);
//     if (newUsers) {
//       resolve(newUsers);
//     } else reject("NO RECORDS FOUND");
//   });
//   add
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// };
// findSumAges(users);

// Q6. Write a promise function which will display sum of all ages.
// function Name ---> findSumAges(users)
// If there are no records matching criteria then reject with message "NO RECORDS FOUND"
// If there are records matching criteria then resolve with the data in form of array.
// HINT : Use reduce functions.

// const Sorting = (users) => {
//   const add = new Promise((resolve, reject) => {
//     const newUsers = users.sort((c1, c2) => {
//       if (c1.name > c2.name) {
//         return true;
//       } else {
//         return "Not Sorted";
//       }
//     });
//     if (newUsers) {
//       resolve(newUsers);
//     } else reject("NO RECORDS FOUND");
//   });
//   add
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// };
// Sorting(users);

// Q7. Write a promise function which will display all the records with only name & ages.
// function Name ---> findAll(users)
// If there are no records matching criteria then reject with message "NO RECORDS FOUND"
// If there are records matching criteria then resolve with  the data in form of array.
// HINT : Use map.

// const findAll = (users) => {
//   const add = new Promise((resolve, reject) => {
//     const newuser = users.map((user) => {
//       return `${user.name},${user.ages}`
//     });

//     if (newuser) {
//       resolve(newuser);
//     }
//     reject("not found");
//   });
//   add
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// findAll(users);


// Q8. Write a function to display sum of all ages of records having name starting with 'B'
// Use nesting promises function which first call Q1 function its output will      be given to Q3 and display total of ages.
// function : findNameAges(users,'B')
// HINT : nesting of promises.

// const StartwithB = (users) => {
//   const add = new Promise((resolve, reject) => {
//     const newuser = users.filter((user) => {
//       return user.name.charAt(0) === "B";
//     });

//     if (newuser) {
//       resolve(newuser);
//     }
//     reject("not found");
//   });
//   add
//     .then((data) => {
//       return data.reduce((user1, user2) => user1 + user2.ages, 0); // why 0 ?
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// StartwithB(users);

// Q1. Write a promise function which will display all the name with age > 26
// function Name ---> findAge(family)
// If there are no records matching criteria then reject with message "NO RECORDS FOUND"
// If there are records matching criteria then resolve with the data in form of array
// HINT : Use filter.

// const family = [
//   { name: "Jack", age: 26 },
//   { name: "Jill", age: 29 },
//   { name: "James", age: 5 },
//   { name: "Jenny", age: 2 }
//   ];

//   const findAge = (family) => {
//       const add = new Promise((resolve, reject) => {
//           const newUsers = family.filter((user) => {
//               if(user.age > 26){
//                   return user.name;
//               }
//           })
//           if (newUsers){
//               resolve(newUsers);
//           }
//           else
//               reject("NO RECORDS FOUND");
//       })
//       add.then((data) => {
//           console.log(data)
//       }).catch((e) => {
//           console.log(e)
//       })
//   }
//   findAge(family)