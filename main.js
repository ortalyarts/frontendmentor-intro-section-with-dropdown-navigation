const menuIcon = document.querySelector('#menu-icon');
const closeIcon = document.querySelector('#close-icon');
const menuContainer = document.querySelector('#top-nav-container');
const menuUl = document.querySelector('#nav-ul');
const userActionsUl = document.querySelector('#user-actions');

const login = document.querySelector('#login');
const register = document.querySelector('#register');

// move ul#user-actions under main ul
(function() {
  window.onresize = displayWindowSize;
  window.onload = displayWindowSize;

  function displayWindowSize() {
    let myWidth = window.innerWidth;

    if (myWidth >= 960) {
      userActionsUl.appendChild(login);
      userActionsUl.appendChild(register);
      
    } else {
      menuUl.appendChild(login);
      menuUl.appendChild(register);
    }
  };
})();


menuIcon.addEventListener('click', ()=>{
  menuContainer.style.right='0%';
  menuUl.style.opacity='1';
});
closeIcon.addEventListener('click', ()=>{
  menuContainer.style.right='-100%';
  menuUl.style.opacity='0';
});

const dropdownLinks = document.querySelectorAll('.dropdown');

dropdownLinks.forEach((elem)=>{
  elem.addEventListener('click', () =>{
    elem.classList.toggle('open');
  })
})