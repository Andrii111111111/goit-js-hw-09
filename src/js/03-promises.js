import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
let firstdelay;
let amount;
let delay;
let step;

form.addEventListener('submit', generate);
function generate(evt) {
  evt.preventDefault();
  amount = evt.currentTarget[2].value;
  step = evt.currentTarget[1].value;
  firstdelay = evt.currentTarget[0].value;
  delay = Number(firstdelay) + Number(step);

  setTimeout(() => {
    for (let i = 1; i <= amount; i++) {
      setTimeout(function () {
        createPromise(i, Number(firstdelay) + Number(step) * (i - 1));
      }, step * i);
    }
  }, firstdelay);

  function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;

    const promise = new Promise((fulfill, reject) => {
      if (shouldResolve) {
        // Fulfill
        fulfill({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    });

    promise
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}
