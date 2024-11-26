//regular function
function display() {
  alert("function called");
}

// you can call regular function before declaration but not fuction axpression AND ARROW FUNCTION


//FUNCTION EXPRESSION
const display1 = function () {
  alert("function expression called");
};

//arrow function
const display2 = () => {
  alert("arrow function called");
};

let button = document.getElementById("btn");
//whenever you pass a function as an argument never use ()
button.addEventListener("click", display);
button.addEventListener("mouseover", function(){
    console.log("hello from mouseover");
});


//query selector
let h1 = document.querySelectorAll("h1");
console.log(h1);
h1[0].innerHTML = "hello from query selector";
h1[0].style.color = "red";
h1[0].style.backgroundColor = "pink";
