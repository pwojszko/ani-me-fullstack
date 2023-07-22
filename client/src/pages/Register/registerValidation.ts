import { string, object } from "yup";

const messages = {
  REQUIRED: "This field is required",
  INVALID_DATE: "Invalid date",
  TOO_LONG: "Too long",
  PASSWORD_MIN_8_LENGTH: "Password must be at least 8 characters",
  PASSWORD_REQ:
    "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character",
  NOT_A_MAIL: "Not a valid email",
};

const {
  REQUIRED,
  INVALID_DATE,
  TOO_LONG,
  PASSWORD_MIN_8_LENGTH,
  PASSWORD_REQ,
  NOT_A_MAIL,
} = messages;

export const registerValidationSchema = object().shape({
  email: string().email(NOT_A_MAIL).required(REQUIRED),
  password: string()
    .typeError(INVALID_DATE)
    .min(8, PASSWORD_MIN_8_LENGTH)
    .max(50, TOO_LONG)
    .required(REQUIRED)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
      PASSWORD_REQ
    ),
});
