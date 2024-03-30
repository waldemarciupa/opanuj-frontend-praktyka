export const validate = (value) => {
  return isGreaterThanZero(value) && isLessThanHundred(value) && isEven(value);
};

const isGreaterThanZero = (value) => value > 0;

const isLessThanHundred = (value) => value < 100;

const isEven = (value) => value % 2 === 0;

export const clear = (input, result) => {
  input.value = '';
  result.innerHTML = '';
};
