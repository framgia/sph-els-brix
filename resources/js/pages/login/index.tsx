import {
  Flex,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Text,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";

import {
  validateLogin,
  validateLoginOnSubmit,
} from "../../utils/validators/validateLogin";

const Login = () => {
  const [formInputs, setFormInputs] = useState<ELearning.LoginInputs>({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: {
      hasError: false,
      errorMessage: "",
    },
    password: {
      hasError: false,
      errorMessage: "",
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  // This will be replaced by RTK Query
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      const errors = validateLoginOnSubmit(formInputs, formErrors);
      setFormErrors((previousErrors) => ({
        ...previousErrors,
        ...errors,
      }));
    }, 2000);

    setFormInputs((previousFormInputs) => ({
      ...previousFormInputs,
      password: "",
    }));
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormInputs((previousFormInputs) => ({
      ...previousFormInputs,
      [e.target.name]: e.target.value,
    }));
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    const errors = validateLogin(e.target.name, e.target.value, formErrors);
    setFormErrors((previousErrors) => ({
      ...previousErrors,
      ...errors,
    }));
  };

  return (
    <Flex w="100vw" justifyContent="center" paddingTop="1">
      <Flex w="sm" flexDirection="column">
        <Heading as="h1" textAlign="center" marginBottom="10">
          E-Learning Portal
        </Heading>
        <Flex
          w="full"
          p="5"
          borderWidth="1px"
          rounded="md"
          flexDirection="column"
        >
          <Heading as="h2" size="md" marginBottom="3">
            Sign-In
          </Heading>
          <form onSubmit={onSubmit}>
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
              marginBottom="3"
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
            <Button
              type="submit"
              w="full"
              fontWeight="normal"
              isLoading={isLoading}
            >
              Login
            </Button>
          </form>
        </Flex>
        <Flex w="full" p="5" flexDirection="column">
          <Text textAlign="center" marginBottom="1.5" fontSize="sm">
            No account yet?
          </Text>
          <Link href="signup">
            <Button w="full" fontWeight="normal">
              Sign-Up
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Login;
