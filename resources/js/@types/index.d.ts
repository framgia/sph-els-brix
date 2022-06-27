export = ELearning;
export as namespace ELearning;

declare namespace ELearning {
  /*
    TODO: REFACTOR AND MERGE TYPES
  */

  type LoginInputs = {
    email: string;
    password: string;
  };

  type SignupFormInputs = {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    confirmPassword: string;
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
    firstname: FormErrors;
    lastname: FormErrors;
    email: FormErrors;
    password: FormErrors;
    password_confirmation: FormErrors;
  };

  type UserInfo = {
    id: number;
    firstName: string;
    lastName: string;
    fullName: string;
    imgUrl: string;
  };

  interface Interface {
    loggedUser: UserInfo;
    visitedUser: UserInfo;
    logo: string;
    loggedUserId: number;
  }

  type LessonCardProps = {
    title: string;
    description: string;
    isUnlocked: boolean;
    isFinished: boolean;
  };

  type PasswordNames = "currentPassword" | "newPassword" | "confirmNewPassword";

  /*
    ------------------------------------------------------
    THESE TYPES ARE FINAL AND WILL BE PUSHED TO PRODUCTION
    ------------------------------------------------------
  */

  interface UserSignupBody {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    password_confirmation: string;
  }

  // Signup Error from Frontend
  type FrontendErrorKeys =
    | "firstname"
    | "lastname"
    | "email"
    | "password"
    | "password_confirmation";

  type FrontendErrorValues = {
    hasError: boolean;
    errorMessage: string;
  };

  type FrontendError = Record<FrontendErrorKeys, FrontendErrorValues>;

  // Signup Error from Backend
  type SystemErrorData = {
    message: string;
    errors: SystemErrorErrors;
  };

  type SystemErrorErrors = {
    email?: string[];
  };

  interface SystemError {
    status: number;
    data: SystemErrorData;
  }

  type User = {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    avatar_url: string;
    created_at: string;
    updated_at: string;
  };

  interface SuccessfulSignupResponse {
    signupSuccess: string;
  }
}
