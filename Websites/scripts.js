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



