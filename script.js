document.addEventListener('DOMContentLoaded', () => {

    // --- Loading Screen Animation ---
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => preloader.style.display = 'none', 500);
        }, 400); // Guarantees visual smooth asset parsing sequence
    });

    // --- Sticky Navbar Engine ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });

    // --- Mobile Hamburger Navigation Toggle ---
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // --- Active Link Tracker On Scroll ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // --- Functional Custom Scroll-Reveal System ---
    const revealElements = document.querySelectorAll('.scroll-reveal');
    const revealOnScroll = () => {
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight - 50) {
                el.classList.add('revealed');
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger instantly on loading sequence frame

    // --- Animated Statistics Counter Engine ---
    const stats = document.querySelectorAll('.stat-number');
    let countersStarted = false;

    const startCounters = () => {
        stats.forEach(stat => {
            const updateCount = () => {
                const target = +stat.getAttribute('data-target');
                const count = +stat.innerText;
                const speed = target / 60; // Standard speed scaling factor

                if (count < target) {
                    stat.innerText = Math.ceil(count + speed);
                    setTimeout(updateCount, 25);
                } else {
                    stat.innerText = target.toLocaleString() + '+';
                }
            };
            updateCount();
        });
    };

    // Trigger metrics calculation when about block intersects view port
    const aboutSection = document.getElementById('about');
    window.addEventListener('scroll', () => {
        if (!aboutSection) return;
        const pos = aboutSection.getBoundingClientRect().top;
        if (pos < window.innerHeight - 100 && !countersStarted) {
            countersStarted = true;
            startCounters();
        }
    });

    // --- Javascript BMI Calculator Component Module ---
    const bmiForm = document.getElementById('bmi-form');
    const resultBox = document.getElementById('bmi-result-box');
    const bmiValueSpan = document.getElementById('bmi-value');
    const bmiStatusStrong = document.getElementById('bmi-status');

    bmiForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value) / 100; // Convert to meters

        if (weight > 0 && height > 0) {
            const bmi = (weight / (height * height)).toFixed(1);
            bmiValueSpan.innerText = bmi;
            
            let status = '';
            if (bmi < 18.5) {
                status = 'Underweight';
                bmiStatusStrong.style.color = '#3498db';
            } else if (bmi >= 18.5 && bmi <= 24.9) {
                status = 'Healthy Weight';
                bmiStatusStrong.style.color = '#2ecc71';
            } else if (bmi >= 25 && bmi <= 29.9) {
                status = 'Overweight';
                bmiStatusStrong.style.color = '#f1c40f';
            } else {
                status = 'Obese';
                bmiStatusStrong.style.color = '#e74c3c';
            }

            bmiStatusStrong.innerText = status;
            resultBox.style.display = 'block';
        }
    });

    // --- Premium Lead Capture Contact Form Validation Engine ---
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('contact-name').value.trim();
        const email = document.getElementById('contact-email').value.trim();
        const message = document.getElementById('contact-message').value.trim();

        if(name === "" || email === "" || message === "") {
            alert("Security check: Please properly populate all form text scopes.");
            return;
        }

        // Simulating direct API dispatch mechanism event loop
        alert(`Transmission Success! Welcome to Fit Nation, ${name}. Our elite training managers will contact you within 12 hours.`);
        contactForm.reset();
    });

    // --- Back-To-Top Interactive Interface Switch ---
    const backToTopBtn = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 600) {
            backToTopBtn.style.display = 'flex';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});