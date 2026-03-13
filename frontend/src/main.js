// Mobile Menu Toggle logic
(function () {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');

    if (mobileBtn && mobileNav) {
        mobileBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
            mobileBtn.classList.toggle('open');
        });
    }

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href) {
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                    if (mobileNav?.classList.contains('active')) {
                        mobileNav.classList.remove('active');
                    }
                }
            }
        });
    });

    // Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                if (entry.target.classList.contains('slide-up') || entry.target.classList.contains('fade-in')) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe animation elements
    document.querySelectorAll('.fade-in, .slide-up').forEach(el => {
        el.style.animationPlayState = 'paused'; // Ensure paused initially
        observer.observe(el);
    });

    // Auth Logic
    const authModal = document.getElementById('authModal');
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const closeModal = document.getElementById('closeModal');
    const toggleAuth = document.getElementById('toggleAuth');
    const toggleText = document.getElementById('toggleText');
    const modalTitle = document.getElementById('modalTitle');
    const submitAuth = document.getElementById('submitAuth');
    const nameField = document.getElementById('nameField');
    const authForm = document.querySelector('.auth-form');

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
            if (modalTitle) modalTitle.textContent = 'Log in to your account';
            if (submitAuth) submitAuth.textContent = 'Log in';
            if (toggleText) toggleText.innerHTML = 'Don\'t have an account? <span id="toggleAuth" class="toggle-link">Sign up</span>';
            if (nameField) nameField.classList.add('hidden');
        } else {
            isLoginMode = false;
            if (modalTitle) modalTitle.textContent = 'Sign up with email';
            if (submitAuth) submitAuth.textContent = 'Sign up';
            if (toggleText) toggleText.innerHTML = 'Already have an account? <span id="toggleAuth" class="toggle-link">Log in</span>';
            if (nameField) nameField.classList.remove('hidden');
        }
        document.getElementById('toggleAuth')?.addEventListener('click', () => {
            setMode(isLoginMode ? 'signup' : 'login');
        });
    }

    if (loginBtn) loginBtn.addEventListener('click', () => openModal('login'));
    if (signupBtn) signupBtn.addEventListener('click', () => openModal('signup'));
    if (closeModal) closeModal.addEventListener('click', closeModalFunc);
    if (authModal) authModal.addEventListener('click', (e) => { if (e.target === authModal) closeModalFunc(); });
    // Initial toggle listener if present
    if (toggleAuth) toggleAuth.addEventListener('click', () => setMode(isLoginMode ? 'signup' : 'login'));


    // Auth Submission Logic
    if (submitAuth) {
        submitAuth.addEventListener('click', async (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const name = document.getElementById('name').value;

            // Simple validation
            if (!email || !password) {
                alert('Please fill in all required fields.');
                return;
            }

            const endpoint = isLoginMode ? '/api/login' : '/api/signup';
            const body = isLoginMode ? { email, password } : { name, email, password };

            try {
                const response = await fetch(endpoint, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body)
                });

                const result = await response.json();

                if (response.ok) {
                    alert(result.message || (isLoginMode ? 'Login successful' : 'Signup successful'));
                    closeModalFunc();
                    // Optionally update UI for logged in state
                } else {
                    alert(result.detail || 'Authentication failed');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
            }
        });
    }


    // Instagram Logic
    const designServiceBtn = document.getElementById('designServiceBtn');
    const instaModal = document.getElementById('instaModal');
    const closeInstaModal = document.getElementById('closeInstaModal');
    const instaPosts = document.querySelectorAll('.insta-post');

    function openInsta() {
        if (!instaModal) return;
        instaModal.classList.add('open');
    }

    function closeInsta() {
        if (instaModal) instaModal.classList.remove('open');
    }

    if (designServiceBtn) designServiceBtn.addEventListener('click', openInsta);
    if (closeInstaModal) closeInstaModal.addEventListener('click', closeInsta);
    if (instaModal) instaModal.addEventListener('click', (e) => { if (e.target === instaModal) closeInsta(); });

    if (instaPosts) {
        instaPosts.forEach(post => {
            post.addEventListener('click', () => {
                window.open('https://www.instagram.com/nexus_noble?igsh=MWR4cnN5NW15ZHk2eQ==', '_blank');
            });
        });
    }







    /* =========================================
       Number Counter Animation
       ========================================= */
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // The lower the slower

    const animateCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 20);
                } else {
                    // Create formatted string for large numbers (e.g. 5M+)
                    if (target >= 1000000) {
                        counter.innerText = Math.floor(target / 1000000) + 'M+';
                    } else if (target >= 1000) {
                        counter.innerText = Math.floor(target / 1000) + '+';
                    } else {
                        counter.innerText = target;
                    }
                }
            };
            updateCount();
        });
    };

    // Trigger animations when the impact section is active
    // We can reuse the existing observer or create a new one for specific section
    const impactSection = document.querySelector('.impact-grid');
    if (impactSection) {
        const counterObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                animateCounters();
                counterObserver.disconnect(); // run once
            }
        });
        counterObserver.observe(impactSection);
    }

})();
// Feedback Form Handling
(function () {
    const feedbackBtn = document.getElementById('submitFeedback');
    const formContent = document.getElementById('feedbackFormContent');
    const successMsg = document.getElementById('feedbackSuccess');

    if (feedbackBtn && formContent && successMsg) {
        feedbackBtn.addEventListener('click', async () => {
            // Optional: Validate if rating or text is present
            const text = document.getElementById('feedbackText').value;

            if (!text) {
                alert('Please enter your feedback.');
                return;
            }

            // Simulate API call/processing with animation
            feedbackBtn.innerHTML = 'Sending...';
            feedbackBtn.style.opacity = '0.7';

            try {
                const response = await fetch('/api/feedback', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ message: text })
                });

                if (response.ok) {
                    // Hide Form with Fade Out
                    formContent.style.opacity = '0';
                    formContent.style.transition = 'opacity 0.3s ease';

                    setTimeout(() => {
                        formContent.style.display = 'none';
                        successMsg.style.display = 'block';
                        // Trigger reflow for animation if needed
                        void successMsg.offsetWidth;
                        successMsg.style.opacity = '1';
                    }, 300);
                } else {
                    alert('Failed to submit feedback. Please try again.');
                    feedbackBtn.innerHTML = 'Submit Inquiry';
                    feedbackBtn.style.opacity = '1';
                }
            } catch (error) {
                console.error('Error submitting feedback:', error);
                alert('An error occurred. Please try again.');
                feedbackBtn.innerHTML = 'Submit Inquiry';
                feedbackBtn.style.opacity = '1';
            }
        });
    }
})();
