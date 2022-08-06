'use strict'

/*===== add event on element =====*/
const addEventOnElem = function (elem, type, callback) {
    if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback)
        }
    } else {
        elem.addEventListener(type, callback)
    }
}

/*===== navbar toggle =====*/
const navbar = document.querySelector("[data-navbar]"); 
const navToggler = document.querySelector("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () {
    navbar.classList.toggle("active"); 
}

addEventOnElem(navToggler, "click", toggleNavbar)

const closeNavbar = function() {
    navbar.classList.remove("active"); 
}
/*Quando clicar nos links também fecha a toggleNavbar*/
addEventOnElem(navLinks, "click", closeNavbar)

/*===== header active =====*/
const header = document.querySelector("[data-header]"); 

/*QUando scrolar a tela o header ficar ativo*/
window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
        header.classList.add("active")
    } else {
        header.classList.remove("active");
    }
})