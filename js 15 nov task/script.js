var heading = document.getElementById("demo");
var username = prompt("enter name");
heading.innerHTML = username;
var textcolor = prompt ("enter text color");
var bgcolor = prompt ("enter background color");
var fontsize = prompt ("enter font size");
var fontstyle = prompt ("enter font style");
heading.style.color = textcolor;
heading.style.backgroundColor = bgcolor;
heading.style.fontSize = fontsize;
heading.style.fontStyle = fontstyle;

