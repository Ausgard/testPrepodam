'use strict';

(function () {
    var city = document.querySelector('.header__address-city');
    var header = document.querySelector('.header');
    var btn = document.querySelector('.header__menu-btn');
    var burger = document.querySelector('.header__menu-btn-burger');
    var cross = document.querySelector('.header__menu-btn-cross');
    var topNav = document.querySelector('.header__top-nav');
    var topNavSub = document.querySelector('.header__nav-sub-list');
    var topContentSection = document.querySelector('.top-content');

    btn.addEventListener('click', menuHandeler);
    
    function menuHandeler(event) {
        if (burger.classList.contains('d-flex')) {
            burger.classList.remove('d-flex')
            burger.classList.add('d-none');
        } else {
            burger.classList.remove('d-none')
            burger.classList.add('d-flex');
        }

        if (cross.classList.contains('d-none')) {
            cross.classList.toggle('d-flex');
        }

        if (city.classList.contains('visible') && screen.availWidth < 992) {
            city.classList.toggle('invisible');
        }
        if (topNav.classList.contains('d-none') && screen.availWidth < 992) {
            topNav.classList.remove('d-none');
            topNav.classList.add('d-flex');
            header.style.cssText = 'background-color: #25262a;';
            topContentSection.classList.remove('d-flex');
            topContentSection.classList.add('d-none');

        } else { 
                if (topNav.classList.contains('d-flex') && screen.availWidth < 992)
                topNav.classList.remove('d-flex');
                topNav.classList.add('d-none');
                header.style.cssText = 'background-color: transparent;';
                topContentSection.classList.remove('d-none');
                topContentSection.classList.add('d-flex');
            }

            if (topNav.classList.contains('d-none') && screen.availWidth >= 992) {
                topNav.classList.toggle('d-flex');
            }
        
            if (topNavSub.classList.contains('d-none') && screen.availWidth >= 992 && screen.availWidth < 1440) {
                topNavSub.classList.toggle('d-flex');
            }
            
        if (screen.availWidth >= 992 && topNavSub.classList.contains('d-lg-none')) {
            topNavSub.classList.toggle('d-lg-flex');
        }
        

    }
}());
