const eleHour = document.querySelector(".hour");
const eleMinute = document.querySelector(".minute");
const eleSecond = document.querySelector(".second");

const startBtn = document.querySelector(".btn-start img");
const resetBtn = document.querySelector(".btn-reset img");

let TIME = 0; //타이머 초
let Timer; // 타이머 : 일초마다 실행되는
let isPlay = false; // 현재 타이머 실행여부 : startBtn이 뭔지 몰라서

// 화면에 보여주기 타이머
function setTimer(sec) {
  TIME = sec;
  const hours = Math.floor(TIME / 3600);
  const seconds = TIME % 60;
  const minutes = Math.floor(TIME / 60) % 60;

  eleHour.textContent = hours;
  eleMinute.textContent = minutes;
  eleSecond.textContent = seconds;
}
//초를 누를때
eleSecond.addEventListener("click", function () {
  if (!isPlay) {
    setTimer(TIME + 10);
    startBtn.src = "./images/start-blue.png";
    resetBtn.src = "./images/reset-red.png";
  }
});

//분을 누를때
eleMinute.addEventListener("click", function () {
  if (!isPlay) {
    setTimer(TIME + 60);
    startBtn.src = "./images/start-blue.png";
    resetBtn.src = "./images/reset-red.png";
  }
});
// 시간을 눌렀을때
eleHour.addEventListener("click", function () {
  if (!isPlay) {
    setTimer(TIME + 3600);
    startBtn.src = "./images/start-blue.png";
    resetBtn.src = "./images/reset-red.png";
  }
});

// reset누르면 초기화
resetBtn.addEventListener("click", function () {
  reset();
});

function reset() {
  isPlay = false;

  startBtn.src = "./images/start-default.png";
  resetBtn.src = "./images/reset-default.png";
  setTimer(0);
  clearInterval(Timer);
}

// startBtn이 총 세번 바뀌니깐 그때마다 조건문 달기
startBtn.addEventListener("click", function () {
  if (isPlay == true) {
    isPlay = false;
    clearInterval(Timer);
  } else {
    if (TIME >= 1) {
      startBtn.src = "./images/pause.png";
      goTimer();
    }
  }
});

// countdown 타이머
function goTimer() {
  isPlay = true;

  Timer = setInterval(() => {
    TIME--;
    if (TIME == 0) {
      reset();
    }
    if (TIME >= 0) {
      setTimer(TIME); // 화면에 보여주기
    }
  }, 1000);
}
