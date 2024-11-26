let mypara = document.getElementById("demo");
console.log(mypara);

function display(){
    mypara.innerHTML = "this is coming from javascript";
}
function styling(){
    mypara.style.color = "red";
    mypara.style.backgroundColor = "yellow";
    mypara.style.border = "5px solid black";
    mypara.style.borderRadius = "10px";
}
var input1 = document.getElementById("myinput");
var myimage = document.getElementById("myimg");


function change(){
input1.value = "indore";
myimage.src = "images.jpg";
}

//don can manupulate 3 things
//inner html, scc(style), 