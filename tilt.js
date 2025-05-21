document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.main-container');

    if (!container) {
        console.error("No element found with class 'main-container'");
        return;
    }

    let lastX = 0;
    let lastY = 0;
    let targetX = 0;
    let targetY = 0;
    const smoothFactor = 0.1;

    function updateTilt() {
        lastX += (targetX - lastX) * smoothFactor;
        lastY += (targetY - lastY) * smoothFactor;

        container.style.transform = `perspective(1000px) rotateX(${lastX}deg) rotateY(${lastY}deg)`;

        requestAnimationFrame(updateTilt);
    }

    container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        targetX = ((y - centerY) / centerY) * -15;
        targetY = ((x - centerX) / centerX) * 15;
    });

    container.addEventListener('mouseleave', () => {
        targetX = 0;
        targetY = 0;
    });

    updateTilt();
});
