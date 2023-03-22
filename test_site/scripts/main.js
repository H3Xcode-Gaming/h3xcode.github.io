const myImage = document.querySelector("img");

myImage.onclick = () => {
	const mySrc = myImage.getAttribute("src");
	if (mySrc === "images/CoffeeTime.gif"){
		myImage.setAttribute("src", "images/Machoke.gif");
	} else {
		myImage.setAttribute("src", "images/CoffeeTime.gif");
	}
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(){
	let myName = prompt("Please enter your name.");

	if (!myName) {
		setUserName();
	} else {
		localStorage.setItem("name", myName);
		myHeading.textContent = 'Coffee is Amazing, Hello ' + myName;
	}
}

if (!localStorage.getItem("name")) {
		setUserName();
} else {
		let storedName = localStorage.getItem("name");
		myHeading.innerHTML = 'Coffee is Amazing, Hello ' + storedName;
}

myButton.onclick = () => {
	setUserName();
}

