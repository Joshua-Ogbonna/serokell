const openMenu = document.querySelector(".open__menu");
const closeMenu = document.querySelector(".close__menu");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".link");

let form = document.getElementById("form");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", closeMenuArea);
links.forEach((link) => {
    link.addEventListener("click", closeMenuArea);
});

function show() {
    menu.style.display = "flex";
    menu.style.top = "0";
}

function closeMenuArea() {
    menu.style.top = "-100%";
}

// Form function
const submitForm = (e) => {
    e.preventDefault();
    // Form elements
    let userName = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");

    // Turn dom input elements to object
    const userDetails = {
        name: userName.value,
        email: email.value,
        message: message.value,
    };
    // console.log(userDetails)
    console.log(userDetails);
    userName.value = ''
    email.value = ''
    message.value = ''
};
form.addEventListener("submit", submitForm);