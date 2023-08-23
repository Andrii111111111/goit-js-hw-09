import { Notify } from 'notiflix/build/notiflix-notify-aio';

const delay = document.querySelector('[name=delay]').value;
const step = document.querySelector('[name=step]');
const position = document.querySelector('[name=amount]');
const form = document.querySelector('.form');
const btn = document.querySelector('[type=submit]');

// console.log(amount.currentTarget);
// console.log(form.delay.value);
btn.addEventListener('submit', createPromise);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((fulfill, reject) => {
    setInterval(() => {
      if (shouldResolve) {
        // Fulfill
        fulfill({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, 3000);
  });

  setTimeout(() => {
    promise
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }, 3000);
}
createPromise(1, 1500);
createPromise(3, 1500);
createPromise(5, 1500);
createPromise(4, 1500);
