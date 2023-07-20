import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import ShouldRedirect from "../../utils/ShouldRedirect";
import LoginHandler from "./LoginHandler";
import { useDispatch } from "react-redux";
import classNames from "classnames/bind";
import styles from "./LoginPage.module.scss";
const cx = classNames.bind(styles);

enum FormValues {
  email = "email",
  password = "password",
}

export default function LoginPage() {
  const dispatch = useDispatch();
  const { isAuth } = useAuthContext();
  const [formData, setFormData] = useState({
    [FormValues.email]: "",
    [FormValues.password]: "",
  });

  const handleOnInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    },
    []
  );

  function handleLogin(e: { preventDefault: () => void }) {
    e.preventDefault();
    const { email, password } = formData;
    LoginHandler(dispatch, email, password);
  }

  ShouldRedirect(!!isAuth);

  const loginForm = (
    <form className={cx("login-page__form")} onSubmit={handleLogin}>
      <label className={cx("login-page__label", "login-page__label--email")}>
        <input
          className={cx("login-page__input", "login-page__input--email")}
          type="email"
          name={FormValues.email}
          onChange={handleOnInputChange}
          required
          autoFocus
          placeholder="Email"
        />
      </label>
      <label className={cx("login-page__label", "login-page__label--password")}>
        <input
          className={cx("login-page__input", "login-page__input--password")}
          type="password"
          name={FormValues.password}
          onChange={handleOnInputChange}
          required
          placeholder="Password"
        />
      </label>
      <button className={cx("login-page__submit", "button")} type="submit">
        Sign up
      </button>
    </form>
  );

  return (
    <div className={cx("login-page", "grid__login-page")}>
      <div className={cx("login-page__title-container")}>
        <h1 className={cx("login-page__title")}>Log in</h1>
      </div>
      <div className={cx("login-page__form-container")}>
        {loginForm}
        <div className={cx("login-page__redirect")}>
          <div className={cx("login-page__redirect-container")}>
            <p className={cx("login-page__text")}>Not registered yet?</p>
            <Link to="/register">
              <button className={cx("login-page__button", "button")}>
                Create account
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
