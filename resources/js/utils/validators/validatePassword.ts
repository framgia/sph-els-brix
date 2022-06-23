import { doesMatch, isAlphaNumeric, isMinimum, isRequired } from "../helpers";

export const validatePassword = (
  name: ELearning.PasswordNames,
  password: string,
  confirmPassword?: string
) => {
  const required = {
    hasError: true,
    errorMessage: "This field is required",
  };

  const minimum = {
    hasError: true,
    errorMessage: "Must be eight characters or longer",
  };

  const alphaNumeric = {
    hasError: true,
    errorMessage: "Only letters and numbers are allowed",
  };

  const unmatched = {
    hasError: true,
    errorMessage: "Does not match with the new password",
  };

  const defaultMsg = {
    hasError: false,
    errorMessage: "",
  };

  switch (name) {
    case "currentPassword":
      return isRequired(password)
        ? required
        : !isMinimum(password)
        ? minimum
        : defaultMsg;
    case "newPassword":
      return isRequired(password)
        ? required
        : !isMinimum(password)
        ? minimum
        : !isAlphaNumeric(password)
        ? alphaNumeric
        : defaultMsg;
    case "confirmNewPassword":
      return isRequired(password)
        ? required
        : !doesMatch(password, confirmPassword!)
        ? unmatched
        : defaultMsg;
  }
};

export default validatePassword;
