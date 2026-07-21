
// getElementById - returns single element

const header = document.getElementById("main-header");

    console.log("getElementById:", header);

// getElementsByClassName - returns HTMLCollection (live)

const contents = document.getElementsByClassName("content");

    console.log("getElementsByClassName:", contents);

// getElementsByTagName - returns HTMLCollection (live)

const paragraphs = document.getElementsByTagName("p");

    console.log("getElementsByTagName:", paragraphs);

// querySelector - returns first match

const firstLink = document.querySelector(".nav-link");

    console.log("querySelector:", firstLink);

// querySelectorAll - returns NodeList (static)

const allLinks = document.querySelectorAll(".nav-link");

     console.log("querySelectorAll:", allLinks);

// Practice: Select these elements

// 1. The h1 element

const h1 = document.querySelector("h1")
     
   console.log(h1);


// 2. All elements with class "content"

const contents = document.querySelectorAll(".content")
     
   console.log(contents);


// 3. The form with id "contact-form"

const contactForm = document.querySelector("#contact-form")
     
    console.log(contactForm);

   
// 4. The email input
 
const emailInput = document.querySelector("#email")
     
    console.log(emailInput);


// 5. All list items in the nav

const navitems = document.querySelectorAll(".nav-list li")
     
    console.log(navItems);

// 6. The first .nav-link

const firsNavLink = document.querySelectorAll(".nav-link")
     
    console.log(firsNavLink);

// 7. The last paragraph

const lastParagraph = document.querySelectorAll("footer p")
     
    console.log(lastParagraph);

// DOM Navigation

const nav = document.querySelector("nav");


// Parent

console.log(nav.parentElement);  

// Children

console.log(nav.children);   

console.log(nav.firstElementChild);      

console.log(nav.lastElementChild); 

// Siblings

const article = document.querySelector("article");

console.log(article.nextElementSibling); 
null

console.log(article.previousElementSibling); 

// Descendants

const navLinks = nav.querySelector("a");

   console.log(avLinks);  


 // Modifying Content

 const h1 = document.querySelector("h1");

// Reading text

// DOM Practice
console.log(h1.textContent);  

null

console.log(h1.innerText);  

// DOM Practice

// Modifying text

h1.textContent = "New Title";

// HTML Content

const article = document.querySelector("article");

   console.log(article.innerHTML);


// Modifying HTML (careful with security!)


 <h2>My Updated Article</h2>

article.innerHTML = `

    My Updated Article

    <p>This is my contentnew content.</p>
`;

// Safer: textContent (escapes HTML)

const article = document.querySelector("article");

const userInput = "<script>alert('hack!')</script>";

    article.textContent = userInput; 

// Attributes

const link = document.querySelector(".nav-link");

// Get attribute

console.log(link.getAttribute("herf"));

// Property access

console.log(link.href); 

// Set attribute

link.setAttribute("href", "https://example.com");

link.href = "https://example.com";  

// Check attribute

console.log(link.hasAttribute("target"));

// Remove attribute

link.removeAttribute("target")

// Data attributes

// <element data-id="123" data-category="tech">

const element = document.querySelector("[data-id]");

console.log(element.dataset.id);        

console.log(element.dataset.category);  

element.dataset.newAttr = "value"; 

const nav = document.querySelector("nav");

// Inline styles

nav.style.backgroundColor = "#1f0101";

nav.style.padding = "20px";

nav.style.borderRadius = "5px";

// Multiple styles (use classes instead when possible!)

Object.assign(nav.style,{

    color: "white",

    padding: "20px"
});


//  Adding & Removing Elements

// Create new element

// Create a new paragraph

const newParagraph = document.createElement("p");

// Add text

newParagraph.textContent = "This is a new paragraph!";

// Add classes

newParagraph.className = "content highlight";

// Add to the page

// Creating Element

const article = document.querySelector("article");

article.appendChild(newParagraph);  

// Insert before another element

const firstParagraph = article.querySelector("p");

article.insertBefore(newParagraph, firstParagraph);

// Modern insertion methods

article.prepend(newParagraph);   

// article.append(newParagraph);   

// firstParagraph.before(newParagraph);  

// firstParagraph.after(newParagraph);

// Remove an element

const footer = document.querySelector("footer");

footer.remove();

// Remove child

const form = document.querySelector("form");

const emailInput = form.querySelector("#email");

emailInput.parentElement.removeChild(emailInput);

// Clear all children

const article = document.querySelector("article");

while (article.firstChild) {
    article.removeChild(article.firstChild);
}

const navItem = document.querySelector(".nav-link").parentElement;

const clone = navItem.cloneNode(true);  

clone.querySelector("a").textContent = "New Link";

document.querySelector(".nav-list").appendChild(clone);


// Cloning Elements

const navItem = document.querySelector(".nav-link").parentElement;

const clone = navItem.cloneNode(true); 

clone.querySelector("a").textContent = "New Link";

document.querySelector(".nav-list").appendChild(clone);

// Create a function that adds a new nav item dynamically:

function addNavItem(text, href) {

const li = document.createElement("li");

const link = document.createElement("a");

    link.textContent = "text";

    link.href = href;

    link.className = nav-link;

    link.appendChild(link);

    doucument.querySelector(".nav-link").appendChild(li);

}

    addNavItem("Blog", "/blog");
       
    addNavItem("Portfolio", "/portfolio");


// Lesson 10 Tasks

// Event Listeners

const button = document.createElement("button");

button.textContent = "Click Me";

document.body.appendChild(button);

 // Adding event listeners

button.addEventListener("click", function() {

    console.log("Button clicked!");

});

// Named function (can be removed later)

function handleClick() {

    console.log("Handled!");
}
button.addEventListener("click", handleClick);

button.removeEventListener("click", handleClick);

// Mouse events

button.addEventListener("click", function () {

    console.log("button clicked!");

});


button.addEventListener("dblclick", function () {

    console.log("button dblclick!");

});


button.addEventListener("mouseenter", function () {

    console.log("button mouseenter!");

});


button.addEventListener("mouseleave", function () {

    console.log("button mouseleave!");

});


button.addEventListener("mousemove", function () {

    console.log("button mousemove!");

});

// Keyboard events

const form = document.querySelector("form");


const input = document.querySelector("#name");



input.addEventListener("keydown", function () {

    console.log("input keydown!");

});

input.addEventListener("keyup", function () {

    console.log("input keyup!");

});


input.addEventListener("keypress", function () { 

    console.log("input keypress!");

});

// Form events

const input = document.querySelector("#name");


form.addEventListener("submit", function () {

    console.log("form submit!");

});


input.addEventListener("focus", function () {
    
    console.log("User is typing!");

});


input.addEventListener("blur", function () {

    console.log("input lost focus!");

});


input.addEventListener("input", function () {

    console.log("input value changed!");

});


input.addEventListener("change", function () { 
    
     console.log("input submit!");

});

// Window events

window.addEventListener("load", function () {

    console.log("window load" );


});

window.addEventListener("resize", function () {
    
    console.log("window resize");


});


window.addEventListener("scroll", function () {

     console.log("window scroll");


});

// Build: Click Counter

const  Counter = document.querySelector("#count");


const  increaseButton = document.querySelector("#increase");

const decreaseButton = document.querySelector("#decrease")

    let count = 0;


    increaseButton.addEventListener("click", function () {

    count ++;
   Counter.textContent - count

});

    decreaseButton.addEventListener("click", function () {

    if (count > 0) {
        count --;
    }
    Counter.textContent - count

});

    resetButton.addEventListener("click", function (reset) {

    count = 0;
        count --
    
    Counter.textContent - count

});


// Using Event Properties

const button = document.querySelector("button");


button.addEventListener("click", function(event) {

    console.log("Target:", event.target);

    console.log("Current Target:", event.currentTarget);

    console.log("Type:", event.type);

    console.log("Position:", event.clientX, event.clientY);
    
    event.preventDefault();
    
    event.stopPropagation();
});

// Keyboard events

const form = document.querySelector("form");

const nameInput = document.querySelector("#name");

const emailInput = document.querySelector("#email");


document.addEventListener("keydown", function(event) {

// Ctrl+S

if (event.ctrlKey && event.key === "s") {

    event.preventDefault();

    alert("Saved!");

}

// Escape

if (event.key === "Escape") {

    nameInput.value = "";

    emailInput.value = "";

}

// Ctrl+Enter

if (event.ctrlKey && event.key === "Enter") {


    event.preventDefault();

    form.requestSubmit();

}

});

// Add the JavaScript

document.getElementById("grandparent").addEventListener("click", () => {

    console.log("Grandparent clicked");

});

document.getElementById("parent").addEventListener("click", () => {

    console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {

    console.log("Child clicked");

});


// Understanding Bubbling

document.getElementById("grandparent").addEventListener("click", () => {

    console.log("Grandparent clicked");
});

document.getElementById("parent").addEventListener("click", () => {

    console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {

    console.log("Child clicked");

});
// Event Delegation

function handleClick(event) {

    console.log("Item clicked!")
}

const items = document.querySelectorAll("li");



// BAD

const items = document.querySelectorAll("li");

items.forEach(item => {

    item.addEventListener("click", handleClick);

});

// GOOD: Delegate to parent
 
document.querySelector("ul").addEventListener("click", function (event) {

    if (event.target.matches("li")){
          
        handleClick(event);
    }
});


// Complete Form Validation

const form = document.getElementById("contact-form");

const nameInput = document.getElementById("name");

const emailInput = document.getElementById("email");

    
   // Real-time validation

nameInput.addEventListener("input", function(event) {

    const value = event.target.value;
    
    if (value.length < 2) {

        showError(nameInput, "Name must be at least 2 characters");

    } else {

        clearError(nameInput);

    }
});

emailInput.addEventListener("input", function(event) {

    const value = event.target.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(value)) {

        showError(emailInput, "Please enter a valid email");

    } else {

        clearError(emailInput);
    }
});

// Form submission

form.addEventListener("submit", function(event) {

    event.preventDefault();  
    
    // Get all form data

    const formData = new FormData(form);

    const data = Object.fromEntries(formData);
    
    console.log("Form data:", data);
    
    // Validate all fields

    if (isValid(data)) {

        // Submit via fetch or show success

        showSuccess("Form submitted successfully!");

        form.reset();
    }
});


function showError(input, message) {
    
    input.classList.add("error");

    let error = input.nextElementSibling;

    if (!error || !error.classList.contains("error-message")) {

    error = document.createElement("p");

    error.classList.add("error-message");

    input.after(error);

}

error.textContent = message; 

}

function clearError(input) {

    input.classList.remove("error");
    
    const error = input.nextElementSibling;

    if (error && error.classList.contains("error-message")) {

        error.remove();
        
}

}

