// let hero = ["thor", "spiderman"];
// let dchero = ["batman", "black adam", "superman"];
// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",
//     getSpiderPower: function () {
//         console.log(`spidy power is ${this.spiderman}`)
//     }
// }

// Object.prototype.jyoti =function (){
//     console.log(`jyoti is present in all objects `)
// }
// hero.jyoti();
// heroPower.jyoti();
// Array.prototype.heyArray = function (){
//     console.log(`total elements are ${this.length}`);
// }

// hero.heyArray();
// dchero.heyArray();

// inheritance---->
// SAAS - software as a service

// const User = {
//     name: "top name",
//     email: "example@gmai.com"
// }
// const Teacher = {
//     makevideo: true
// }
// const TeachingSupport = {
//     isAvailable: false
// }
// const TSAssistant = {
//     makeAssignment: "js assignment",
//     fullTime: true,
//     __proto__: TeachingSupport
// }
// Teacher.__proto__ = User;
// Teacher.prototype= User;
// Object.setPrototypeOf(Teacher, User);
// Object.setPrototypeOf(TeachingSupport, Teacher);



// challenge-->

String.prototype.trueLength = function () {
    console.log(`${this.trim().length}`)
}
"jyoti  ".trueLength();