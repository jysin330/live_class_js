// eventLoop---->

// const userOne = () => {
//     console.log("hello i am user one")
// }
// const usertwo = () => {
//     setTimeout(
//         () => {
//             console.log("hello i am user two")
//         }, 2000
//     );
// }
// const userthree = () => {
//     setTimeout(
//         () => {
//             console.log("hello i am user three")
//         }, 3000
//     );
//     console.log("i am user three")
// }
// userOne();
// usertwo();
// userthree();

// promises(callback, promise constructor(then catch), async await)----->
// -pending -resolve or reject
// -fullfilled (resolve)
// -reject()

// const MakePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const arr = ["userOne", "userTwo", "userThree"];
//         if (arr.length > 5) {
//             resolve("user found");
//         } else {
//             reject("not found");
//         }
//     }, 2500);
// })
// MakePromise.then().catch()
// MakePromise.then((result) => {
//     console.log(result);
// }).catch((result) => {
//     console.log(result);
// });
// console.log(MakePromise.then((result) => {
//     console.log(result);
// }).catch((result) => {
//     console.log(result);
// }))


// Async and Await---->
