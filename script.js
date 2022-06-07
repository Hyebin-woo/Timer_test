const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

const startBtn = document.querySelector(".btn-start");
const resetBtn = document.querySelector(".btn-reset");

// hour.textContent;
// minute.textContent;
// second.textContent;

let TIME = 0;

// 타이머 증가 함수
function updateTimer() {
  const hours = Math.floor(TIME / 3600);
  const checkMinutes = Math.floor(TIME / 60);
  const seconds = TIME % 60;
  const minutes = checkMinutes % 60;

  timer.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
  TIME++;
}
