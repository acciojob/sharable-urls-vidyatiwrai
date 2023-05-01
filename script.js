let name = document.getElementById("name").value;
let year = document.getElementById("year").value;

let button = document.getElementById("button");

button.addEventListener("click",(e)=>btnfun(e));

function btnfun(e){
e.preventDefault();
name = document.getElementById("name").value;
year = document.getElementById("year").value;
let queryString = 'https://localhost:8080/';
let h3 = document.getElementById("url");
if(name!=""){
queryString += "?name="+name;
if(year!=""){
queryString += "&year="+year;
}
}else if(year !=""){
queryString += "?year="+year;
}

h3.innerText = queryString;

// document.querySelector("#url").append(h3);
}