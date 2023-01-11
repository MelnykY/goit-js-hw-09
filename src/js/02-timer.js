import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const inputDate = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');
// const bgChange = document.querySelector('body');
//const bgChange = document.querySelector('.body--countdown-page');

// bgChange.style.backgroundImage = url(
//   'https://cdn.lifehacker.ru/wp-content/uploads/2018/06/winXPwin7_1527919170.jpg'
// );

startBtn.disabled = true;
let userDate = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    console.log(selectedDates[0]);

    if (selectedDates[0] < Date.now()) {
      startBtn.disabled = true;

      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      startBtn.disabled = false;

      userDate = selectedDates[0];
    }
  },
};
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
class Timer {
  constructor() {
    this.intervalId = null;
    this.isActive = false;
    startBtn.disabled = true;
  }
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.intervalId = setInterval(() => {
      startBtn.disabled = true;
      const currentTime = Date.now();
      const deltaTime = userDate - currentTime;
      const components = convertMs(deltaTime);
      days.textContent = components.days;
      hours.textContent = components.hours;
      minutes.textContent = components.minutes;
      seconds.textContent = components.seconds;
      if (deltaTime <= 0) {
        days.textContent = '00';
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';
        document.body.style.backgroundImage =
          "url('https://www.ionos.com/digitalguide/fileadmin/DigitalGuide/Teaser/bluescreen-t.jpg')";
        document.body.style.backgroundSize = '100%';
        this.stop();
      }
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
  }
}

startBtn.addEventListener('click', () => {
  timer.start();
});

const timer = new Timer();

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

flatpickr(inputDate, options);
