function addition() {
 let num1 = parseInt(document.getElementById("input1").value);
 let num2 = parseInt(document.getElementById("input2").value);
 var result = num1 + num2;
 document.getElementById("demo").innerHTML = result;
 
}
function multiply() {
  let num1 = parseInt(document.getElementById("input1").value);
  let num2 = parseInt(document.getElementById("input2").value);
  var result = num1 * num2;
  document.getElementById("demo").innerHTML = result;
}
function substraction() {
  let num1 = parseInt(document.getElementById("input1").value);
  let num2 = parseInt(document.getElementById("input2").value);
  var result = num1 - num2;
  document.getElementById("demo").innerHTML = result;
}
function divide() {
  let num1 = parseInt(document.getElementById("input1").value);
  let num2 = parseInt(document.getElementById("input2").value);
  var result = num1 / num2;
  document.getElementById("demo").innerHTML = result;
}
function display(){
    var myinput = (document.getElementById("myinput").value);
    document.getElementById("demo").innerHTML= myinput;
}