// Mobile Menu Toggle logic
document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');

    if (mobileBtn && mobileNav) {
        mobileBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('active');

            // Simple animation for the hamburger icon could be added here
            const bars = mobileBtn.querySelectorAll('.bar');
            // Toggle generic class if we wanted to animate X shape instructions in CSS
            mobileBtn.classList.toggle('open');
        });
    }

    // Smooth Scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href) {
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                    // Close mobile menu if open
                    if (mobileNav?.classList.contains('active')) {
                        mobileNav.classList.remove('active');
                    }
                }
            }
        });
    });

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running'; // If we used play-state paused default
                // Or better, just add a class that triggers the animation
                // For simplicity in the CSS, we used 'forwards' and default running, 
                // but for re-triggering we could use a class 'visible'.
                // Since the CSS defined animation runs immediately on load for Hero, 
                // we will let the Hero run naturally. 
                // For scroll elements:
                if (entry.target.classList.contains('slide-up') || entry.target.classList.contains('fade-in')) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // If we wanted to hide elements initially and reveal them on scroll:
    // This requires CSS modification to set initial opacity 0 for specific elements intended for scroll reveal not handled by simple animation delays.

    /* =========================================
       Auth Logic
       ========================================= */
    const authModal = document.getElementById('authModal');
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const closeModal = document.getElementById('closeModal');
    const toggleAuth = document.getElementById('toggleAuth');
    const toggleText = document.getElementById('toggleText');
    const modalTitle = document.getElementById('modalTitle');
    const submitAuth = document.getElementById('submitAuth');
    const nameField = document.getElementById('nameField');

    let isLoginMode = true;

    function openModal(mode = 'login') {
        if (!authModal) return;
        authModal.classList.add('open');
        setMode(mode);
    }

    function closeModalFunc() {
        if (authModal) authModal.classList.remove('open');
    }

    function setMode(mode) {
        if (mode === 'login') {
            isLoginMode = true;
            modalTitle.textContent = 'Log in to your account';
            submitAuth.textContent = 'Log in';
            toggleText.innerHTML = 'Don\'t have an account? <span id="toggleAuth" class="toggle-link">Sign up</span>';
            nameField.classList.add('hidden');
        } else {
            isLoginMode = false;
            modalTitle.textContent = 'Sign up with email';
            submitAuth.textContent = 'Sign up';
            toggleText.innerHTML = 'Already have an account? <span id="toggleAuth" class="toggle-link">Log in</span>';
            nameField.classList.remove('hidden');
        }
        // Re-attach listener since we replaced innerHTML
        document.getElementById('toggleAuth')?.addEventListener('click', () => {
            setMode(isLoginMode ? 'signup' : 'login');
        });
    }

    if (loginBtn) loginBtn.addEventListener('click', () => openModal('login'));
    if (signupBtn) signupBtn.addEventListener('click', () => openModal('signup'));
    if (closeModal) closeModal.addEventListener('click', closeModalFunc);

    // Close on click outside
    if (authModal) {
        authModal.addEventListener('click', (e) => {
            if (e.target === authModal) closeModalFunc();
        });
    }

    // Initial Toggle Listener
    if (toggleAuth) {
        toggleAuth.addEventListener('click', () => {
            setMode(isLoginMode ? 'signup' : 'login');
        });
    }
});
