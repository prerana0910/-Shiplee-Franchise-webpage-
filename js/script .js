const darkModeToggle = document.getElementById('darkModeToggle');
const iconSun = darkModeToggle.querySelector('.icon-sun');
const iconMoon = darkModeToggle.querySelector('.icon-moon');

// Check local storage for dark mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    iconSun.style.display = 'none';
    iconMoon.style.display = 'inline';
} else {
    iconSun.style.display = 'inline';
    iconMoon.style.display = 'none';
}

// Toggle dark mode and icon
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        iconSun.style.display = 'none';
        iconMoon.style.display = 'inline';
    } else {
        localStorage.removeItem('darkMode');
        iconSun.style.display = 'inline';
        iconMoon.style.display = 'none';
    }
});

// Scroll-to-Top Button
const scrollToTopButton = document.getElementById('scrollToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
// Lazy load images with intersection observer
const lazyImages = document.querySelectorAll('img[loading="lazy"]');

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    });

    lazyImages.forEach(image => {
        observer.observe(image);
    });
} else {
    // Fallback if IntersectionObserver is not supported
    lazyImages.forEach(image => {
        image.classList.add('is-visible');
    });
}
// Select the toggle button and accordion content
const accordionToggle = document.querySelector('.accordion-toggle');
const accordionContent = document.querySelector('.accordion-content');

// Toggle accordion content visibility on button click
accordionToggle.addEventListener('click', () => {
    accordionContent.classList.toggle('open');
    
    // Optionally change button text based on content visibility
    if (accordionContent.classList.contains('open')) {
        accordionToggle.textContent = 'Click to Collapse Benefits List';
    } else {
        accordionToggle.textContent = 'Click to Expand Benefits List';
    }
});

// let slideIndex = 0;
// const slides = document.querySelectorAll('.slide');

// // Initial display of the first slide
// showSlide(slideIndex);

// // Function to display a specific slide
// function showSlide(index) {
//     slides.forEach((slide, i) => {
//         slide.classList.remove('active');
//         if (i === index) {
//             slide.classList.add('active');
//         }
//     });
// }

// // Function to change slides
// function changeSlide(direction) {
//     slideIndex += direction;
//     if (slideIndex >= slides.length) slideIndex = 0;
//     if (slideIndex < 0) slideIndex = slides.length - 1;
//     showSlide(slideIndex);
// }

// // Automatic Slideshow
// setInterval(() => {
//     changeSlide(1);
// }, 5000); // Change slide every 5 seconds
