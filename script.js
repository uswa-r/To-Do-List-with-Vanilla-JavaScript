const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");
//edit opts:
let editELement;
let editFlag = false;
let editID = "";
//eventListeners to submit form:
form.addEventListener('submit', addItem);
//funcs:
function addItem(e) {
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();
    console.log(id);
    //adding condition:
    if (value && !editFlag) {
        console.log('add item to the list')
    }
    //2nd condition:
    else if (value &&
        editFlag) {

        console.log('editting')
    }
    //3rd condition:
    else {
        displayAlert("please enter anything in the bar below:", "danger");
    }
}
//display alert:
function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add('alert-${action}');
}
//remove alert:
setTimeout(function() {
    alert.textContent = "";
    alert.classList.remove('alert-${action}');
}, 1000)