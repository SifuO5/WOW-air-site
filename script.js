var zoekknop = document.querySelector('#zoeken');
var header = document.querySelector('body > header');


zoekknop.addEventListener('click',function(){
        header.classList.toggle('show-form');
    });