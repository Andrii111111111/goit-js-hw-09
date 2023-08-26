import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');

form.addEventListener('submit', generate);
function generate(evt) {
  evt.preventDefault();
  const amount = form.elements[2].value;
  const step = form.elements[1].value;
  const delay = form.elements[0].value;

  for (let i = 1; i <= amount; i += 1) {
    if (i === 1) {
      createPromise(i, delay)
        .then(({ position, delay }) => {
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        });
    }
    setTimeout(() => {
      createPromise(i, Number(delay) + Number(step) * i)
        .then(({ position, delay }) => {
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        });
    }, step * i);
  }

  function createPromise(position, delay) {
    return new Promise((fulfill, reject) => {
      const shouldResolve = Math.random() > 0.3;
      setTimeout(() => {
        if (shouldResolve) {
          // Fulfill
          fulfill({ position, delay });
        } else {
          // Reject
          reject({ position, delay });
        }
        console.log(delay);
      }, delay);
    });
  }
}
