'use strict';

(function () {
  var anchorLink = document.querySelector('.main-content__link');
  var scrollBtn = document.querySelector('.top-content__scroll-btn');

  scrollBtn.addEventListener('click', scrollHandler);

  function scrollHandler(event) {
    anchorLink.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
  
}());
