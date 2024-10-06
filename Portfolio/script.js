let menuBtn = document.querySelector("#menu-btn");
let xMark = document.querySelector("#xmark");
let navLinks = document.querySelector(".nav-links");
let body = document.querySelector("body");
let nav = document.querySelector("nav");
let header = document.querySelector("header");
let heroSection1 = document.querySelector("#about-me")
let heroSection2 = document.querySelector("#portfolio");
let heroSection3 = document.querySelector("#contact-me");
let footer = document.querySelector("footer");
let navLink1 = document.querySelector("#nav-link1");
let navLink2 = document.querySelector("#nav-link2");
let navLink3 = document.querySelector("#nav-link3");
let navLink4 = document.querySelector("#nav-link4");
let helloMenu = document.querySelector(".hello-menu");
let footerPara = document.querySelector("footer p");
let headerPara = document.querySelector("#header-para1");


 menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    menuBtn.style.display = "none";
    xMark.style.display = "inherit";
    
    header.style.display = "none";
    heroSection1.style.display = "none";
    heroSection2.style.display= "none";
    heroSection3.style.display = "none";
    footer.style.display = "none";
    footerPara.style.marginTop = "40px";

    navLink1.addEventListener("click", () => {
        header.style.display = "inherit";
        footer.style.display = "inherit";
        navLinks.style.display = "none";
        helloMenu.addEventListener("click", () => {
        navLinks.style.display = "inherit";
        headerPara.style.paddingTop = "30px";
        })
    })
    navLink2.addEventListener("click", () => {
        heroSection1.style.display = "inherit";
        footer.style.display = "inherit";
        navLinks.style.display = "none";
        helloMenu.addEventListener("click", () => {
            navLinks.style.display = "inherit";
        })
    })

    navLink3.addEventListener("click", () => {
        heroSection2.style.display = "inherit";
        footer.style.display = "inherit";
        navLinks.style.display = "none";
        helloMenu.addEventListener("click", () => {
            navLinks.style.display = "inherit";
        })

    })
    
    navLink4.addEventListener("click", () => {
        heroSection3.style.display = "inherit";
        footer.style.display = "inherit";
        navLinks.style.display = "none";
        helloMenu.addEventListener("click", () => {
            navLinks.style.display = "inherit";
        })
    })
    



    xMark.addEventListener("click", () => {
        navLinks.classList.remove("open")
        menuBtn.style.display = "inherit";
        xMark.style.display = "none";
        header.style.display = "inherit";
        heroSection1.style.display = "inherit";
        heroSection2.style.display = "inherit";
        heroSection3.style.display = "inherit"
        footer.style.display = "inherit";

        })
})

let cvBtn = document.querySelector("#contact-details button");
let cvBtnText = document.querySelector("#contact-details button a");

cvBtn.addEventListener("mouseover", () => {
    cvBtnText.style.color = "black";
})


let skill = document.querySelector("#skills")
let achivements = document.querySelector("#achievements");
let education = document.querySelector("#education");

let skillHeading = document.querySelector("#about-me-tag-skill");
let achivementHeading = document.querySelector("#about-me-tag-achievement");
let educationHeading = document.querySelector("#about-me-tag-education");

skillHeading.addEventListener("click", () => {
    skill.style.display = "inherit";
    achivements.style.display = "none";
    education.style.display = "none";
})
achivementHeading.addEventListener("click", () => {
    achivements.style.display = "inherit";
    skill.style.display = "none";
    education.style.display = "none";
})
educationHeading.addEventListener("click", () => {
    education.style.display = "inherit";
    skill.style.display = "none";
    achivements.style.display = "none";
})

let contactBtn = document.querySelector("#user-contact-form button");

contactBtn.addEventListener("click", () => {

    let checkBtn = document.querySelector("#user-contact-form a");

    contactBtn.style.backgroundColor = "green";
    contactBtn.innerHTML = "Submitted Successfully";
    contactBtn.style.color = "#fff";
    contactBtn.style.width = "200px"
    contactBtn.style.borderColor = "#fff";
    checkBtn.style.display = "inherit";
})


//scroll reveal

ScrollReveal({
     reset: true,
     distance: '80px',
     duration: 2000,
     delay: 200
     });

     ScrollReveal().reveal('.header', { origin: 'top' });
     ScrollReveal().reveal('.profile-img', { origin: 'bottom'});

     //typed javascript

     const typed = new Typed ('.multiple-text', {
        strings: ['Mechanical Engineer', "Frontend Developer"],
        typeSpeed: 100, 
        backSpeed: 100,
        backDelay: 1000,
        loop: true
     });
  