//  Change <h1> text
document.getElementById("title").innerText = "Updated Heading";

// Change background color of a <div>
document.getElementById("box").style.backgroundColor = "yellow";

// JS 81: Add a new paragraph dynamically
let newPara = document.createElement("p");
newPara.innerText = "Dynamically added paragraph.";
document.body.appendChild(newPara);

// Remove an element
document.getElementById("box").remove();

// JS 83: Change text color of all <p>
document.querySelectorAll(".text").forEach(p => p.style.color = "red");

//  Modify src attribute of <img>
document.getElementById("image").src = "./asset/image/sample.jpg";

//  Button changes text when clicked
document.getElementById("changeTextButton").addEventListener("click", function() {
    this.innerText = "Text Changed!";
});

//  Change input field color on typing
document.getElementById("inputField").addEventListener("input", function() {
    this.style.backgroundColor = "lightgray";
});

//  Add new item to <ul>
let newItem = document.createElement("li");
newItem.innerText = "New Item";
document.getElementById("list").appendChild(newItem);

//  Hide an element when button is clicked
document.getElementById("hideButton").addEventListener("click", function() {
    document.getElementById("image").classList.add("hidden");
});

//  Mouseover changes button color
document.getElementById("hoverButton").addEventListener("mouseover", function() {
    this.style.backgroundColor = "green";
});
document.getElementById("hoverButton").addEventListener("mouseout", function() {
    this.style.backgroundColor = "";
});

//  Remove the last <li> from a list
let list = document.getElementById("list");
list.removeChild(list.lastElementChild);

// Toggle dark mode theme
document.getElementById("toggleButton").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});