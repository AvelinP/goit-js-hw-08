import throttle from 'lodash.throttle';

// const form = document.querySelector('.feedback-form');
// const emailInput = form.querySelector('input[name="email"]');
// const messageInput = form.querySelector('textarea[name="message"]');

// form.addEventListener(
//   'input',
//   throttle(function () {
//     const formData = {
//       email: emailInput.value,
//       message: messageInput.value,
//     };
//     localStorage.setItem('feedback-form-state', JSON.stringify(formData));
//   }, 500)
// );

// window.addEventListener('load', function () {
//   const savedFormData = localStorage.getItem('feedback-form-state');
//   if (savedFormData) {
//     const { email, message } = JSON.parse(savedFormData);
//     emailInput.value = email;
//     messageInput.value = message;
//   }
// });

// form.addEventListener('submit', function (event) {
//   event.preventDefault();
//   const formData = {
//     email: emailInput.value,
//     message: messageInput.value,
//   };
//   console.log(formData);
//   localStorage.removeItem('feedback-form-state');
// });

import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailEl = document.querySelector('label [name="email"]');
const messageEl = document.querySelector('label [name="message"]');

const STORAGE_KEY = 'feedback-form-state';

console.log(emailEl);
console.log(messageEl);

// *Stocare pe localstorage
form.addEventListener('input', throttle(modificareInput, 500));

function modificareInput() {
  const email = emailEl.value;
  const message = messageEl.value;

  //console.log(email);
  //console.log(message);

  const formData = { email, message };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// *Recuperare din localstorage
candPaginaSeIncarca();

function candPaginaSeIncarca() {
  const saveData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (saveData) {
    emailEl.value = saveData.email;
    messageEl.value = saveData.message;
  }
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const email = emailEl.value;
  const message = messageEl.value;

  console.log(`Email: ${email} / Mesaj:${message}`);

  form.reset();
  localStorage.removeItem(STORAGE_KEY);
});
