/*-----------toggle icon navbar--------*/
let menuIcon =document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onClick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};


/*-----------------------Scroll active-------*/
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top <offset + height){
      navLinks.forEach(link =>{
        links.classList.remove('active');
        document.querySelector('header nav a[herf*=' + id + ']').classList.add('active');
    };
  };
    /*-------------Sticky navbar------------*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*--------remove toggle icon and navbar when click--------*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*--------------scroll reveal-----------*/
ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200,
});
  
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });   
ScrollReveal().reveal('.home-img, .service-container, .portfolio-box, .contact form', { origin: 'bottom' });   
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' }); 

/*--------------------typed js-------------*/
const typed = new Typed('.multiple-text', {
  strings: ['Game Developer', 'Frontend Developer', 'Technical Artist'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});



                        
