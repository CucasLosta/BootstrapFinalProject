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

// Set the upper padding of the sections as the navigation bar height


// Function to make projects visible
function makeVisibleOnScroll(element) {
    // Get element y position
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;

    // Function executed when scrolling
    function onScroll() {
        // Get current scroll position
        const scrollPosition = window.scrollY + window.innerHeight/8;

        // Verify if scroll position has reached the element's position
        if (scrollPosition >= elementPosition) {
            element.style.transition = 'opacity 1s ease-in-out, transform 1s ease-in-out';
            element.style.opacity = 1;
            element.style.transform = 'translateY(-30px)';

            window.removeEventListener('scroll', onScroll);
        }
    }

    // Initially hide element
    element.style.opacity = 0;

    // Agregar el event listener para el scroll
    window.addEventListener('scroll', onScroll);
}

let project = document.getElementsByClassName('projectContainer');

for(let i = 0; i < project.length; i++){
    makeVisibleOnScroll(project[i]);
}

// Event for the "Zorpulate button"

btnZorpulate = document.getElementById("btnZorpulate");
btnZorpulate.addEventListener('click',()=>{alert("Para zorpular debe tener su plenixo activado.")})