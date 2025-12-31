document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    
    // Sticky Header Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.background = 'rgba(5, 5, 5, 0.98)';
        } else {
            header.style.padding = '0';
            header.style.background = 'rgba(5, 5, 5, 0.9)';
        }
    });

    // Submenu interaction for mobile
    const navItems = document.querySelectorAll('.nav-item');
    
    if (window.innerWidth < 1024) {
        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                const submenu = item.querySelector('.submenu');
                if (submenu) {
                    e.preventDefault();
                    submenu.classList.toggle('active-mobile');
                }
            });
        });
    }
});
