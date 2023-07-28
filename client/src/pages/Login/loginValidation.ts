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

export const loginValidationSchema = object().shape({
  email: string().email(messages.NOT_A_MAIL).required(messages.REQUIRED),
  password: string()
    .typeError(messages.INVALID_DATE)
    .min(8, messages.PASSWORD_MIN_8_LENGTH)
    .max(50, messages.TOO_LONG)
    .required(messages.REQUIRED)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
      messages.PASSWORD_REQ
    ),
});
