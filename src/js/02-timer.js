import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const startBtn = document.querySelector('[data-start]');
const inputTimer = document.getElementById('datetime-picker');
let timerId;
const sec = 1000;
let ms;

const elOfCounter = {
  day: document.querySelector('[data-days]'),
  hour: document.querySelector('[data-hours]'),
  minute: document.querySelector('[data-minutes]'),
  second: document.querySelector('[data-seconds]'),
};

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

startBtn.setAttribute('disabled', '');
let timeUsr;
let different;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentDate = options.defaultDate.getTime();
    timeUsr = selectedDates[0].getTime();
    if (timeUsr < currentDate) {
      Notify.failure('Please choose a date in the future');
    }

    if (timeUsr > currentDate) {
      startBtn.removeAttribute('disabled');
    }
    startBtn.addEventListener('click', on);
    function on(evt) {
      different = timeUsr - currentDate;
      startBtn.setAttribute('disabled', '');
      inputTimer.setAttribute('disabled', '');

      timerId = setInterval(() => {
        ms = different -= sec;
        elOfCounter.day.textContent = addLeadingZero(convertMs(ms).days);
        elOfCounter.hour.textContent = addLeadingZero(convertMs(ms).hours);
        elOfCounter.minute.textContent = addLeadingZero(convertMs(ms).minutes);
        elOfCounter.second.textContent = addLeadingZero(convertMs(ms).seconds);
        convertMs(ms);

        if (ms < 999) {
          clearInterval(timerId);
          ms = 0;
        }
      }, 1000);
    }
  },
};
flatpickr("input[type = 'text']", options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // day.textContent = days;
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// style
const fildsWraper = document.querySelector('.timer');
fildsWraper.style.display = 'flex';
fildsWraper.style.gap = '10px';
fildsWraper.style.marginTop = '20px';

const fields = document.querySelectorAll('.field');
for (const item of fields) {
  item.style.display = 'flex';
  item.style.flexDirection = 'column';
}
const value = document.querySelectorAll('.value');
for (const item of value) {
  item.style.fontWeight = '600';
  item.style.fontSize = '30px';
}

const label = document.querySelectorAll('.label');
for (const item of label) {
  item.style.fontWeight = '400';
}
