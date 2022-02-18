const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const greeting = document.querySelector("#greeting");

function handleLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add("hidden");
    const username = loginInput.value;
    console.log(username);
    localStorage.setItem("username", username);
    paintGreeting();
}

function handleLinkClick(event){
    console.log(event);
    event.preventDefault();

}

function paintGreeting(){
    const username = localStorage.getItem("username");
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove("hidden");
}

const savedUsername = localStorage.getItem("username");

console.log(savedUsername);
if (savedUsername === null){
    //show the form
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", handleLoginSubmit);
}else{
    //show the greeting
    paintGreeting();
}
