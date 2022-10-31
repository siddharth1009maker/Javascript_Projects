//Person Constructor
/*the name of the constructor is initialized with a capital
letter*/
function Person(name , age){
    this.name = name ;
    this.age = age ;
    this.arr = [1,2,3,4];
    this.getElementOfArr = function(){
        this.arr.forEach(function (element){
            console.log(`${this.name} ${element}`);
        },this);
    } 
}
/*how to add properties and method inside the
object , never use arrow function for a method inside
JS object because it lets the this variable to point to
the window object and not the current object
*/
const object = {
    name : "Siddharth",
    hello(){
        console.log("heloo");
    }
}

const siddharth = new Person("Siddharth" , 22);

console.log(siddharth.getElementOfArr());

/*Creating a primitive value using JS object
 */

const name1 = "Jeff";

const name2 = new String("Jeff");

console.log(name1 , name2);

console.log(typeof name1 , typeof name2);

/**the only difference between the tow initializer is that
 the first is of type string and the other is of type
 object 
  */

 /**
  * the === operator gives false because the values are same
  * but the type are different one is string and the other
  * one is object but == gives true because it only
  * checks the value
  * therefore, it is recommended to use the normal initialization
  * instead of the object method
  */

 if(name1===name2){
    console.log("Yes");
 }
 else{
    console.log("No");
 }

 //creating function using new keyword

 const fun = new Function("x","y","return x+y");

 console.log(fun("Siddharth","Gupta"));


 /**
  * if we create a function using new keyword then we use 3 parmaetres
  * first one is first parameter , second is second
  * parameter and third is the function body
  */

 const arr = new Array(1,2,3,4);
 console.log(typeof arr);

 //Prototype in JS

 const obj = {
    name : "Siddharth",
    getName(){
        return (this.name);
    }
 }

 console.log(obj);
 console.log(obj.getName());

 function Student(name , section)
 {
    this.name = name ;
    this.section = section;
    this.getClass = function(){
        return this.section;
    };
 }

 console.log(Student.hasOwnProperty("name"));

 Student.prototype.getFullName = function(lastName){
    return `${this.name} ${lastName}`;
 }

 const student1 = new Student("siddharth" , "A");

 console.log(student1.getFullName("Gupta"));

 console.log(Student.hasOwnProperty("getFullName"));

 console.log(student1);

 /**
  * to create a new method using object constructor
  * we use prototype property and with the help
  * of that we add the method
  */

 Student.prototype.teacher = "BAWA";

 console.log(student1.teacher);

 function Person1(firstName , lastName)
 {
    this.firstName = firstName;
    this.lastName = lastName;
 }

 Person1.prototype.greeting = function() {
    return `Hello ${this.firstName} ${this.lastName}`;
 };

 const p1 = new Person1("Siddharth" , "Gupta");

//  console.log(p1.greeting());

function Customer(firstName , lastName , phone , membership){
    Person1.call(this,firstName , lastName);

    this.phone = phone;
    this.membership = membership;
}

//to inherit the person1 protoype methods

Customer.prototype = Object.create(Person1.prototype);

Customer.prototype.constructor = Customer;


const c1 = new Customer("TOM" , "HARDY" , "12345" , "Standard");
console.log(c1);

console.log(c1.greeting());


const personPrototypes = {
    greeting : function(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried : function(newLastName)
    {
        this.lastName = newLastName;
    }
};

// personPrototypes.prototype.bye = function()
// {
//     return `Bye ${this.firstName}`;
// };

console.log(personPrototypes);

const sid = Object.create(personPrototypes); //to add the prototype of other object

console.log(sid);

sid['firstName'] = "Siddharth";

sid["lastName"] = "Gupta";

console.log(sid);

console.log(sid.greeting());
console.log(sid.getsMarried("Singh"));
console.log(sid.greeting());

const ashish = Object.create(sid, {
    firstName : {value : "Ashish "},
    lastName : {value : "Kumar"}
});

console.log(ashish);

console.log(ashish.__proto__.__proto__.greeting());

