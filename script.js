/* =========================================================
   DHINAKARAN E. — PORTFOLIO JAVASCRIPT
   FINAL VERSION
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
       ===================================================== */

    const body = document.body;

    const header =
        document.querySelector("#header");

    const menuIcon =
        document.querySelector("#menu-icon");

    const navbar =
        document.querySelector("#navbar");

    const themeToggle =
        document.querySelector("#theme-toggle");

    const scrollProgress =
        document.querySelector("#scroll-progress");

    const multipleText =
        document.querySelector(".multiple-text");

    const backTop =
        document.querySelector(".back-top");

    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll(".navbar a");

    const revealElements =
        document.querySelectorAll(".reveal");

    const filterButtons =
        document.querySelectorAll(".filter-btn");

    const projectCards =
        document.querySelectorAll(".project-card");


    /* =====================================================
       MOBILE MENU
       ===================================================== */

    if (menuIcon && navbar) {

        menuIcon.addEventListener("click", () => {

            navbar.classList.toggle("active");

            menuIcon.classList.toggle("fa-bars");

            menuIcon.classList.toggle("fa-xmark");

        });

    }


    /* =====================================================
       CLOSE MOBILE MENU WHEN NAV LINK CLICKED
       ===================================================== */

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            if (navbar) {
                navbar.classList.remove("active");
            }

            if (menuIcon) {

                menuIcon.classList.remove("fa-xmark");

                menuIcon.classList.add("fa-bars");

            }

        });

    });


    /* =====================================================
       CLOSE MENU WHEN CLICKING OUTSIDE
       ===================================================== */

    document.addEventListener("click", (event) => {

        if (!navbar || !menuIcon) return;

        const clickedInsideNavbar =
            navbar.contains(event.target);

        const clickedMenu =
            menuIcon.contains(event.target);

        if (
            !clickedInsideNavbar &&
            !clickedMenu
        ) {

            navbar.classList.remove("active");

            menuIcon.classList.remove("fa-xmark");

            menuIcon.classList.add("fa-bars");

        }

    });


    /* =====================================================
       TYPING ANIMATION
       ===================================================== */

    if (multipleText) {

        const roles = [

            "IT Support Engineer",

            "VDI & Server Engineer",

            "Cloud Support Engineer",

            "Data Analyst"

        ];

        let roleIndex = 0;

        let charIndex = 0;

        let deleting = false;


        function typeEffect() {

            const currentRole =
                roles[roleIndex];


            if (!deleting) {

                multipleText.textContent =
                    currentRole.substring(
                        0,
                        charIndex + 1
                    );

                charIndex++;


                if (
                    charIndex ===
                    currentRole.length
                ) {

                    deleting = true;

                    setTimeout(
                        typeEffect,
                        1800
                    );

                    return;

                }

            } else {

                multipleText.textContent =
                    currentRole.substring(
                        0,
                        charIndex - 1
                    );

                charIndex--;


                if (charIndex === 0) {

                    deleting = false;

                    roleIndex =
                        (roleIndex + 1)
                        % roles.length;

                }

            }


            const typingSpeed =
                deleting ? 45 : 85;

            setTimeout(
                typeEffect,
                typingSpeed
            );

        }


        typeEffect();

    }


    /* =====================================================
       THEME TOGGLE
       ===================================================== */

    const savedTheme =
        localStorage.getItem(
            "portfolio-theme"
        );


    if (savedTheme === "light") {

        body.classList.add(
            "light-theme"
        );

    }


    function updateThemeIcon() {

        if (!themeToggle) return;

        const icon =
            themeToggle.querySelector("i");

        if (!icon) return;


        if (
            body.classList.contains(
                "light-theme"
            )
        ) {

            icon.classList.remove(
                "fa-moon"
            );

            icon.classList.add(
                "fa-sun"
            );

            themeToggle.setAttribute(
                "aria-label",
                "Switch to dark theme"
            );

        } else {

            icon.classList.remove(
                "fa-sun"
            );

            icon.classList.add(
                "fa-moon"
            );

            themeToggle.setAttribute(
                "aria-label",
                "Switch to light theme"
            );

        }

    }


    updateThemeIcon();


    if (themeToggle) {

        themeToggle.addEventListener(
            "click",
            () => {

                body.classList.toggle(
                    "light-theme"
                );


                const currentTheme =
                    body.classList.contains(
                        "light-theme"
                    )
                        ? "light"
                        : "dark";


                localStorage.setItem(
                    "portfolio-theme",
                    currentTheme
                );


                updateThemeIcon();

            }
        );

    }


    /* =====================================================
       SCROLL PROGRESS
       ===================================================== */

    function updateScrollProgress() {

        if (!scrollProgress) return;


        const scrollTop =
            window.scrollY;


        const documentHeight =
            document.documentElement
                .scrollHeight -
            window.innerHeight;


        if (documentHeight <= 0) {

            scrollProgress.style.width =
                "0%";

            return;

        }


        const progress =
            (scrollTop /
                documentHeight) *
            100;


        scrollProgress.style.width =
            `${progress}%`;

    }


    /* =====================================================
       HEADER SCROLL EFFECT
       ===================================================== */

    function updateHeader() {

        if (!header) return;


        if (window.scrollY > 50) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );

        }

    }


    /* =====================================================
       ACTIVE NAVIGATION
       ===================================================== */

    function updateActiveNav() {

        let currentSection = "";

        const scrollPosition =
            window.scrollY + 150;


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop;

            const sectionHeight =
                section.offsetHeight;

            const sectionId =
                section.getAttribute("id");


            if (
                scrollPosition >= sectionTop &&
                scrollPosition <
                    sectionTop + sectionHeight
            ) {

                currentSection =
                    sectionId;

            }

        });


        navLinks.forEach(link => {

            link.classList.remove(
                "active"
            );


            const href =
                link.getAttribute("href");


            if (
                href ===
                `#${currentSection}`
            ) {

                link.classList.add(
                    "active"
                );

            }

        });

    }


    /* =====================================================
       BACK TO TOP
       ===================================================== */

    function updateBackTop() {

        if (!backTop) return;


        if (window.scrollY > 500) {

            backTop.classList.add(
                "show"
            );

        } else {

            backTop.classList.remove(
                "show"
            );

        }

    }


    if (backTop) {

        backTop.addEventListener(
            "click",
            (event) => {

                event.preventDefault();


                window.scrollTo({

                    top: 0,

                    behavior: "smooth"

                });

            }
        );

    }


    /* =====================================================
       SCROLL REVEAL
       ===================================================== */

    if (
        "IntersectionObserver"
        in window
    ) {

        const revealObserver =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target
                                    .classList
                                    .add(
                                        "visible"
                                    );

                                revealObserver
                                    .unobserve(
                                        entry.target
                                    );

                            }

                        }
                    );

                },
                {

                    threshold: 0.12,

                    rootMargin:
                        "0px 0px -50px 0px"

                }
            );


        revealElements.forEach(
            element => {

                revealObserver.observe(
                    element
                );

            }
        );

    } else {

        revealElements.forEach(
            element => {

                element.classList.add(
                    "visible"
                );

            }
        );

    }


    /* =====================================================
       PROJECT FILTER
       ===================================================== */

    filterButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                /* Remove active state */

                filterButtons.forEach(
                    btn => {

                        btn.classList.remove(
                            "active"
                        );

                    }
                );


                /* Activate clicked button */

                button.classList.add(
                    "active"
                );


                const filter =
                    button.dataset.filter;


                projectCards.forEach(
                    card => {

                        const category =
                            card.dataset.category;


                        if (
                            filter === "all" ||
                            category === filter
                        ) {

                            card.classList.remove(
                                "is-hidden"
                            );

                        } else {

                            card.classList.add(
                                "is-hidden"
                            );

                        }

                    }
                );

            }
        );

    });


    /* =====================================================
       SMOOTH SCROLL
       ===================================================== */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(link => {

            link.addEventListener(
                "click",
                function(event) {

                    const targetId =
                        this.getAttribute(
                            "href"
                        );


                    if (
                        !targetId ||
                        targetId === "#"
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (!target) return;


                    event.preventDefault();


                    const headerHeight =
                        header
                            ? header.offsetHeight
                            : 0;


                    const targetPosition =
                        target.offsetTop -
                        headerHeight;


                    window.scrollTo({

                        top:
                            targetPosition,

                        behavior:
                            "smooth"

                    });

                }
            );

        });


    /* =====================================================
       CONTACT FORM
       ===================================================== */

    const contactForm =
        document.querySelector(
            "#contact-form"
        );

    const formStatus =
        document.querySelector(
            "#form-status"
        );


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            async (event) => {

                event.preventDefault();


                const submitButton =
                    contactForm.querySelector(
                        'button[type="submit"]'
                    );


                const originalText =
                    submitButton
                        ? submitButton.innerHTML
                        : "";


                if (submitButton) {

                    submitButton.disabled =
                        true;

                    submitButton.innerHTML =
                        '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

                }


                if (formStatus) {

                    formStatus.textContent =
                        "Sending your message...";

                }


                try {

                    const formData =
                        new FormData(
                            contactForm
                        );


                    const response =
                        await fetch(
                            contactForm.action,
                            {

                                method:
                                    "POST",

                                body:
                                    formData,

                                headers: {

                                    Accept:
                                        "application/json"

                                }

                            }
                        );


                    if (
                        response.ok
                    ) {

                        if (formStatus) {

                            formStatus.textContent =
                                "Message sent successfully!";

                        }


                        contactForm.reset();

                    } else {

                        throw new Error(
                            "Form submission failed."
                        );

                    }

                } catch (error) {

                    console.error(
                        error
                    );


                    if (formStatus) {

                        formStatus.textContent =
                            "Something went wrong. Please try again.";

                    }

                } finally {

                    if (submitButton) {

                        submitButton.disabled =
                            false;

                        submitButton.innerHTML =
                            originalText;

                    }

                }

            }
        );

    }


    /* =====================================================
       IMAGE ERROR HANDLING
       ===================================================== */

    const images =
        document.querySelectorAll(
            "img"
        );


    images.forEach(image => {

        image.addEventListener(
            "error",
            () => {

                image.classList.add(
                    "image-error"
                );

                console.warn(
                    `Image could not be loaded: ${image.src}`
                );

            }
        );

    });


    /* =====================================================
       CURRENT YEAR
       ===================================================== */

    const yearElements =
        document.querySelectorAll(
            "[data-year]"
        );


    yearElements.forEach(
        element => {

            element.textContent =
                new Date()
                    .getFullYear();

        }
    );


    /* =====================================================
       INITIAL SCROLL STATE
       ===================================================== */

    updateScrollProgress();

    updateHeader();

    updateActiveNav();

    updateBackTop();


    /* =====================================================
       WINDOW SCROLL EVENT
       ===================================================== */

    let ticking = false;


    window.addEventListener(
        "scroll",
        () => {

            if (!ticking) {

                window.requestAnimationFrame(
                    () => {

                        updateScrollProgress();

                        updateHeader();

                        updateActiveNav();

                        updateBackTop();

                        ticking = false;

                    }
                );

                ticking = true;

            }

        },
        {
            passive: true
        }
    );


    /* =====================================================
       WINDOW RESIZE
       ===================================================== */

    window.addEventListener(
        "resize",
        () => {

            updateActiveNav();

        }
    );


    /* =====================================================
       CONSOLE MESSAGE
       ===================================================== */

    console.log(
        "%cDhinakaran E. Portfolio",
        "font-size:20px;font-weight:bold;"
    );

    console.log(
        "%cIT Support • VDI • Cloud • Data Analytics",
        "font-size:13px;"
    );

});