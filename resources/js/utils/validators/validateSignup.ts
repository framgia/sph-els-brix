import {
  isRequired,
  isValidName,
  isValidEmail,
  isAlphaNumeric,
  isMinimum,
  doesMatch,
} from "../helpers";

export const validateSignup = (
  name: string,
  value: string,
  formErrors: ELearning.SignupFormErrors,
  passwordToMatch: string
) => {
  switch (name) {
    case "firstName":
      if (isRequired(value)) {
        formErrors = {
          ...formErrors,
          firstName: {
            hasError: true,
            errorMessage: "First name is required",
          },
        };
      } else if (!isValidName(value)) {
        formErrors = {
          ...formErrors,
          firstName: {
            hasError: true,
            errorMessage: "First name must only contain letters",
          },
        };
      } else {
        formErrors = {
          ...formErrors,
          firstName: {
            hasError: false,
            errorMessage: "",
          },
        };
      }
      break;
    case "lastName":
      if (isRequired(value)) {
        formErrors = {
          ...formErrors,
          lastName: {
            hasError: true,
            errorMessage: "Last name is required",
          },
        };
      } else if (!isValidName(value)) {
        formErrors = {
          ...formErrors,
          lastName: {
            hasError: true,
            errorMessage: "Last name must only contain letters",
          },
        };
      } else {
        formErrors = {
          ...formErrors,
          lastName: {
            hasError: false,
            errorMessage: "",
          },
        };
      }
      break;
    case "email":
      if (isRequired(value)) {
        formErrors = {
          ...formErrors,
          email: {
            hasError: true,
            errorMessage: "Email is required",
          },
        };
      } else if (!isValidEmail(value)) {
        formErrors = {
          ...formErrors,
          email: {
            hasError: true,
            errorMessage: "Email is invalid",
          },
        };
      } else {
        formErrors = {
          ...formErrors,
          email: {
            hasError: false,
            errorMessage: "",
          },
        };
      }
      break;
    case "password":
      if (isRequired(value)) {
        formErrors = {
          ...formErrors,
          password: {
            hasError: true,
            errorMessage: "Password is required",
          },
        };
      } else if (!isAlphaNumeric(value)) {
        formErrors = {
          ...formErrors,
          password: {
            hasError: true,
            errorMessage: "Password must be alphanumeric",
          },
        };
      } else if (!isMinimum(value)) {
        formErrors = {
          ...formErrors,
          password: {
            hasError: true,
            errorMessage: "Password must be eight characters or longer",
          },
        };
      } else {
        formErrors = {
          ...formErrors,
          password: {
            hasError: false,
            errorMessage: "",
          },
        };
      }
      break;
    case "confirmPassword":
      if (!doesMatch(passwordToMatch, value)) {
        formErrors = {
          ...formErrors,
          confirmPassword: {
            hasError: true,
            errorMessage: "Passwords do not match",
          },
        };
      } else {
        formErrors = {
          ...formErrors,
          confirmPassword: {
            hasError: false,
            errorMessage: "",
          },
        };
      }
      break;
    default:
      formErrors = {
        firstName: {
          hasError: false,
          errorMessage: "",
        },
        lastName: {
          hasError: false,
          errorMessage: "",
        },
        email: {
          hasError: false,
          errorMessage: "",
        },
        password: {
          hasError: false,
          errorMessage: "",
        },
        confirmPassword: {
          hasError: false,
          errorMessage: "",
        },
      };
  }

  return formErrors;
};

export const validateSignupOnSubmit = (
  inputs: ELearning.LoginInputs,
  formErrors: ELearning.SignupFormErrors,
  passwordToMatch: string
) => {
  for (const [key, value] of Object.entries(inputs)) {
    formErrors = {
      ...formErrors,
      ...validateSignup(key, value, formErrors, passwordToMatch),
    };
  }

  return formErrors;
};
