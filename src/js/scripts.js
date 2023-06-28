const nameElement = document.getElementById('name');
const numberElement = document.getElementById('number');
const monthElement = document.getElementById('month');
const yearElement = document.getElementById('year');
const cvcElement = document.getElementById('cvc');
const nameCardElement = document.getElementById('name-card');
const numberCardElement = document.getElementById('number-card');
const monthCardElement = document.getElementById('month-card');
const yearCardElement = document.getElementById('year-card');
const cvcCardElement = document.getElementById('cvc-card');
const frontCard = document.getElementById('front-card');
const button = document.getElementById('button');

const fillName = e => {
  if (e.target.value !== '') {
    nameCardElement.textContent = e.target.value.toUpperCase();
  } else {
    nameCardElement.textContent = 'JANE APPLEESED';
  }
};
const fillNumber = e => {
  if (e.target.value !== '') {
    numberCardElement.textContent = e.target.value;
  } else {
    numberCardElement.textContent = '0000 0000 0000 0000';
  }
};

const fillMonth = e => {
  if (e.target.value !== '') {
    monthCardElement.textContent = e.target.value;
  } else {
    monthCardElement.textContent = '00';
  }
};
const fillYear = e => {
  if (e.target.value !== '') {
    yearCardElement.textContent = e.target.value;
  } else {
    yearCardElement.textContent = '00';
  }
};
const fillCvc = e => {
  if (e.target.value !== '') {
    cvcCardElement.textContent = e.target.value;
  } else {
    cvcCardElement.textContent = '000';
  }
};
nameElement.addEventListener('input', fillName);
numberElement.addEventListener('input', fillNumber);
monthElement.addEventListener('input', fillMonth);
yearElement.addEventListener('input', fillYear);
cvcElement.addEventListener('input', fillCvc);
