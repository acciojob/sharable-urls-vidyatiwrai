
let name = document.getElementById("name").value;
let year = document.getElementById("year").value;
let h3 = document.getElementById("url");

document.getElementById("button").addEventListener("click", callbutton) 


function callbutton() {

	  let h3 = document.createElement("h3");
	let Name = document.createElement("h3");
	Name.innerText = "name= " + name;

	let Year = document.createElement("h3");
	year.innerText = "year= " + year;

	h3.append(Name);
	h3.append(Year);

	document.querySelector("#url").append(h3);
	
}