import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import ShouldRedirect from "../../utils/ShouldRedirect";
import RegisterHandler from "./RegisterHandler";
import { useDispatch } from "react-redux";
import classNames from "classnames/bind";
import styles from "./RegisterPage.module.scss";
const cx = classNames.bind(styles);

enum FormValues {
  email = "email",
  password = "password",
  passwordRepeat = "passwordRepeat",
}

export default function RegisterPage() {
  const { isAuth } = useAuthContext();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    [FormValues.email]: "",
    [FormValues.password]: "",
    [FormValues.passwordRepeat]: "",
  });

  function hadleCreateAccount(e: { preventDefault: () => void }) {
    e.preventDefault();
    const { email, password, passwordRepeat } = formData;
    RegisterHandler(dispatch, email, password, passwordRepeat);
  }

  const handleOnInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  ShouldRedirect(!!isAuth);

  const registerForm = (
    <form className={cx("register-page__form")} onSubmit={hadleCreateAccount}>
      <label
        className={cx("register-page__label", "register-page__label--email")}
      >
        <input
          className={cx("register-page__input", "register-page__input--email")}
          type="email"
          name={FormValues.email}
          onChange={handleOnInputChange}
          required
          placeholder="Email"
          autoFocus
        />
      </label>
      <label
        className={cx("register-page__label", "register-page__label--password")}
      >
        <input
          className={cx(
            "register-page__input",
            "register-page__input--password"
          )}
          type="password"
          name={FormValues.password}
          onChange={handleOnInputChange}
          required
          placeholder="Password"
        />
      </label>
      <label
        className={cx(
          "register-page__label",
          "register-page__label--password-repeat"
        )}
      >
        <input
          className={cx(
            "register-page__input",
            "register-page__input--password-repeat"
          )}
          type="password"
          name={FormValues.passwordRepeat}
          onChange={handleOnInputChange}
          required
          placeholder="Repeat Password"
        />
      </label>
      <button className={cx("register-page__submit", "button")} type="submit">
        Sign up
      </button>
    </form>
  );

  return (
    <div className={cx("register-page", "grid__register-page")}>
      <div className={cx("register-page__title-container")}>
        <h1 className={cx("register-page__title")}>Sign in</h1>
      </div>
      <div className={cx("register-page__form-container")}>
        {registerForm}
        <div className={cx("register-page__redirect")}>
          <div className={cx("register-page__redirect-container")}>
            <p className={cx("register-page__text")}>
              Already have an account?
            </p>
            <Link to="/login">
              <button className={cx("register-page__button", "button")}>
                Log in
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
