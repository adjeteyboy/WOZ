var openButton = document.querySelector('.site-header__menu-trigger');
var menu = document.querySelector('.site-header__menu');

function showMenu(el) {
  var targettedList = el.target.classList;
  
  // change open button to closed button
  if(targettedList.contains('fa-bars')) {
    menu.classList.add('site-header__menu--active');
    targettedList.remove('fa-bars');
    targettedList.add('fa-window-close');
    return;
  };
  // if(targettedList.contains())
  if(targettedList.contains('fa-window-close')) {
    menu.classList.remove('site-header__menu--active');
    targettedList.remove('fa-window-close');
    targettedList.add('fa-bars');
  }
};

openButton.addEventListener('click', showMenu);