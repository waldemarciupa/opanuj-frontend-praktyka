import { validate, clear } from './utils.js';

const input = document.getElementById('input');
const button = document.getElementById('button');
const button2 = document.getElementById('button2');
const result = document.getElementById('result');

function handleValidate() {
  const numValue = Number(input.value);
  const isValid = validate(numValue);
  result.innerHTML = isValid ? 'Valid' : 'Invalid';
}

function handleClear() {
  clear(input, result);
}

button.addEventListener('click', handleValidate);
button2.addEventListener('click', handleClear);
