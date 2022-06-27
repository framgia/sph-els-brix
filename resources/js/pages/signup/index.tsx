import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Heading,
  Input,
  Text,
  Alert,
  AlertIcon,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";

import { validateSignup } from "../../utils/validators/validateSignup";
import { useSignupMutation } from "../../store/user/api/userApi";

const Signup = () => {
  const [signup] = useSignupMutation();

  const [formInputs, setFormInputs] = useState<ELearning.UserSignupBody>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [formErrors, setFormErrors] = useState<ELearning.FrontendError>({
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
  });

  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    setSuccessMessage(null);

    signup(formInputs)
      .unwrap()
      .then((payload) => {
        setFormInputs((previousFormInputs) => ({
          ...previousFormInputs,
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          password_confirmation: "",
        }));

        setIsLoading(false);
        setSuccessMessage(payload.signupSuccess);
      })
      .catch((error: ELearning.SystemError) => {
        for (const [k, v] of Object.entries(error.data.errors)) {
          setFormErrors((previousErrors) => ({
            ...previousErrors,
            [k]: {
              hasError: true,
              errorMessage: v[0],
            },
          }));
        }

        setFormInputs((previousFormInputs) => ({
          ...previousFormInputs,
          password: "",
          confirmPassword: "",
        }));

        setIsLoading(false);
      });
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
              isInvalid={formErrors.firstname.hasError}
            >
              <FormLabel htmlFor="firstname" fontSize="sm">
                First Name
              </FormLabel>
              <Input
                id="firstname"
                name="firstname"
                type="text"
                placeholder="Enter your first name"
                value={formInputs.firstname}
                onChange={onChange}
                onBlur={onBlur}
                autoComplete="off"
              />
              <FormErrorMessage>
                {formErrors.firstname.errorMessage}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              marginBottom="1.5"
              isInvalid={formErrors.lastname.hasError}
            >
              <FormLabel htmlFor="lastname" fontSize="sm">
                Last Name
              </FormLabel>
              <Input
                id="lastname"
                name="lastname"
                type="text"
                placeholder="Enter your last name"
                value={formInputs.lastname}
                onChange={onChange}
                onBlur={onBlur}
                autoComplete="off"
              />
              <FormErrorMessage>
                {formErrors.lastname.errorMessage}
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
              isInvalid={formErrors.password_confirmation.hasError}
            >
              <FormLabel htmlFor="password_confirmation" fontSize="sm">
                Confirm Password
              </FormLabel>
              <Input
                id="password_confirmation"
                name="password_confirmation"
                type="password"
                placeholder="Confirm your password"
                value={formInputs.password_confirmation}
                onChange={onChange}
                onBlur={onBlur}
              />
              <FormErrorMessage>
                {formErrors.password_confirmation.errorMessage}
              </FormErrorMessage>
            </FormControl>
            {successMessage && (
              <Alert status="success" mb={1.5}>
                <AlertIcon />
                {successMessage}
              </Alert>
            )}
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
          <Link href="/">
            <Button w="full" fontWeight="normal">
              Sign-In
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Signup;
