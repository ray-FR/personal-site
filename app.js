const button = document.getElementById('hamburger-menu');
const title = document.getElementsByClassName('title');
const text = document.getElementsByClassName('text');
const language = document.getElementById('language');




button.classList.toggle('active');

button.addEventListener('click', function() {
    document.querySelector('.container').classList.toggle('inactive');
    document.getElementById('menu').classList.toggle('active');
    
    if (button.classList.contains('active')) {
        button.innerText = 'Close';
        button.classList.toggle('active');
        
    } else {
        button.innerText = 'Projets ☰';
        button.classList.toggle('active');
}});



  

language.addEventListener('change', () => {
  console.log(language.value);
  if (language.value == 'fr') { 
    Array.from(title).forEach((element) => {
      element.innerText = 'Bonjour!';
    });
    Array.from(text).forEach((element) => {
      element.innerText = 'Bienvenue sur mon site';
    });
    
  } else{
    Array.from(title).forEach((element) => {
      element.innerText = 'Hello!';
    });
    Array.from(text).forEach((element) => {
      element.innerText = 'Welcome to my website';
    });
  }
});