function display() {
    console.log ("hello world");
}
var name = "sharon";
var course = "python";

function show() {
document.getElementById("demo").innerHTML = name + " " + course;

}
function cube(){
    var number = prompt ("enter number")
    document.getElementById("demo").innerHTML = number * number * number;
}
function change(){
    demo.innerHTML = "Padh likh rahe hai";
    demo.style.color ="red"
    demo.style.backgroundColor = "yellow"
}