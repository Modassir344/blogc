document.addEventListener('DOMContentLoaded', function() {
    const toggleMenu = document.getElementById('toggle-menu');
    const cards = document.querySelectorAll('.cards');

    toggleMenu.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const readMoreButtons = document.querySelectorAll('.read-more');
    const readLessButtons = document.querySelectorAll('.read-less');

    readMoreButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const des = button.closest('.des');
            des.querySelector('.full-text').style.display = 'block';
            des.querySelector('.limited-text').style.display = 'none';
            button.style.display = 'none';
            des.querySelector('.read-less').style.display = 'block';
        });
    });

    readLessButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const des = button.closest('.des');
            des.querySelector('.full-text').style.display = 'none';
            des.querySelector('.limited-text').style.display = 'block';
            button.style.display = 'none';
            des.querySelector('.read-more').style.display = 'block';
        });
    });
});
