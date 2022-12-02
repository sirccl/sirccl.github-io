
function audioPause() {
    let audio = document.getElementsByTagName('audio');
    if (audio.length > 0) {
        for (let i = 0; i < audio.length; i++) { document.getElementById(audio[i].id).pause(); }
    }
} function
    audioPlay(audioId, musicUrl) {
    let audio = document.getElementById(audioId); if (audio.paused) {
        document.getElementById(audioId).src = musicUrl; audio.play();
    } else { audio.pause(); audio.currentTime = 0; }
}