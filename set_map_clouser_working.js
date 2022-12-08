// destructuring and spread
// let scivalue = [12, 3, 4, 5, 6, 7];
// let [a, b, c, d, e, f] = scivalue;
// console.log(a, b, c, d, e, f);


// let fullStack = [
//     ["html", "css", "js", "tailwind"],
//     ["nodejs", "express", "mongodb"]
// ];
// let [frontend, backend] = fullStack;
// console.log(frontend);

// rest operator

// let scivalue = [12, 3, 4, 5, 6, 7];
// let [a, b, ...rest] = scivalue; //rest operator
// console.log(rest);

// //   spread operator

// function sum(x, y) {
//     return x + y;
// }
// let vari = [5, 7];
// console.log(sum(...vari)) // spread operator


// NEW ------>
// let person= new Object();
// person.name="jyoti";
// console.log(person);
// let person = function (firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
// }
// let jyoti = new person("jyoti", "singh");
// console.log(jyoti)

// set and map---->
// set will nly have unique value--->
// let a = [1, 2, 3, 4, 5, 6, 32, 5, 63, 2, 21, 1];
// let num = new Set(a);
// console.log(num);
// for (let i of num) {
//     console.log(i);
// }


//   map----->
// getter and setter
// let value = new Map();
// value.set("hello", "world");
// value.set(10, "hello");
// value.set(true, "bye-bye")
// console.log(value);


// let cont = [
//     ["india", "delhi"],
//     ["gujrat", "surat"],
//     ["raj", "jaipur"]
// ]
// let city = new Map(cont);
// console.log(city);
// console.log(city.get("india"))
// for (let key of city) {
//     console.log(key.keys)
// }

// closure --->
//  when an inner function is accessing variable of the outer function is called closure.
// function outer() {
//     let vari = "jyoti";
//     function inner() {
//         console.log(vari);
//     }
//     inner();

// }
// outer();
function outer() {
    let vari = "jyoti";
    function inner() {
        console.log(vari);
    }
    return inner;

}
let var2 = outer();
var2();
console.log(var2())