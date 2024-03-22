const menuIcon = document.querySelector('#menu-icon');

const menuContainer = document.querySelector('#top-nav-container');
const menuUl = document.querySelector('#nav-ul');
const userActionsUl = document.querySelector('#user-actions');

const login = document.querySelector('#login');
const register = document.querySelector('#register');

// move ul#user-actions under main ul - irrelevant for accessibility
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

// for Mobile - Toggle open menu
const closeMainMenu = () => {
  menuContainer.style.right='-100%';
  menuUl.style.opacity='0';
  menuIcon.ariaExpanded = "false";
  menuIcon.focus();
}

menuIcon.addEventListener('click', ()=>{
  if(menuIcon.ariaExpanded == 'false'){
    menuContainer.style.right='0%';
    menuUl.style.opacity='1';
    menuIcon.ariaExpanded = "true";
  } else {
    closeMainMenu();
  }
  
});

const dropdownLinks = document.querySelectorAll('.dropdown');

const toggleSubMenu = (elem) => {
  if(elem.classList.contains('open')){
    closeSubMenu(elem);
    
  } else {
    elem.classList.add('open');
    elem.ariaExpanded = "true";
    elem.nextElementSibling.ariaHidden ='false'; // show sub menu Ul container
    // show sub menu links
    const subMennu = elem.nextElementSibling.querySelectorAll('a');
    subMennu.forEach((link) => {
      link.ariaHidden ='false';
      link.tabIndex = '0'
    })
    elem.nextElementSibling.querySelector('a').focus(); // focus on the first linkfrom sub menu
  }
}

const closeSubMenu = (elem) => {
  elem.classList.remove('open');
  elem.ariaExpanded = "false";
  elem.nextElementSibling.ariaHidden = 'true'; // hide sub menu Ul container
  // hide sub menu links
  const subMennu = elem.nextElementSibling.querySelectorAll('a');
  subMennu.forEach((link) => {
    link.ariaHidden ='true';
    link.tabIndex = '-1'
  })
}

// Close sublinks if clicked elsewere
document.addEventListener("click", (event) => {

  dropdownLinks.forEach((elem)=>{
    if (elem.contains(event.target)) {
      toggleSubMenu(elem);
    } else {
      closeSubMenu(elem);
    }
  })
});

// Close sublinks if ESC is pressed
document.addEventListener('keyup', function(e) {
  // console.log(e.code);
  if (e.key == 'Escape') {
    const openLink = document.querySelector('.open');
    if(openLink){
      closeSubMenu(openLink);
      openLink.focus();
    } else if(menuIcon.ariaExpanded == 'true'){
      closeMainMenu();
    }
  }
});