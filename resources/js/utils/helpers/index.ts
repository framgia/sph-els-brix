export function doesMatch(password: string, confirmPassword: string) {
  return password === confirmPassword;
}

export function isAlphaNumeric(password: string) {
  return /^[a-zA-Z0-9]+$/.test(password);
}

export function isMinimum(value: string, minLength: number = 8) {
  return value.length >= minLength;
}

export function isRequired(value: string) {
  return value.trim() === "";
}

export function isValidEmail(email: string) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

export function isValidName(name: string) {
  return /^[a-zA-Z]+$/.test(name);
}
