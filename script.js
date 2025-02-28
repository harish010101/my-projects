// Video player controls
const video = document.getElementById('myVideo');
const volumeSlider = document.getElementById('volumeSlider');

function playPause() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function setVolume() {
    video.volume = volumeSlider.value;
}

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        video.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}
