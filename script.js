    document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('menu-toggle');
    const navList = document.querySelector('.nav-list');

    toggleBtn.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    const elementos = document.querySelectorAll('[data-anima]');

    const animaScroll = () => {
        elementos.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elTop < windowHeight * 0.85) {
                el.classList.add('animado');
            }
        });
    };

    animaScroll();
    window.addEventListener('scroll', animaScroll);
});