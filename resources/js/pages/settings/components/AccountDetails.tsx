import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";

import { loggedUser } from "../../../utils/dummies/data";
import { validatePersonalInfo } from "../../../utils/validators/validatePersonalInfo";

const AccountDetails = () => {
  const [info, setInfo] = useState({
    firstName: loggedUser.firstName,
    lastName: loggedUser.lastName,
  });

  const [errors, setErrors] = useState({
    firstName: {
      hasError: false,
      errorMessage: "",
    },
    lastName: {
      hasError: false,
      errorMessage: "",
    },
  });

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfo((previousInfo) => ({
      ...previousInfo,
      [e.target.name]: e.target.value,
    }));
  };

  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    setErrors((previousErrors) => ({
      ...previousErrors,
      [e.target.name]: validatePersonalInfo(e.target.value),
    }));
  };

  return (
    <Box w="md">
      <form
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <FormControl mb={5} isInvalid={errors.firstName.hasError}>
          <FormLabel htmlFor="firstName">First Name</FormLabel>
          <Input
            id="firstName"
            name="firstName"
            type="text"
            value={info.firstName}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
          />
          <FormErrorMessage>{errors.firstName.errorMessage}</FormErrorMessage>
        </FormControl>
        <FormControl mb={5} isInvalid={errors.lastName.hasError}>
          <FormLabel htmlFor="lastName">Last Name</FormLabel>
          <Input
            id="lastName"
            name="lastName"
            type="text"
            value={info.lastName}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
          />
          <FormErrorMessage>{errors.lastName.errorMessage}</FormErrorMessage>
        </FormControl>
        <Button>Update information</Button>
      </form>
    </Box>
  );
};

export default AccountDetails;
