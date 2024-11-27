//Counter

const counterEl = document.querySelector('.counter');

// reviews animation
{/*
const review = document.querySelectorAll('.review-box');

let currentReview = 0;

function nextReview() {
  review.forEach((review, index) => {
    review.classList.remove('review');
    
  });
currentReview = (currentReview + 1) % review.length;
review[currentReview].classList.add('active');

}
review[currentReview].classList.add('active');
setInterval(nextReview, 3000);

nextReview();
*/}

const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
  
  if (entry.isIntersecting) {
    entry.target.classList.add('show');
  }
  else {
    entry.target.classList.remove('show');
  }

});
});

const hiddenElements = document.querySelectorAll('.reviews');
hiddenElements.forEach((el) => observer.observe(el));



//mouse cursor effect

let mouseCursor = document.querySelector('.cursor'); 
let info_nav = document.querySelectorAll('.info-nav ul');
let reviews = document.querySelector('.reviews');
let below_body = document.querySelector('.below-body');
let doctors = document.querySelector('.doctors');
let about_us = document.querySelector('about-us');
let benefits = document.querySelector('.benefits');
let hero_section = document.querySelector('hero-section');
let hero_right = document.querySelector('.right-side');
let hero_left = document.querySelector('.left-side');

window.addEventListener('mousemove', cursor);

function cursor(e){
  mouseCursor.style.top = e.pageY + 'px'; //px = pixels
  mouseCursor.style.left = e.pageX + 'px';
}

info_nav.forEach(link => {
  link.addEventListener('mouseover', () => {
    mouseCursor.classList.add('link-grow');
  });
  link.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove('link-grow');
  });
});

hero_section.forEach(ul =>{
link.addEventListener('mouseover', () => {
    mouseCursor.classList.add('link-grow');
  });
});
