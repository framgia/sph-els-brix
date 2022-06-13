export = ELearning;
export as namespace ELearning;

declare namespace ELearning {
  type LoginInputs = {
    email: string;
    password: string;
  };

  type FormErrors = {
    hasError: boolean;
    errorMessage: string;
  };

  type LoginFormErrors = {
    email: FormErrors;
    password: FormErrors;
  };

  type SignupFormErrors = {
    firstName: FormErrors;
    lastName: FormErrors;
    email: FormErrors;
    password: FormErrors;
    confirmPassword: FormErrors;
  };
}
