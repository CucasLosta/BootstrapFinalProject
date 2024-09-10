// Changing styles of the navigation bar when scrolling
let nav = document.querySelector("nav");

const navScrollChange=()=>{
    let logo = document.getElementsByClassName("logo");
    let navLink = document.getElementsByClassName("rightNavLink");
    
    if(window.scrollY > 200){
        nav.classList.add("scrolledNav");
        logo[0].classList.add("scrolledLogo");

        for(let i = 0; i < navLink.length; i++){
            navLink[i].classList.add("scrolledLink");
        }
    
    }else{
        document.querySelector("nav").classList.remove("scrolledNav");
        logo[0].classList.remove("scrolledLogo");

        for(let i = 0; i < navLink.length; i++){
            navLink[i].classList.remove("scrolledLink");
        }
    }
}

window.addEventListener("scroll", navScrollChange);