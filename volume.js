document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("backgroundsong");
    const volumeSlider = document.getElementById("volumeSlider");

    // Ensure audio is loaded before setting volume
    audio.volume = volumeSlider.value;

    // Event listener for slider input
    volumeSlider.addEventListener("input", () => {
        audio.volume = volumeSlider.value;
        console.log("Volume set to:", audio.volume); // Debugging output
    });
});
