// ========================================
// TRIVENI MILK & DAILY PRODUCTS
// Main JavaScript
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    // ========================================
    // CONFIGURATION
    // ========================================

    const WHATSAPP_NUMBER = "7620362154"; // Replace with actual WhatsApp number


    // ========================================
    // MOBILE NAVIGATION
    // ========================================

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            menuToggle.classList.toggle("active");

            // Change menu icon
            if (navLinks.classList.contains("active")) {
                menuToggle.innerHTML = "✕";
            } else {
                menuToggle.innerHTML = "☰";
            }
        });

        // Close menu when clicking a navigation link
        const links = navLinks.querySelectorAll("a");

        links.forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                menuToggle.classList.remove("active");
                menuToggle.innerHTML = "☰";
            });
        });
    }


    // ========================================
    // HEADER SCROLL EFFECT
    // ========================================

    const header = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (!header) return;

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });


    // ========================================
    // SMOOTH SCROLL
    // ========================================

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                const navbarHeight = header
                    ? header.offsetHeight
                    : 80;

                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.pageYOffset -
                    navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        });

    });


    // ========================================
    // FAQ ACCORDION
    // ========================================

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const question = item.querySelector(".faq-question");

        if (!question) return;

        question.addEventListener("click", () => {

            // Close other FAQs
            faqItems.forEach(otherItem => {

                if (otherItem !== item) {
                    otherItem.classList.remove("active");

                    const answer = otherItem.querySelector(".faq-answer");

                    if (answer) {
                        answer.style.maxHeight = null;
                    }
                }

            });

            // Toggle current FAQ
            item.classList.toggle("active");

            const answer = item.querySelector(".faq-answer");

            if (answer) {

                if (item.classList.contains("active")) {
                    answer.style.maxHeight = answer.scrollHeight + "px";
                } else {
                    answer.style.maxHeight = null;
                }

            }

        });

    });


    // ========================================
    // WHATSAPP ORDER FUNCTION
    // ========================================

    function openWhatsApp(message) {

        const encodedMessage = encodeURIComponent(message);

        const whatsappURL =
            `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

        window.open(whatsappURL, "_blank");
    }


    // ========================================
    // GENERAL ORDER BUTTONS
    // ========================================

    const orderButtons = document.querySelectorAll(
        ".order-btn, .whatsapp-order"
    );

    orderButtons.forEach(button => {

        button.addEventListener("click", event => {

            event.preventDefault();

            const product =
                button.dataset.product ||
                button.closest(".product-card")?.querySelector("h3")?.textContent ||
                "Milk & Dairy Products";

            const message =
                `Hello Triveni Milk & Daily Products! 👋\n\n` +
                `I would like to order:\n` +
                `• ${product}\n\n` +
                `Please share the available quantity, price and delivery details.\n\n` +
                `Thank you!`;

            openWhatsApp(message);
        });

    });


    // ========================================
    // PRODUCT CARD HOVER / INTERACTION
    // ========================================

    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach(card => {

        card.addEventListener("mouseenter", () => {
            card.classList.add("hovered");
        });

        card.addEventListener("mouseleave", () => {
            card.classList.remove("hovered");
        });

    });


    // ========================================
    // CONTACT FORM
    // ========================================

    const contactForm = document.querySelector("#contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", event => {

            event.preventDefault();

            const name =
                document.querySelector("#name")?.value.trim();

            const phone =
                document.querySelector("#phone")?.value.trim();

            const message =
                document.querySelector("#message")?.value.trim();

            if (!name || !phone || !message) {
                alert("Please fill in all the required fields.");
                return;
            }

            const whatsappMessage =
                `Hello Triveni Milk & Daily Products! 👋\n\n` +
                `Name: ${name}\n` +
                `Phone: ${phone}\n\n` +
                `Message:\n${message}`;

            openWhatsApp(whatsappMessage);

            contactForm.reset();

        });

    }


    // ========================================
    // ORDERING FORM
    // ========================================

    const orderingForm = document.querySelector("#orderingForm");

    if (orderingForm) {

        orderingForm.addEventListener("submit", event => {

            event.preventDefault();

            const name =
                document.querySelector("#orderName")?.value.trim();

            const phone =
                document.querySelector("#orderPhone")?.value.trim();

            const product =
                document.querySelector("#orderProduct")?.value;

            const quantity =
                document.querySelector("#orderQuantity")?.value;

            const address =
                document.querySelector("#orderAddress")?.value.trim();

            if (!name || !phone || !product || !quantity || !address) {

                alert(
                    "Please fill in all order details before placing your order."
                );

                return;
            }

            const message =
                `Hello Triveni Milk & Daily Products! 🥛\n\n` +
                `I would like to place an order.\n\n` +
                `👤 Name: ${name}\n` +
                `📱 Phone: ${phone}\n` +
                `🥛 Product: ${product}\n` +
                `📦 Quantity: ${quantity}\n` +
                `📍 Address: ${address}\n\n` +
                `Please confirm my order and delivery details.`;

            openWhatsApp(message);

            orderingForm.reset();

        });

    }


    // ========================================
    // FLOATING WHATSAPP BUTTON
    // ========================================

    const floatingWhatsApp =
        document.querySelector(".floating-whatsapp");

    if (floatingWhatsApp) {

        floatingWhatsApp.addEventListener("click", event => {

            event.preventDefault();

            const message =
                `Hello Triveni Milk & Daily Products! 👋\n\n` +
                `I would like to know more about your milk and dairy products.`;

            openWhatsApp(message);

        });

    }


    // ========================================
    // SCROLL TO TOP BUTTON
    // ========================================

    const scrollTopButton =
        document.querySelector(".scroll-top");

    if (scrollTopButton) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {
                scrollTopButton.classList.add("show");
            } else {
                scrollTopButton.classList.remove("show");
            }

        });

        scrollTopButton.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    // ========================================
    // REVEAL ANIMATION ON SCROLL
    // ========================================

    const revealElements = document.querySelectorAll(
        ".section, .product-card, .feature-card, .testimonial-card"
    );

    const revealObserver = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    revealObserver.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(element => {
        element.classList.add("reveal");
        revealObserver.observe(element);
    });


    // ========================================
    // ACTIVE NAVIGATION LINK
    // ========================================

    const sections =
        document.querySelectorAll("section[id]");

    const navigationLinks =
        document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        navigationLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                `#${currentSection}`
            ) {
                link.classList.add("active");
            }

        });

    });


    // ========================================
    // PHONE NUMBER VALIDATION
    // ========================================

    const phoneInputs =
        document.querySelectorAll(
            'input[type="tel"]'
        );

    phoneInputs.forEach(input => {

        input.addEventListener("input", () => {

            input.value =
                input.value.replace(/\D/g, "").slice(0, 10);

        });

    });


    // ========================================
    // CURRENT YEAR IN FOOTER
    // ========================================

    const yearElement =
        document.querySelector("#currentYear");

    if (yearElement) {
        yearElement.textContent =
            new Date().getFullYear();
    }


    // ========================================
    // BUTTON RIPPLE EFFECT
    // ========================================

    const buttons =
        document.querySelectorAll("button, .btn");

    buttons.forEach(button => {

        button.addEventListener("click", function (event) {

            const ripple =
                document.createElement("span");

            ripple.classList.add("ripple");

            const rect =
                this.getBoundingClientRect();

            const size =
                Math.max(rect.width, rect.height);

            ripple.style.width = `${size}px`;
            ripple.style.height = `${size}px`;

            ripple.style.left =
                `${event.clientX - rect.left - size / 2}px`;

            ripple.style.top =
                `${event.clientY - rect.top - size / 2}px`;

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);

        });

    });


    // ========================================
    // CONSOLE MESSAGE
    // ========================================

    console.log(
        "🥛 Triveni Milk & Daily Products website loaded successfully!"
    );

});