const navBtn = document.getElementById('hamburger');
const navBar = document.getElementById('nav-bar');
navBtn.addEventListener('click', event => {
      if (event.target.className === 'fas fa-bars') {
        event.target.className = 'fas fa-times';
        navBar.className = 'nav-display';
      }
      else {
        event.target.className = 'fas fa-bars'
        navBar.className += ' d--none';

      }
});
