/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */
const Headers = document.querySelectorAll(".landing__container"); // Select all Heading Sections 
const navBar = document.querySelector("#navbar__list"); // Select NavBar section
const fragment = document.createDocumentFragment(); // Create Fragment Odject

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */
// to check if the element in Viewport
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect(); // get coordinate of element relative to the view

    return (
        (rect.top + rect.bottom) >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) //&& /* or $(window).height() */
    );
}
// to set navBar element to active if section in the viewPort
function navBarElementInViewport(el) {
    const content = el.parentElement.dataset.nav;
    const navBarElement = navBar.childNodes;
    for (let i = 1; i < navBarElement.length; i++) {
        if (navBarElement[i].textContent == content) {
            navBarElement[i].classList.add('active');
        } else {
            navBarElement[i].classList.remove('active');
        }
    }
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
for (const Head of Headers) {
    const el = document.createElement("li");
    const aEl = document.createElement("a");
    el.addEventListener('click', function () {
        Head.scrollIntoView({
            'behavior': 'smooth'
        })
    });
    el.appendChild(aEl);
    aEl.textContent = Head.parentElement.dataset.nav;
    fragment.appendChild(el);
}
navBar.appendChild(fragment);


// Add class 'active' to section when near top of viewport
window.addEventListener('scroll', function () {
    for (const Head of Headers) {
        //console.log(Head);
        if (isElementInViewport(Head)) {
            Head.parentElement.classList.add("your-active-class");
            navBarElementInViewport(Head);
        } else {
            Head.parentElement.classList.remove("your-active-class");
        }
    }

});

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click

// Set sections as active