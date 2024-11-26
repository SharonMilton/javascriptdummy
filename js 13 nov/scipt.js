//four ways to  display output from js;
console.log("hello world!");
window.alert("hello world!");
document.write("hello world!");
document.getElementById("demo").innerHTML= "hello world!"
//var, let , const
//global variables
var global1 ="john";
let global2 ="dow";
const global3 = "harry";
//var has global scope and let and const have block or function scope

{
    var a=20;
    let b=10;
    const c=8;
    console.log(b);

}
console.log(a);
console.log(c);
