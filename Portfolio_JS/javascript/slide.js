// This code adds a smooth scrolling effect to anchor links that start with "#"
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    // For each anchor link, an event listener is added to detect a click event
    anchor.addEventListener('click', function(e) {

        // This prevent the default action of the click event, which would jump directly to the section
        e.preventDefault();

        // This scroll smoothly to the section that the anchor link points to
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // This specifies the scrolling should be smooth
        });
    });
});