// Load the audio
const audio = new Audio("./assets/song.mp3");

// play button
const playButton = document.querySelector(".playback-play-pause");
playButton.addEventListener("click", playAudio)

function playAudio(event) {
    event.preventDefault();

    // play or pause audio
    const pauseIcon = "fa-solid fa-pause fa-3x";
    const playIcon = "fa-solid fa-play fa-3x";
    const playbackIcon = document.querySelector("#playback-icon")
    if (audio.paused){ 
        audio.play();
        playbackIcon.classList.replace("fa-play", "fa-pause");
    }
    else {
        audio.pause();
        playbackIcon.classList.replace("fa-pause", "fa-play");
    }
}

// previous button
const prevButton = document.querySelector(".playback-previous");
prevButton.addEventListener("click", prevAudio);

function prevAudio(event) {
    event.preventDefault();

    // go to beginning of audio
    audio.currentTime = 0;
}


// Update the slider
document.querySelectorAll('input[type="range"]').forEach((slider) => {
    const updateProgress = () => {
        const min = slider.min === '' ? 0 : Number(slider.min);
        const max = slider.max === '' ? 100 : Number(slider.max);
        const progress = max > min ? ((Number(slider.value) - min) / (max - min)) * 100 : 0;
        slider.style.setProperty('--slider-progress', `${progress}%`);
    };

    slider.addEventListener('input', updateProgress);
    updateProgress();
});
