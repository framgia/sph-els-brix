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

  type UserInfo = {
    id: number;
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
}
