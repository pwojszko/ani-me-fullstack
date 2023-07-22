import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
const cx = classNames.bind(styles);

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => setIsActive((prev) => !prev);

  return (
    <header
      className={cx("header", "grid__header", { "header--active": isActive })}
    >
      <div className={cx("header_container")}>
        <div className={cx("header__logo-container")}>
          <Link to="/">
            <div className={cx("header__logo")}>
              Ani <span className={cx("header__logo--bold")}>me</span>
            </div>
          </Link>
        </div>
        <SearchBar />
        <Navigation setIsActive={setIsActive} />
      </div>
      <div className={cx("header__button")} onClick={handleClick}>
        <div
          className={cx("header__button-line", "header__button-line-1")}
        ></div>
        <div
          className={cx("header__button-line", "header__button-line-2")}
        ></div>
        <div
          className={cx("header__button-line", "header__button-line-3")}
        ></div>
        <div
          className={cx("header__button-line", "header__button-line-4")}
        ></div>
      </div>
    </header>
  );
};

export default Header;
