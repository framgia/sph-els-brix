import { doesMatch, isAlphaNumeric, isMinimum, isRequired } from "../helpers";

const customErrors = {
  required: {
    hasError: true,
    errorMessage: "This field is required",
  },
  minimum: {
    hasError: true,
    errorMessage: "Must be eight characters or longer",
  },
  alphaNumeric: {
    hasError: true,
    errorMessage: "Only letters and numbers are allowed",
  },
  unmatched: {
    hasError: true,
    errorMessage: "Does not match with the new password",
  },
  defaultMsg: {
    hasError: false,
    errorMessage: "",
  },
};

export const validatePassword = (
  name: ELearning.PasswordNames,
  password: string,
  confirmPassword?: string
) => {
  switch (name) {
    case "currentPassword":
      return isRequired(password)
        ? customErrors.required
        : !isMinimum(password)
        ? customErrors.minimum
        : customErrors.defaultMsg;
    case "newPassword":
      return isRequired(password)
        ? customErrors.required
        : !isMinimum(password)
        ? customErrors.minimum
        : !isAlphaNumeric(password)
        ? customErrors.alphaNumeric
        : customErrors.defaultMsg;
    case "confirmNewPassword":
      return isRequired(password)
        ? customErrors.required
        : !doesMatch(password, confirmPassword!)
        ? customErrors.unmatched
        : customErrors.defaultMsg;
  }
};

type Passwords = {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
};

export const validatePasswordOnSubmit = (passwords: Passwords) => {
  let e = {
    currentPassword: {
      hasError: false,
      errorMessage: "",
    },
    newPassword: {
      hasError: false,
      errorMessage: "",
    },
    confirmNewPassword: {
      hasError: false,
      errorMessage: "",
    },
  };

  for (const [k, v] of Object.entries(passwords)) {
    e = {
      ...e,
      [k]:
        k === "confirmNewPassword"
          ? validatePassword(
              k as ELearning.PasswordNames,
              v,
              passwords.newPassword
            )
          : validatePassword(k as ELearning.PasswordNames, v),
    };
  }

  return e.currentPassword.hasError
    ? e
    : e.newPassword.hasError
    ? e
    : e.confirmNewPassword.hasError
    ? e
    : false;
};
