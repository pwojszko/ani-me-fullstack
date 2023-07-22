import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import classNames from "classnames/bind";
import { yupResolver } from "@hookform/resolvers/yup";
import { InferType } from "yup";
import { usePostRegisterMutation } from "src/store/auth/authService";
import styles from "./Register.module.scss";
import { registerValidationSchema } from "./registerValidation";

const cx = classNames.bind(styles);

export default function RegisterPage() {
  const [registerUser] = usePostRegisterMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerValidationSchema),
  });

  const onSubmit = (data: InferType<typeof registerValidationSchema>) => {
    registerUser(data).catch((err) => console.log(err));
  };

  return (
    <div className={cx("register", "grid__register-page")}>
      <div className={cx("title-container")}>
        <h1 className={cx("title")}>Sign in</h1>
      </div>
      <div className={cx("form-container")}>
        <form
          className={cx("form")}
          onSubmit={(event) => void handleSubmit(onSubmit)(event)}
        >
          <label className={cx("label")}>
            <input
              {...register("email")}
              className={cx("input")}
              placeholder="Email"
            />
            <p className={cx("error")}>{errors.email?.message}</p>
          </label>

          <label className={cx("label")}>
            <input
              {...register("password")}
              className={cx("input")}
              placeholder="Password"
            />
            <p className={cx("error")}>{errors.password?.message}</p>
          </label>

          <button type="submit" className={cx("submit", "button")}>
            Register
          </button>
        </form>

        <div className={cx("redirect")}>
          <div className={cx("redirect-container")}>
            <p className={cx("text")}>Already have an account?</p>
            <Link to="/login">
              <button className={cx("button", "button")}>Log in</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
