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

            // Get current path from URL
            let currentPath = window.location.pathname;

            // Normalize: treat "/" or "" as "index.html"
            if (currentPath === "/" || currentPath === "") {
                currentPath = "index.html";
            } else {
                currentPath = currentPath.split("/").pop(); // Only filename
            }

            const navLinks = document.querySelectorAll('#navbar-container .nav-link');

            navLinks.forEach(link => {
                let linkPath = link.getAttribute('href').split("/").pop(); // Only filename

                if (linkPath === currentPath) {
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
