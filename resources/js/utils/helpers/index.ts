export const doesMatch = (password: string, confirmPassword: string) =>
  password === confirmPassword;

export const isAlphaNumeric = (password: string) =>
  /^[a-zA-Z0-9]+$/.test(password);

export const isMinimum = (value: string, minLength: number = 8) =>
  value.length >= minLength;

export const isRequired = (value: string) => value.trim() === "";

export const isValidEmail = (email: string) =>
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );

export const isValidName = (name: string) => /^[a-zA-ZñÑ]+$/.test(name);
