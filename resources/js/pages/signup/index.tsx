import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

import {
  validateSignup,
  validateSignupOnSubmit,
} from "../../utils/validators/validateSignup";

function Signup() {
  const [formInputs, setFormInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({
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
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      const errors = validateSignupOnSubmit(
        formInputs,
        formErrors,
        formInputs.password
      );
      setFormErrors((previousErrors) => ({
        ...previousErrors,
        ...errors,
      }));
    }, 2000);

    setFormInputs((previousFormInputs) => ({
      ...previousFormInputs,
      password: "",
      confirmPassword: "",
    }));
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormInputs((previousFormInputs) => ({
      ...previousFormInputs,
      [e.target.name]: e.target.value,
    }));
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    const errors = validateSignup(
      e.target.name,
      e.target.value,
      formErrors,
      formInputs.password
    );
    setFormErrors((previousErrors) => ({
      ...previousErrors,
      ...errors,
    }));
  };

  return (
    <Flex w="100vw" justifyContent="center" paddingTop="1">
      <Flex w="sm" flexDirection="column">
        <Heading as="h1" textAlign="center" marginBottom="10">
          Welcome to E-Learning System
        </Heading>
        <Flex
          w="full"
          p="5"
          borderWidth="1px"
          rounded="md"
          flexDirection="column"
        >
          <Heading as="h2" size="md" marginBottom="3">
            Sign-Up
          </Heading>
          <form onSubmit={onSubmit}>
            <FormControl
              marginBottom="1.5"
              isInvalid={formErrors.firstName.hasError}
            >
              <FormLabel htmlFor="firstName" fontSize="sm">
                First Name
              </FormLabel>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Enter your first name"
                value={formInputs.firstName}
                onChange={onChange}
                onBlur={onBlur}
                autoComplete="off"
              />
              <FormErrorMessage>
                {formErrors.firstName.errorMessage}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              marginBottom="1.5"
              isInvalid={formErrors.lastName.hasError}
            >
              <FormLabel htmlFor="lastName" fontSize="sm">
                Last Name
              </FormLabel>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Enter your last name"
                value={formInputs.lastName}
                onChange={onChange}
                onBlur={onBlur}
                autoComplete="off"
              />
              <FormErrorMessage>
                {formErrors.lastName.errorMessage}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              marginBottom="1.5"
              isInvalid={formErrors.email.hasError}
            >
              <FormLabel htmlFor="email" fontSize="sm">
                Email Address
              </FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                value={formInputs.email}
                onChange={onChange}
                onBlur={onBlur}
                autoComplete="off"
              />
              <FormErrorMessage>
                {formErrors.email.errorMessage}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              marginBottom="1.5"
              isInvalid={formErrors.password.hasError}
            >
              <FormLabel htmlFor="password" fontSize="sm">
                Password
              </FormLabel>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={formInputs.password}
                onChange={onChange}
                onBlur={onBlur}
              />
              <FormErrorMessage>
                {formErrors.password.errorMessage}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              marginBottom="3"
              isInvalid={formErrors.confirmPassword.hasError}
            >
              <FormLabel htmlFor="confirmPassword" fontSize="sm">
                Confirm Password
              </FormLabel>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={formInputs.confirmPassword}
                onChange={onChange}
                onBlur={onBlur}
              />
              <FormErrorMessage>
                {formErrors.confirmPassword.errorMessage}
              </FormErrorMessage>
            </FormControl>
            <Button
              type="submit"
              w="full"
              fontWeight="normal"
              isLoading={isLoading}
            >
              Register
            </Button>
          </form>
        </Flex>
        <Flex w="full" p="5" flexDirection="column">
          <Text textAlign="center" marginBottom="1.5" fontSize="sm">
            Already have an account?
          </Text>
          <Link to="/">
            <Button w="full" fontWeight="normal">
              Sign-In
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Signup;
