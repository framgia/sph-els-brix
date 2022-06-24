import { isRequired, isValidName } from "../helpers";

export const validatePersonalInfo = (name: string) =>
  isRequired(name)
    ? {
        hasError: true,
        errorMessage: "This field is required",
      }
    : !isValidName(name)
    ? {
        hasError: true,
        errorMessage: "Numbers and special characters are not allowed",
      }
    : {
        hasError: false,
        errorMessage: "",
      };

type Info = {
  firstName: string;
  lastName: string;
};

export const validatePersonalInfoOnSubmit = (info: Info) => {
  let e = {
    firstName: {
      hasError: false,
      errorMessage: "",
    },
    lastName: {
      hasError: false,
      errorMessage: "",
    },
  };

  for (const [k, v] of Object.entries(info)) {
    e = {
      ...e,
      [k]: validatePersonalInfo(v),
    };
  }

  return e.firstName.hasError ? e : e.lastName.hasError ? e : false;
};
