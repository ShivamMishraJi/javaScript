// class Workshop {
//     constructor(teacher){
//         this.teacher = teacher;
//     }
//     ask(question){
//         console.log(this.teacher,question)
//     }
// }
// const deepJS = new Workshop("Shivam");
// const reactJS = new Workshop("Rajan");


// deepJS.ask("Shivam's deepJS question is good");
// reactJS.ask("Rajan's reactJS question is also very good");

///////////Add a method to Object prototype

//writing an object constructor function
function Person(firsName,lastName,age,jobTitle,salary){
    this.firsName = firsName;
    this.lastName = lastName;
    this.age = age;
    this.jobTitle = jobTitle;
    this.salary = salary;

}
Person.prototype.fullName = function(){
    return this.firsName+" "+this.lastName;
}

const shivam = new Person("shivam","mishra",25,'software developer','2 lacs');
const rajan = new Person("rajan","mishra",26,'Sr software developer','2.5 lacs');

// rajan.fullName = () =>{
//     return this.firstName;
// }
console.log(shivam);
console.log(rajan);
// console.log(shivam.fullName());
// console.log(rajan.fullName());