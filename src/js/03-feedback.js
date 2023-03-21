import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';

const formEL = document.querySelector('.feedback-form');
formEL.addEventListener('input', throttle(onFormInput, 500));
formEL.addEventListener('submit', onFormSubmit);

function onFormInput(e) {
  let savedData = localStorage.getItem(LOCALSTORAGE_KEY);
  savedData = savedData ? JSON.parse(savedData) : {};
  savedData[e.target.name] = e.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(savedData));
}

function restoreData() {
  let savedData = localStorage.getItem(LOCALSTORAGE_KEY);
  if (savedData) {
    savedData = JSON.parse(savedData);
    Object.entries(savedData).forEach(([name, value]) => {
      savedData[name] = value;
      formEL.elements[name].value = value;
    });
  }
}
restoreData();

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}
