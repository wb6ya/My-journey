let scrollPos = 300;
const up = document.querySelector('.goUpBtn');

function checkPosition() {
  let windowY = window.scrollY;
  
  if (windowY < scrollPos) {
    // Scrolling UP
    up.classList.remove('is-visible');
    up.classList.add('is-hidden');
  } else {
    // Scrolling DOWN
    up.classList.remove('is-hidden');
    up.classList.add('is-visible');
  }
}

window.addEventListener('scroll', checkPosition);