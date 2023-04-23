let name = document.getElementById("name").value;
let year = document.getElementById("year").value;

document.getElementById("button").addEventListener("click", callbutton)

function callbutton() {
name = document.getElementById("name").value;
year = document.getElementById("year").value;

let h3 = document.createElement("h3");
let Name = document.createElement("h3");
Name.innerText = "Name: " + name;

let Year = document.createElement("h3");
Year.innerText = "Year: " + year;

h3.append(Name);
h3.append(Year);

document.querySelector("#url").textContent += "?" + "name=" + name + "&year=" + year;
document.querySelector("#url").append(h3);
}