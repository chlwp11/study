const toggleBtn = document.querySelector('.nav_bar');
const menu = document.querySelector('nav');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});
 
