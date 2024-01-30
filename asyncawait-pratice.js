// data = [
//   {
//     name: "Butters",
//     age: 3,
//     type: "dog",
//   },
//   {
//     name: "Lizzy",
//     age: 6,
//     type: "dog",
//   },
//   {
//     name: "Red",
//     age: 1,
//     type: "cat",
//   },
//   {
//     name: "Joey",
//     age: 3,
//     type: "dog",
//   },
//   {
//     name: "Joey",
//     age: 7,
//     type: "dog",
//   },
];
//Q1. Write a promise function to display all types having dog.
// funtion : findDogs(data)
// Hint : Filter

// const finddog = (data) => {
//   setTimeout(() => {
//     const add = new Promise((resolve, reject) => {
//       const newdog = data.filter((dog) => {
//         return dog.type === "dog";
//       });
//       if (newdog) {
//         resolve(newdog);
//       }
//       reject("not found");
//     });
//     add
//       .then((result) => {
//         console.log(result);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, 5000);
// };

// const aynctag = async () => {
//   const found = await finddog(data);
//   console.log(found);
// };
// aynctag();

// Q3. Write a promise function to display sum of all ages.
// function : findAges(data)
// Hint : reduce

// const findAges = (data) => {
//   return new Promise((resolve, reject) => {
//     const newuser = data.reduce((user1, user2) => user1 + user2.age, 0);
//     if (newuser) {
//       resolve(newuser);
//     }
//     reject("not allowed");
//   });
// };
// const asynctag = async () => {
//   const found = await findAges(data);
//   console.log(found);
// };
// asynctag();

//Q4. Write a promise function total of ages of records whose type==='dog' and age>3.
// function : findTotal(data)

// const findTotal = (data) => {
//   return new Promise((resolve, reject) => {
//     const newuser = data.filter((user1) => {
//       if (user1.type === 'dog' && user1.age > 3) {
//         let sum = 0;
//         sum += user1.age;
//         return sum;
//       }
//     });
//     if (newuser) {
//       resolve(newuser);
//     }
//     reject("not found");
//   });
// };
// const asynctag = async () => {
//   const found = await findTotal(data);
//   console.log(found);
// };
// asynctag()

