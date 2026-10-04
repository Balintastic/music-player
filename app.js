// Load the audio
const audio = new Audio("./assets/song.mp3");

// play button
const playButton = document.querySelector(".playback-play-pause");
playButton.addEventListener("click", playAudio)

function playAudio(event) {
    event.preventDefault();

    // play or pause audio
    if (audio.paused){ 
        audio.play();
    }
    else {
        audio.pause();
    }

    updatePlayIcon();
}

function updatePlayIcon() {
    const playbackIcon = document.querySelector("#playback-icon")
    if (audio.paused){ 
        playbackIcon.classList.replace("fa-pause", "fa-play");
    }
    else {
        playbackIcon.classList.replace("fa-play", "fa-pause");
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

// next button
const nextButton = document.querySelector(".playback-next");
nextButton.addEventListener("click", () => {
    audio.currentTime = audio.duration;
    updatePlayIcon();
    updateSliderCss();
});

// SLIDER
const slider = document.querySelector('input[type="range"]');

// set slider vars
audio.addEventListener("loadedmetadata", () => {
    slider.max = audio.duration;

    updateDurationInfo();
});

// Update the slider css
function updateSliderCss() {
    const progress = (slider.value / slider.max) * 100;
    slider.style.setProperty('--slider-progress', `${progress}%`);
};

// Updating values
// audio -> slider
audio.addEventListener("timeupdate", () => {
    slider.value = audio.currentTime;

    updatePlayIcon();
    
    updateSliderCss();

    updateCurrentTimeInfo();
});

// slider -> audio
slider.addEventListener("input", () => {
    audio.currentTime = slider.value;
    updateSliderCss();
});

// Time info Text
const currentTimeP = document.querySelector(".current-time");
const durationTimeP = document.querySelector(".duration-time");

function updateCurrentTimeInfo() {
    currentTimeP.textContent = convertToTimeFormatString(audio.currentTime);
}

function updateDurationInfo() {
    durationTimeP.textContent = convertToTimeFormatString(audio.duration);
}

function convertToTimeFormatString(value) {
    const minutes = Math.floor(value / 60);
    const seconds = Math.round(value % 60);

    return `${minutes}:${String(seconds).padStart(2, "0")}`;
}