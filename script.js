document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    
    burger.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      burger.classList.toggle('active');
    });
    
    const typed = new Typed('.typing', {
      strings: ['ZARAR KHAN', 'a Developer', 'a Student'],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
        navLinks.classList.remove('active');
        burger.classList.remove('active');
      });
    });
    
    window.addEventListener('scroll', function() {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.style.padding = '15px 5%';
        navbar.style.backgroundColor = 'rgba(30, 39, 46, 0.95)';
      } else {
        navbar.style.padding = '20px 5%';
        navbar.style.backgroundColor = 'rgba(30, 39, 46, 0.9)';
      }
    });
  
    document.querySelectorAll('.cert-card').forEach(card => {
      card.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
          this.style.transform = 'scale(1)';
        }, 200);
      });
    });
  });