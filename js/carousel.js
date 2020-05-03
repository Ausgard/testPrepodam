'use strict';

(function () {
  var schoolImg = document.querySelector('.category-slider__item--school img');
  var studentImg = document.querySelector('.category-slider__item--student img');
  var additionalImg = document.querySelector('.category-slider__item--additional img');
  var siderBlock = document.querySelector('.category-slider');

  if (screen.width > 1200) {
    schoolImg.setAttribute('src', './img/Layer 4-desktop.jpg');
    studentImg.setAttribute('src', './img/Layer 5-desktop.jpg');
    additionalImg.setAttribute('src', './img/Layer 2-desktop.jpg');
  }

  if (screen.width > 991) {
    siderBlock.setAttribute('data-flickity', '{"wrapAround": false, "pageDots": false, "prevNextButtons": false, "initialIndex": 1, "draggable": false}');
  }
}());
