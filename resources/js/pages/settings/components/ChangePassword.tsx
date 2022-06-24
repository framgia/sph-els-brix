import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";

import {
  validatePassword,
  validatePasswordOnSubmit,
} from "../../../utils/validators/validatePassword";

const ChangePassword = () => {
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [errors, setErrors] = useState({
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
  });

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswords((previousPasswords) => ({
      ...previousPasswords,
      [e.target.name]: e.target.value,
    }));
  };

  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    setErrors((previousErrors) => ({
      ...previousErrors,
      [e.target.name]:
        e.target.name === "confirmNewPassword"
          ? validatePassword(
              e.target.name,
              e.target.value,
              passwords.newPassword
            )
          : validatePassword(
              e.target.name as ELearning.PasswordNames,
              e.target.value
            ),
    }));
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const onValidatePasswords = validatePasswordOnSubmit(passwords);

    if (onValidatePasswords) {
      return setErrors((previousErrors) => ({
        ...previousErrors,
        ...onValidatePasswords,
      }));
    }
  };

  return (
    <Box w="md">
      <form
        style={{
          display: "flex",
          flexDirection: "column",
        }}
        onSubmit={onSubmitHandler}
      >
        <FormControl mb={5} isInvalid={errors.currentPassword.hasError}>
          <FormLabel htmlFor="currentPassword">Current Password</FormLabel>
          <Input
            id="currentPassword"
            name="currentPassword"
            type="password"
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
          />
          <FormErrorMessage>
            {errors.currentPassword.errorMessage}
          </FormErrorMessage>
        </FormControl>
        <FormControl mb={5} isInvalid={errors.newPassword.hasError}>
          <FormLabel htmlFor="newPassword">New Password</FormLabel>
          <Input
            id="newPassword"
            name="newPassword"
            type="password"
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
          />
          <FormErrorMessage>{errors.newPassword.errorMessage}</FormErrorMessage>
        </FormControl>
        <FormControl mb={5} isInvalid={errors.confirmNewPassword.hasError}>
          <FormLabel htmlFor="confirmNewPassword">Current Password</FormLabel>
          <Input
            id="confirmNewPassword"
            name="confirmNewPassword"
            type="password"
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
          />
          <FormErrorMessage>
            {errors.confirmNewPassword.errorMessage}
          </FormErrorMessage>
        </FormControl>
        <Button type="submit">Change password</Button>
      </form>
    </Box>
  );
};

export default ChangePassword;
