// class
// class User {
//     constructor(firstname, lastname, email, password) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.email = email;
//         this.password = password;
//     }
//     getFullName() {
//         const fullName = this.firstname + " " + this.lastname;
//         return fullName;
//     } password
// }
// let person1 = new User("jyoti", "singh", "hello@email.com", "1223452");
// let person2 = new User("aishwarya", "gupta", "world@email.com", "2837934");
// console.log(person1.getFullName());
// console.log(person2.getFullName());

// getter and setter------>
// class User {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.score = 0;
//     }
//     getFullName() {
//         const fullName = this.firstname + " " + this.lastname;
//         return fullName;
//     }
//     get getFirstName() {
//         return this.firstname;
//     }
//     get getLastName() {
//         return this.lastname;
//     }
//     set setScore(score) {
//         this.score = score;
//     }
//     get getScore() {
//         return this.score;
//     }
// }
// let user1 = new User("javascript", "web");
// console.log(user1.getFullName())
// console.log(user1.getFirstName)
// console.log(user1.getLastName)
// user1.setScore = 5;
// console.log(user1.getScore);


// inheritance Assignment----->
// class UserOne {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.score = 0;
//     }
//     getFullName() {
//         const fullName = this.firstname + " " + this.lastname;
//         return fullName;
//     }
// }
// class UserTwo extends UserOne {
//     getEmailId() {
//         return "hello"
//     }
// }
// let user1 = new UserOne("jyoti", "singh");
// let user2 = new UserTwo("hello", "world");
// console.log(user2.getFullName());


