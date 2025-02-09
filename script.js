document.addEventListener("DOMContentLoaded", () => {
  const audio = document.querySelector("#audio");
  const pauseBtn = document.querySelector("#pause-btn");
  const stopBtn = document.querySelector("#stop-btn");
  const playIco = document.querySelector("#play-icon");
  const stopIco = document.querySelector("#stop-icon");

  audio.volume = 0.3;

  pauseBtn.addEventListener("click", () => {
    if (playIco.classList.contains("bx-pause")) {
      audio.pause();
      playIco.classList.replace("bx-pause", "bx-play");
    } else {
      audio.play();
      playIco.classList.replace("bx-play", "bx-pause");
    }
  });

  stopBtn.addEventListener("click", () => {
    audio.pause();
    audio.currentTime = 0; // Reset audio to start
    playIco.classList.replace("bx-pause", "bx-play");
  });
});
