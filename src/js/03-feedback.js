import _ from 'lodash';
const form = document.querySelector('.feedback-form');
let valueForm;

//Valida si hay algo en almacenamiento local
const informationForm = localStorage.getItem('feedback-form-state');

if (informationForm !== null) {
  const informationFormParse = JSON.parse(informationForm);

  if (
    informationFormParse.email !== '' ||
    informationFormParse.message !== ''
  ) {
    form.elements.email.value = informationFormParse.email;
    form.elements.message.value = informationFormParse.message;
  }
}

//Guarda la información en almacenamiento local;

const throttled = _.throttle(monitoring, 500);

form.addEventListener('change', throttled);

function monitoring(event) {
  const {
    elements: { email, message },
  } = event.currentTarget;

  valueForm = {
    email: email.value,
    message: message.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(valueForm));
  return valueForm;
}

form.addEventListener('submit', reset);

function reset(event) {
  event.preventDefault();
  console.log(valueForm);
  localStorage.clear();
  event.currentTarget.reset();
}
