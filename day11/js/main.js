const button = document.querySelector('nav button');
const nav = document.querySelector('nav');

button.addEventListener('click', function() {
    nav.classList.toggle('open');
    const h1 = document.querySelector('h1');

    if (nav.classList.contains('open')) {
        h1.innerHTML = 'The nav is open';
    } else {
        h1.innerHTML = 'The nav is closed';
    }
   

});

setInterval(function() {
    const h1 = document.querySelector('h1');
    h1.innerHTML = new Date().toLocaleTimeString();
}, 1000);