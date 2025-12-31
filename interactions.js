/* 
    GROVER'S GYM - INTERACTION ENGINE 
*/

// Intersection Observer for Reveal Animations
const revealOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
};

const revealOnScroll = new IntersectionObserver((entries, revealOnScroll) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        revealOnScroll.unobserve(entry.target);
    });
}, revealOptions);

document.querySelectorAll('.reveal').forEach(el => {
    revealOnScroll.observe(el);
});

// Magnetic Button Logic
const magnets = document.querySelectorAll('.btn-magnetic');
magnets.forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
        const position = btn.getBoundingClientRect();
        const x = e.pageX - position.left - position.width / 2;
        const y = e.pageY - position.top - position.height / 2;
        
        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.5}px)`;
    });
    
    btn.addEventListener('mouseout', () => {
        btn.style.transform = `translate(0px, 0px)`;
    });
});
