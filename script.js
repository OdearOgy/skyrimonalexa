// defining variables
const navBtn = document.getElementById('hamburger');
const navBar = document.getElementById('nav-bar');

// function for nav bar to hide and show
navBtn.addEventListener('click', event => {
      if (event.target.className === 'fas fa-bars') {
        event.target.className = 'fas fa-times';
        navBar.className = 'nav-display';
      }
      else {
        event.target.className = 'fas fa-bars';
        navBar.className += ' d--none';
      }
});


// Scroll to a certain element
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
