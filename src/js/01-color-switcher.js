function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let timerId = null;

// startBtn.setAttribute('disabled');

startBtn.addEventListener('click', () => {
  onClickStartBtn();
//   startBtn.setAttribute('disabled');
//   stopBtn.removeAttribute('disabled');
  startBtn.disabled = true;
  stopBtn.disabled = false;
});

stopBtn.addEventListener('click', () => {
  onClickStopBtn();
//   startBtn.removeAttribute('disabled');
//   stopBtn.setAttribute('disabled');
  startBtn.disabled = false;
  stopBtn.disabled = true;
});

function onClickStartBtn() {
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onClickStopBtn() {
  clearInterval(timerId);
};
