// let userDetail = {
//     firstName: "jyoti",
//     lastName: "singh",
//     role: "admin",
//     loginCount: 10,
// };
// console.log(userDetail.firstName);
// console.log(userDetail["firstName"]);
// console.table(userDetail);
// userDetail.loginCount = 20;

// mini program

// method in object----->
// let userDetailCourse = {
//     firstName: "jyoti",
//     lastName: "singh",
//     role: "student",
//     goggleLogin: true,
//     courseList: [],
//     buyCourse: function (courseName) {
//         this.courseList.push(courseName);
//     },
// }
// console.log(userDetailCourse.firstName);
// console.log(userDetailCourse.lastName);
// userDetailCourse.buyCourse("javascript");
// console.log(userDetailCourse.courseList);

// // keys-->
// console.log(Object.keys(userDetailCourse));
// // values -->
// console.log(Object.values(userDetailCourse));

// // checking keys
// console.log(userDetailCourse.hasOwnProperty("firstName"));



//  for in loop----->
// let userDetail = {
//     firstName: "jyoti",
//     lastName: "singh",
//     role: "admin",
//     loginCount: 10,
// };
// for (let x in userDetail) {
//     // console.log(x);
//     // console.log(userDetail[x]);
//     console.log(`${x} is the key and ${userDetail[x]} is the value`);
// } 


// higher order function---->
// callback function--->
// let isEVen = (ele) => {
//     return ele % 2 == 0;
// }
// let value = [2, 4, 6, 8, 10].every(isEVen);
// console.log(value);

// mini program--->

// let sqr = (ele) => {
//     return ele ** 2;
// }
// function cube(n) {
//     let result = sqr(n) * n;
//     return result;
// }
// console.log(cube(5));

// the function passed as a parameter inside a function is called callback

// setTimeout---->
// function course() {
//     console.log("welcome to full stack javascript web developer bootcamp")
// }
// setTimeout(course, 3000);
// OR
// setTimeout(() => {
//     console.log("welcome to full stack javascript web developer bootcamp");
// }, 3000);

// set interval------>
// setInterval(() => {
//     console.log("hello")
// }, 3000);

// for each-->>>>
// let arr = ["hey", "hello", "hai", "hola"];
// arr.forEach((val) => {
//     console.log(val);

// })


// problem: we have to create an array of bobject: each object should havename , price , launch date and method to buy

// let obj = [
//     {
//         productName: "macbook",
//         productPrice: 140000,
//         productLaunchDate: 'dec 2022',
//         productBuy: () => {
//             console.log(`you have purchased ${this.productName}`)
//         }
//     }
// ]


// map----->
// let number = [1, 2, 3, 4, 5, 6, 7];
// let store = number.map((num) => num * num);
// console.log(store);

// let string = ["jyoti", "abhijeet", "roshni", "kiran", "prabhakar", " aishwarya"];
// let store1 = string.map((str) => str.toUpperCase());
// console.log(store1);


// filter----->

// let country = ["india", "japan", "kenya", "ireland", "canada", "germany"];
// let store = country.filter((country) => country.includes("an"));
// let store1 = country.filter((country) => country.length === 5);
// console.log(store);
// console.log(store1);

// reduce---->

let arr = [1, 2, 3, 4, 5, 6, 7];
let sum = arr.reduce((acc, cur) => acc + cur, 0);
console.log(sum);