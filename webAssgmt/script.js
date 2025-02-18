document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ script.js is running!");

    document.querySelectorAll("nav ul li a, .section-link").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                console.log(`📍 Scrolling to: #${targetId}`);
                
                targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
            } else {
                console.error(`❌ Element not found: #${targetId}`);
            }
        });
    });
});
