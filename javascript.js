var hamburger = document.querySelector('.hamburger');
hamburger.addEventListener("click",function(){
    this.classList.toggle('close')
});

//this code will reveal the nav bar
var myhtmls = document.querySelector('html');
var hamburger = document.querySelector('.hamburger');
var nav_reveal = document.querySelector('nav');
var mureveal = document.querySelector('.myclass');
var menu = document.querySelector('.menu');
hamburger.addEventListener('click',function(){
    nav_reveal.classList.toggle('reveal');
    menu.classList.toggle('myAllItems')

});
