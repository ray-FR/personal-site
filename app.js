const button = document.getElementById('hamburger-menu');
const title = document.getElementsByClassName('title');
const text = document.getElementsByClassName('text');
const language = document.getElementById('language');

const menuItems = document.getElementById('menu-items').children;

button.classList.toggle('active');

button.addEventListener('click', function() {
    document.querySelector('.container').classList.toggle('inactive');
    document.getElementById('menu').classList.toggle('active');
    
    if (button.classList.contains('active')) {
        button.innerText = (language.value == 'en') ? 'Close' : 'Fermer';
        button.classList.toggle('active');
        
    } else {
        button.innerText = (language.value == 'en') ? 'Projects ☰' : 'Projets ☰';
        button.classList.toggle('active');}

});

//menu[0].innerText = "Hi";

language.addEventListener('change', () => {
  console.log(language.value);
  if (language.value == 'fr') { 
    title[0].innerText = 'Bonjour!';
    text[0].innerText = 'Bienvenue sur mon site';

    menuItems[0].innerText = "Application météo";
    menuItems[1].innerText = "Visualisation d'ABR";
    menuItems[2].innerText = "Mini Projets Python";
    
    
  } else{
    title[0].innerText = 'Hello!';
    text[0].innerText = 'Welcome to my site';
    
    menuItems[0].innerText = "Weather App";
    menuItems[1].innerText = "Tree Visualisation";
    menuItems[2].innerText = "Mini Python Projects";

  }
});


