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
