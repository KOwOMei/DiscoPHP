document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const headerGroup = document.querySelector('.header-group');
    
    if (menuToggle && headerGroup) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            headerGroup.classList.toggle('active');
        });
        
        // Закрыть меню при клике на ссылку
        const menuLinks = document.querySelectorAll('.header-list-item a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                headerGroup.classList.remove('active');
            });
        });
    }
});