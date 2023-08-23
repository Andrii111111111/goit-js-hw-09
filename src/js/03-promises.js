import { Notify } from 'notiflix/build/notiflix-notify-aio';

const delay = document.querySelector('[name=delay]').valueAsNumber;
const step = document.querySelector('[name=step]');
// const amount = document.querySelector('[name=amount]'.valueAsNumber);
const form = document.querySelector('.form');
const btn = document.querySelector('[type=submit]');
// const delay = 1500;

// const amount = 5;
btn.addEventListener('submit', generateSequence);

function generateSequence(evt) {
  evt.preventDefault();
  console.log(evt);
  setTimeout(() => {
    for (let i = 1; i <= amount; i++) {
      createPromise(i, delay);
    }
  }, 3000);
}
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  console.log(position);

  const promise = new Promise((fulfill, reject) => {
    setInterval(() => {
      if (shouldResolve) {
        // Fulfill
        fulfill({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    });
  }, 2000);

  promise
    .then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}
// createPromise(1, 1500);
// createPromise(3, 1500);
// createPromise(5, 1500);
// createPromise(4, 1500);

// generateSequence(5);
