import '../scss/style.scss';

// document.addEventListener('DOMContentLoaded', function() {
//     const menuButton = document.querySelector('.l-header__menu-button');
//     const navLinks = document.querySelector('.l-header__nav');

//     menuButton.addEventListener('click', function() {
//         navLinks.classList.toggle('show');
//     });
// });

import jQuery from 'jquery';
import 'slick-carousel'
const $ = jQuery;


div.card-wrap > card__bloc


$('.card-wrap').slick({
  fade: false,
  autoplay: false,
  pauseOnHover: true,
  autoplaySpeed: 5400,
  speed: 300,
  touchThreshold: 8,
  infinite: true,
  variableWidth: false,
  slidesToShow: 5,
  slidesToScroll: 5,
  arrows: true,
  dots: false
}); 


// your-custom-script.js
$(document).ready(function(){
    $('.gallery-bloc__inner').slick({
        dots: true,  // Display dots navigation
        infinite: true,
        speed: 300,
        slidesToShow: 1,  // Number of slides to show at a time
        centerMode: true,  // Enable center mode
        variableWidth: true,  // Allow variable width of slides
        autoplay: true,  // Enable autoplay
        autoplaySpeed: 2000  // Set autoplay speed in milliseconds
    });
});




