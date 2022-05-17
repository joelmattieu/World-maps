const btnOpen = document.getElementById("navToggleOpen");
const btnClose = document.getElementById("navToggleClose");
const nav = document.getElementById("nav");
const redir1 = document.getElementById("redirection1");
const redir2 = document.getElementById("redirection2");
const redir3 = document.getElementById("redirection3");
const redir4 = document.getElementById("redirection4");

let toggleMenu = ()=>{
    nav.classList.toggle("menu_opened")
}

btnOpen.addEventListener("click", toggleMenu);
btnClose.addEventListener("click", toggleMenu);
redir1.addEventListener("click", toggleMenu);
redir2.addEventListener("click", toggleMenu);
redir3.addEventListener("click", toggleMenu);
redir4.addEventListener("click", toggleMenu);