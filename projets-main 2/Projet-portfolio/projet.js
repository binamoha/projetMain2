console.log("ok");
const imageClick = document.querySelector(".navbar-toggler")
const navbarToggler = document.querySelector(".navbar-nav")

imageClick.addEventListener("click", togleNav)

function togleNav(){
    navbarToggler.classList.toggle("active")
}