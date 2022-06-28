import {
  isRequired,
  isValidEmail,
  isAlphaNumeric,
  isMinimum,
  doesMatch,
} from "../helpers";

export const validateSignup = (
  name: string,
  value: string,
  formErrors: ELearning.FrontendError,
  passwordToMatch: string
) => {
  switch (name) {
    case "firstname":
      if (isRequired(value)) {
        formErrors = {
          ...formErrors,
          firstname: {
            hasError: true,
            errorMessage: "First name is required",
          },
        };
      } else {
        formErrors = {
          ...formErrors,
          firstname: {
            hasError: false,
            errorMessage: "",
          },
        };
      }
      break;
    case "lastname":
      if (isRequired(value)) {
        formErrors = {
          ...formErrors,
          lastname: {
            hasError: true,
            errorMessage: "Last name is required",
          },
        };
      } else {
        formErrors = {
          ...formErrors,
          lastname: {
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
    case "password_confirmation":
      if (!doesMatch(passwordToMatch, value)) {
        formErrors = {
          ...formErrors,
          password_confirmation: {
            hasError: true,
            errorMessage: "Passwords do not match",
          },
        };
      } else {
        formErrors = {
          ...formErrors,
          password_confirmation: {
            hasError: false,
            errorMessage: "",
          },
        };
      }
      break;
    default:
      formErrors = {
        firstname: {
          hasError: false,
          errorMessage: "",
        },
        lastname: {
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
        password_confirmation: {
          hasError: false,
          errorMessage: "",
        },
      };
  }

  return formErrors;
};
