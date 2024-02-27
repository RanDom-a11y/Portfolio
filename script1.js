var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
   showSlides(slideIndex += n);
}
function currentSlide(n) {
   showSlides(slideIndex = n);
}
function showSlides(n) {
   var i;
   var slides = document.getElementsByClassName("mySlides");
   var dots = document.getElementsByClassName("dot");
   var vid = document.getElementById("myVid");
   if (n > slides.length) {slideIndex = 1}
   if (n < 1) {slideIndex = slides.length}
   for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
   }
   for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");            
   }
   slides[slideIndex-1].style.display = "block";
   dots[slideIndex-1].className += " active";
   vid.pause();
}
/*----------------toggle icon navbar----------*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};



/*-------------scroll sections active links--------------*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[herf*=' + id + ']').classList.add('active');
      });
    };
  });
  /*-------------------------------sticky navBar-------------------------*/
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

  /*------------remove toogle icon and navbar when click link(scroll)-------*/
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};


ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
  });
  
  ScrollReveal().reveal('.home-content h3, .heading, h2, .home ',{origin: 'top'});
  ScrollReveal().reveal('.home-content .disLine, .services-box',{origin: 'bottom'});
  ScrollReveal().reveal('.home-content .imgCha, .home-content p',{origin: 'left'});
  ScrollReveal().reveal('.home-content .gamedis, .about-content, .Writing-contain p, .gameplay-contain p',{origin: 'right'});
  
  

