export type CalcResult = {
  result: number;
  error?: string;
};

export function add(a: number, b: number): CalcResult {
  return { result: a + b };
}

export function substract(a: number, b: number): CalcResult {
  return { result: a - b };
}

export function multiply(a: number, b: number): CalcResult {
  return { result: a * b };
}

export function divide(a: number, b: number): CalcResult {
  return {
    result: b === 0 ? 0 : a / b,
    error: b === 0 ? 'Cannot divide by zero' : undefined,
  };
}
