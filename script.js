document.addEventListener('DOMContentLoaded', () => {
    const terminalWindow = document.querySelector('.terminal-window');
    const terminalBody = document.getElementById('terminalBody');
    const closeBtn = document.querySelector('.control-btn.close');


    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    closeBtn.addEventListener('click', () => {
        terminalWindow.style.display = 'none';
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView();
        });
    });
});