//create an object in js
 const person = {
    first_name  : "Arif",
    last_name : "Islam",
    Age:20

 };

 console.log(person.first_name, person.last_name ,"his age is" ,person.Age );
 console.log(person);

 // array of objects 
const car = ["Maruti","Audi","Honda"];
console.log(car);

// js will do the math past the concat the statement like this "20" +"=this is sixtten"
let x = 4 + 16 + "=this is suxteen"
console.log(x);

// js will consider the sting concat because the string value is comming first so all the + is considered as concat operator
let y = "this is suxteen" + 4 + 16 ;
console.log(y);

//functions
let a=10;
let b=20;
//let sum = add(a,b);---also work
console.log(add(a,b)); //---- can invoke a function inside the log()
//define func in js
 function add(num1,num2) {
   return num1+num2; 
 }


