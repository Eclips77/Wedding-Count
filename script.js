document.addEventListener("DOMContentLoaded", () => {
    // === Target Date Setup ===
    // August 17, 2026, assuming local time
    const targetDate = new Date("August 17, 2026 00:00:00").getTime();

    // === DOM Elements ===
    // Mode A elements
    const daysOnlyElement = document.getElementById("days-only");

    // Mode B elements
    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    // Toggle Elements
    const toggleInput = document.getElementById("mode-toggle");
    const modeA = document.getElementById("mode-a");
    const modeB = document.getElementById("mode-b");
    const toggleLabels = document.querySelectorAll(".toggle-label");

    // === Timer Logic ===
    function updateTimer() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        // If the date has passed
        if (distance < 0) {
            daysOnlyElement.innerText = "000";
            daysElement.innerText = "000";
            hoursElement.innerText = "00";
            minutesElement.innerText = "00";
            secondsElement.innerText = "00";
            return;
        }

        // Time calculations
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Format with leading zeros
        const formattedDays = String(days).padStart(3, '0');
        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');

        // Update DOM
        daysOnlyElement.innerText = formattedDays;

        daysElement.innerText = formattedDays;
        hoursElement.innerText = formattedHours;
        minutesElement.innerText = formattedMinutes;
        secondsElement.innerText = formattedSeconds;
    }

    // Initialize and set interval
    updateTimer();
    setInterval(updateTimer, 1000);

    // === Toggle Logic ===
    function handleToggleChange() {
        if (toggleInput.checked) {
            // Switch to Mode B (Detailed)
            modeA.classList.remove("active");
            modeB.classList.add("active");

            // Update labels visual state
            toggleLabels[0].style.opacity = "0.4";
            toggleLabels[1].style.opacity = "1";
        } else {
            // Switch to Mode A (Minimal)
            modeB.classList.remove("active");
            modeA.classList.add("active");

            // Update labels visual state
            toggleLabels[0].style.opacity = "1";
            toggleLabels[1].style.opacity = "0.4";
        }
    }

    // Set initial toggle state
    handleToggleChange();

    // Event listener for toggle switch
    toggleInput.addEventListener("change", handleToggleChange);

    // === Particles Generation ===
    function createParticles() {
        const particlesContainer = document.getElementById("particles");
        const particleCount = 30; // Adjust for density

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement("div");
            particle.classList.add("particle");

            // Randomize position, size, and animation duration
            const size = Math.random() * 5 + 2; // 2px to 7px
            const posX = Math.random() * 100; // 0% to 100%
            const posY = Math.random() * 100; // 0% to 100%
            const duration = Math.random() * 10 + 10; // 10s to 20s
            const delay = Math.random() * 5; // 0s to 5s

            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            particle.style.animationDuration = `${duration}s`;
            particle.style.animationDelay = `${delay}s`;

            particlesContainer.appendChild(particle);
        }
    }

    createParticles();
});
