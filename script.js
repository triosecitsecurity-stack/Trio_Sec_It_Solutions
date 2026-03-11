/* ============================================
   JAVASCRIPT FILE - ZANS Cybersecurity Website
   ============================================
   This file contains all interactive functionality
   for the cybersecurity consulting website.
   ============================================ */

/* Lines 1-5: Hero Slider Variables and Setup */
// Line 1: Comment explaining the hero slider functionality
// Line 2: Selects all images inside .hero-visual container and converts NodeList to Array
const slides = Array.from(document.querySelectorAll('.hero-visual img'));

// Line 3: Selects all dot buttons inside .dots container and converts NodeList to Array
const dots = Array.from(document.querySelectorAll('.dots button'));

// Line 4: Current slide index (starts at 0, which is the first slide)
let index = 0;

// Line 5: Timer variable to store the interval ID for auto-sliding
let timer;

/* Lines 7-11: Activate Function - Shows specific slide and updates dots */
// Line 7: Function that activates a specific slide by index
const activate = (i) => {
  // Line 8: Loops through all slides and toggles 'active' class - only the slide at index i gets active class
  slides.forEach((img, idx) => img.classList.toggle('active', idx === i));
  
  // Line 9: Loops through all dots and toggles 'active' class - only the dot at index i gets active class
  dots.forEach((dot, idx) => dot.classList.toggle('active', idx === i));
  
  // Line 10: Updates the current index to the activated slide
  index = i;
};

/* Lines 13-16: Next Function - Advances to next slide */
// Line 13: Function that moves to the next slide
const next = () => {
  // Line 14: Calculates next index using modulo operator - wraps around to 0 after last slide
  const i = (index + 1) % slides.length;
  
  // Line 15: Activates the calculated next slide
  activate(i);
};

/* Lines 18-21: Start Function - Begins auto-sliding */
// Line 18: Function that starts the automatic slide rotation
const start = () => {
  // Line 19: Clears any existing timer to prevent multiple intervals running
  clearInterval(timer);
  
  // Line 20: Sets up new interval that calls next() function every 4500ms (4.5 seconds)
  timer = setInterval(next, 4500);
};

/* Lines 23-28: Dot Click Handlers - Manual slide selection */
// Line 23: Loops through each dot button and adds click event listener
dots.forEach((dot, i) => {
  // Line 24: Adds click event listener to each dot
  dot.addEventListener('click', () => {
    // Line 25: When clicked, activates the slide corresponding to this dot's index
    activate(i);
    
    // Line 26: Restarts the auto-slide timer after manual selection
    start();
  });
});

// Line 30: Starts the automatic slide rotation when page loads
start();

/* Lines 32-56: Mobile Navigation Toggle Functionality */
// Line 32: Comment explaining mobile navigation functionality
// Line 33: Selects the hamburger menu button element
const burger = document.querySelector('.burger');

// Line 34: Selects the navigation menu element
const menu = document.querySelector('.menu');

// Line 35: Selects all navigation links inside menu and converts NodeList to Array
const navLinks = Array.from(menu.querySelectorAll('a'));

/* Lines 37-40: Close Menu Function */
// Line 37: Function that closes the mobile menu
const closeMenu = () => {
  // Line 38: Removes 'active' class from burger button (changes X back to hamburger icon)
  burger.classList.remove('active');
  
  // Line 39: Removes 'open' class from menu (hides the mobile menu)
  menu.classList.remove('open');
};

/* Lines 42-45: Burger Click Handler - Toggle menu */
// Line 42: Adds click event listener to hamburger button
burger.addEventListener('click', () => {
  // Line 43: Toggles 'active' class on burger (switches between hamburger and X icon)
  burger.classList.toggle('active');
  
  // Line 44: Toggles 'open' class on menu (shows/hides mobile menu)
  menu.classList.toggle('open');
});

/* Lines 47-51: Navigation Link Click Handlers - Close menu on link click */
// Line 47: Loops through each navigation link
navLinks.forEach((link) => {
  // Line 48: Adds click event listener to each link
  link.addEventListener('click', () => {
    // Line 49: Closes the mobile menu when a link is clicked (better UX)
    closeMenu();
  });
});

/* Lines 53-56: Outside Click Handler - Close menu when clicking outside */
// Line 53: Adds click event listener to entire document
document.addEventListener('click', (e) => {
  // Line 54: Checks if click was inside menu or burger button
  const isClickInside = menu.contains(e.target) || burger.contains(e.target);
  
  // Line 55: If click was outside menu and burger, close the menu
  if (!isClickInside) closeMenu();
});

/* ------------------------------------------------------------------
   Section Highlighting Utility
   ------------------------------------------------------------------
   A lightweight command that adds a temporary "highlight" class to any
   element on the page. Used for jumping attention to sections such as
   the Case Highlights/testimonials later on. Example usage:

       highlightSection('testimonials');

   The class is automatically removed after two seconds.
*/
function highlightSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.add('highlight');
  setTimeout(() => el.classList.remove('highlight'), 2000);
}

