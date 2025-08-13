// Dynamically load navbar.html into <div id="navbar-placeholder"></div>
window.addEventListener("DOMContentLoaded", () => {

    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        once: true
    });

    //Navbar
    fetch('../components/navbar.html')
        .then(res => res.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;

            // Highlight active nav-link (run after navbar is loaded)
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            const navLinks = document.querySelectorAll('#navbar-container .nav-link');
            navLinks.forEach(link => {
                // Normalize href for comparison
                let linkHref = link.getAttribute('href');
                if (linkHref && linkHref.endsWith(currentPage)) {
                    link.classList.add('active');
                }
            });

            // Init AOS again after navbar loads
            AOS.refresh();
        });

    //Footer
    fetch('../components/footer.html')
        .then(res => res.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
            AOS.refresh(); // refresh AOS after footer loads
        })
        .catch(err => console.error('Error loading footer:', err));

    
});
