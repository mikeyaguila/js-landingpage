/*===
 * Created by Mikey A. 2021 Udacity project 2
 ============================*/
/*===
  1. Sticky navbar variables
 ============================*/
    let header = document.getElementById('navbar');
/*===
  2. Burger menu variables
 ============================*/
    const navbarMenu = document.querySelector('#navbar .menu');
const menuBtnIcon = document.querySelector('.menu-btn i');

/*===
  3. Typing animation hero section variables
 ============================*/
    const text = ["Aquascaper", "Developer", "Student", "Freelancer"];
    let letter = "";
    let index = 0;
    let count = 0;
    let currentText = "";

/*===
  4. Typing animation about section variables
 ============================*/
    const textSkills = ["experiences", "thoughts", "struggles", "redemption"];
    let letterSkills = "";
    let indexSkills = 0;
    let countSkills = 0;
    let currentTextSkills = "";

/*===
  5. Smooth scrolling variables
 ============================*/
    const links = document.querySelectorAll("#navbar .menu li a");

/*===
  6. Smooth scroll-to-top button variables
 ============================*/
document.addEventListener("scroll", handleScroll);
const scrollToTopBtn = document.querySelector(".scroll-up-btn");

/*===
  7. Set navigational links to active on scroll to section
 ============================*/
let menuSection = document.querySelectorAll('#navbar .menu li');
let mainSection = document.querySelectorAll('body section');


// Functional requirements
// Sticky navbar
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 20);
});

// Burger menu animation
document.querySelectorAll('.menu-btn').forEach(item => {
    item.addEventListener('click', event => {
        navbarMenu.classList.toggle('active');
        menuBtnIcon.classList.toggle('active');

    }, scrollToTop)
});

// Typing animation
(function type() {
    if (count === text.length) {
        count = 0;
    }
    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.typing').textContent = letter;
    document.querySelector('.typing-2').textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 430);
})();

// Typing animation for about section
(function typeSkills() {
    if (countSkills === textSkills.length) {
        countSkills = 0;
    }
    currentTextSkills = textSkills[countSkills];
    letterSkills = currentTextSkills.slice(0, ++indexSkills);

    document.querySelector('.typing-3').textContent = letterSkills;

    if (letterSkills.length === currentTextSkills.length) {
        countSkills++;
        indexSkills = 0;
    }
    setTimeout(typeSkills, 430);
})();

// Smooth scrolling
for (const link of links) {
    link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scrollToTop(offsetTop);
}

// Smooth scrolling-to-top button
function handleScroll() {
    const scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const ratio = 0.1;

    if ((document.documentElement.scrollTop / scrollableHeight) > ratio) {
        //show button
        if (!scrollToTopBtn.classList.contains("show"))
            scrollToTopBtn.classList.add("show")
    } else {
        //hide button
        if (scrollToTopBtn.classList.contains("show"))
            scrollToTopBtn.classList.remove("show")
    }
}

scrollToTopBtn.addEventListener("click", scrollToTop);

// Smooth scroll helper function
function scrollToTop(params) {
    window.scrollTo({
        top: params,
        behavior: "smooth"
    });
}

// for window scrolldown event activation
menuSection.forEach(element => {
    element.onclick = (() => {
        setTimeout(() => {
            menuSection.forEach(j => j.classList.remove('active'))
            element.classList.add('active')
        }, 100)
    })
})

window.onscroll = (() => {
    mainSection.forEach((v, i) => {
        let rect = v.getBoundingClientRect().y
        if (rect < window.innerHeight - 500) {
            menuSection.forEach(v => v.classList.remove('active'))
            menuSection[i].classList.add('active')
        }
    })
})