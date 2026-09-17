function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed("#typing-effect", {
        strings: ["Journalist.", "Photographer.", "Designer."],
        typeSpeed: 100,      // How fast it types
        backSpeed: 50,       // How fast it deletes
        backDelay: 2000,     // Wait 2 seconds before deleting
        loop: true,          // Keep looping forever
        showCursor: true,    // Show the blinking cursor
        cursorChar: '|',     // The cursor character
    });
});