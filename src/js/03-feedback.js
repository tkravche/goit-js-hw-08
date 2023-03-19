import throttle from 'lodash.throttle';
const LOCALSTORAGE_KEY = 'feedback-form-state';

const formEL = document.querySelector('.feedback-form');
formEL.addEventListener('input', throttle(onFormInput, 500));
formEL.addEventListener('submit', onFormSubmit);

function onFormInput(e) {
  let savedMessages = localStorage.getItem(LOCALSTORAGE_KEY);
  savedMessages = savedMessages ? JSON.parse(savedMessages) : {};
  savedMessages[e.target.name] = e.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(savedMessages));
}

function populateInputs() {
  let savedMessages = localStorage.getItem(LOCALSTORAGE_KEY);
  if (savedMessages) {
    savedMessages = JSON.parse(savedMessages);
    Object.entries(savedMessages).forEach(([name, value]) => {
      savedMessages[name] = value;
      formEL.elements[name].value = value;
    });
  }
}
populateInputs();

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}
