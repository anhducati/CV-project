if (window.innerWidth < 777) {
    [].slice.call(document.querySelectorAll('[data-bss-disable-mobile]')).forEach(function (elem) {
        elem.classList.remove('animated');
        elem.removeAttribute('data-bss-hover-animate');
        elem.removeAttribute('data-aos');      
    });
}

document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
},false);