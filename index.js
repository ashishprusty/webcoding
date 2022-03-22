document.querySelector("button").addEventListener("click", myfunction)
function myfunction(){
var name = document.querySelector("#text").value;
// console.log(name);
var p = document.createElement("p");
p.innerText = name;
document.querySelector("body").append(p)
}

