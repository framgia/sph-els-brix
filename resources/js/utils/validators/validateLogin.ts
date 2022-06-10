import { isRequired } from "../helpers";

export function validateLogin(
    name: string,
    value: string,
    formErrors: ELearning.LoginFormErrors
) {
    switch (name) {
        case "email":
            if (isRequired(value)) {
                formErrors = {
                    ...formErrors,
                    email: {
                        hasError: true,
                        errorMessage: "Email is required",
                    },
                };
            } else {
                formErrors = {
                    ...formErrors,
                    email: {
                        hasError: false,
                        errorMessage: "",
                    },
                };
            }
            break;
        case "password":
            if (isRequired(value)) {
                formErrors = {
                    ...formErrors,
                    password: {
                        hasError: true,
                        errorMessage: "Password is required",
                    },
                };
            } else {
                formErrors = {
                    ...formErrors,
                    password: {
                        hasError: false,
                        errorMessage: "",
                    },
                };
            }
            break;
        default:
            formErrors = {
                email: {
                    hasError: false,
                    errorMessage: "",
                },
                password: {
                    hasError: false,
                    errorMessage: "",
                },
            };
    }

    return formErrors;
}

export function validateLoginOnSubmit(
    inputs: ELearning.LoginInputs,
    formErrors: ELearning.LoginFormErrors
) {
    for (const [key, value] of Object.entries(inputs)) {
        formErrors = {
            ...formErrors,
            ...validateLogin(key, value, formErrors),
        };
    }

    return formErrors;
}
