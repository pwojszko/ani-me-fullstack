import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import { useForm } from "react-hook-form";
import { usePostLoginMutation } from "src/store/auth/authService";
import styles from "./Login.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidationSchema } from "./loginValidation";
import { InferType } from "yup";

const cx = classNames.bind(styles);

const Login = () => {
  const [login] = usePostLoginMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidationSchema),
  });

  const onSubmit = (data: InferType<typeof loginValidationSchema>) => {
    login(data).catch((err) => console.log(err));
  };

  return (
    <div className={cx("login", "grid__login-page")}>
      <div className={cx("title-container")}>
        <h1 className={cx("title")}>Log in</h1>
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
              type="email"
            />
            <p className={cx("error")}>{errors.email?.message}</p>
          </label>

          <label className={cx("label")}>
            <input
              {...register("password")}
              className={cx("input")}
              placeholder="Password"
              type="password"
            />
            <p className={cx("error")}>{errors.password?.message}</p>
          </label>

          <button type="submit" className={cx("submit", "button")}>
            Login
          </button>
        </form>

        <div className={cx("redirect")}>
          <div className={cx("redirect-container")}>
            <p className={cx("text")}>Not registered yet?</p>
            <Link to="/register">
              <button className={cx("button", "button")}>Create account</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
