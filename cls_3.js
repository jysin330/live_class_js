// for(let i=1;i<5;i++){
// console.log(i);
// }

// for(let i=1;i<5;i++){
// console.log(`${i}`);
// }

// for(let i=1;i<5;i++){
//     console.log(`${i}*${i}= ${i*i}`);
//     }

// let con=["india","sweden","norway ","iceland"];
// let newcon =[];
// for(let i=0; i<con.length; i++){
//     newcon.push(con[i].toUpperCase());
// }
// console.log(newcon);

// TODO : square an array------->

// let num=[2,3,4,5,6,7,8];
// let sqr=[];
// for(let i=0; i<num.length; i++){
//     sqr.push(num[i]*num[i]);
// }
// console.log(sqr);

// let i=0;
// while(i<=5){
//     console.log(i);
//     i++;
// }

// let i=0;
// while(i%2==0){
//     console.log(i);
//     i++;
// }

// let i=0;
// do{
//     console.log(i);
//     i++;
// }while(i<=5);

// for of loop----->
// let num=[1,2,3,4,5];
// for(let number of num){
//     console.log(number);
// }

// let con=["india","sweden","norway ","iceland"];
// for(let number of con){
//     console.log(number[0]);
// }
// let con=["india","sweden","norway ","iceland"];

// for(let number of con){
//     number= number.toUpperCase();
//     console.log(number[0]);
// }

// function--------------->

// function with parameters----->
//  function add(x,y){
//     console.log(x,y);
//  }
//  add(2,3)

// ;

// function array----------->
// function sumOfArray(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     return sum;
// }
// let num = [1, 2, 3, 4, 5, 6, 7, 8];
// let sum = sumOfArray(num);
// console.log(sum);


// arrow function---------->

const sumOfAll = (...args) => {
    let sum = 0;
    for (let element of args) {
        sum = sum + element;
    }
    return sum;
};

let sum = sumOfAll(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(sum);