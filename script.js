// JavaScript for mobile menu and services dropdown
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const closeMobileMenuButton = document.getElementById('close-mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const servicesDropdownButton = document.getElementById('services-dropdown-button');
    const servicesDropdown = document.getElementById('services-dropdown');
    const servicesDropdownIcon = document.getElementById('services-dropdown-icon');

    // Toggle mobile menu visibility
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.add('open');
    });

    closeMobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
    });

    // Toggle services dropdown visibility on mobile
    servicesDropdownButton.addEventListener('click', (e) => {
        e.preventDefault();
        servicesDropdown.classList.toggle('hidden');
        servicesDropdownIcon.classList.toggle('rotate-180');
    });

    // Get the pricing section element
    const pricingSection = document.getElementById('pricing-section');
    // Get all floating icons
    const floatingIcons = document.querySelectorAll('.floating-icon-wrapper');
    
    // Define different movement speeds for each icon to create a layered effect
    const speeds = [0.1, -0.2, 0.3, -0.15, 0.25];

    // Listen for the window scroll event
    window.addEventListener('scroll', () => {
        // Get the current vertical scroll position
        const scrollY = window.scrollY;
        
        // Get the top and bottom position of the pricing section relative to the viewport
        const pricingRect = pricingSection.getBoundingClientRect();
        const pricingTop = pricingRect.top + scrollY;
        const pricingBottom = pricingRect.bottom + scrollY;

        // Check if the current scroll position is within the pricing section's boundaries
        if (scrollY > pricingTop - window.innerHeight && scrollY < pricingBottom) {
            // Calculate a relative scroll position within the section
            const relativeScroll = scrollY - (pricingTop - window.innerHeight);

            // Loop through each icon and apply a parallax transform
            floatingIcons.forEach((icon, index) => {
                // Calculate the new horizontal position based on the relative scroll and a unique speed
                const transformX = relativeScroll * speeds[index];
                
                // Apply the transform to the icon
                icon.style.transform = `translateX(${transformX}px)`;
            });
        }
    });
});
