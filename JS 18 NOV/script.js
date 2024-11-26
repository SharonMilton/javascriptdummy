// object literal
const person = {
    name: "john",
    age: 30,
    city: "bhopal"
};
//to know the data type of person
console.log(typeof person);
console.log(person.name)
console.log(person.age)
console.log(person.city)

//data type array
const number = [10,20,30,89];
console.log(number);
console.log(number[0])
console.log(number[1])
console.log(number[2])
console.log(number[3])

// function
// function is a way to group code together, you can run it anytime anywhere

// function declaration
function sayhello(){
console.log("hello world");
alert("hello")
document.write("hello")
}

// function calling
sayhello();

// parameters
// parameters are when you are declaring a function 

function addition(num1,num2){
    return num1+num2;
}

//arguments
// arguments while calling the function
console.log(addition(100,500));
document.getElementById("demo").innerHTML = addition(100,200)

let numbers = 67;

function cube(){
    return numbers * numbers * numbers;
}
console.log(cube())

//function expression

const multiply = function (x,y){
    return x*y
};

console.log(multiply(5,8))

// arrow function 
const divide = (a,b)=>{
    return a/b;
}

console.log(divide(4,2));

