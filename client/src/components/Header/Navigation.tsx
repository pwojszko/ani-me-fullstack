import { Link } from "react-router-dom";
import SlidingButton from "../SlidingButton/SlidingButton";
import { useAuthContext } from "../../../contexts/AuthContext";
import {
  BsArrowBarRight,
  BsPersonPlusFill,
  BsPersonLinesFill,
  BsDoorOpenFill,
} from "react-icons/bs";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
const cx = classNames.bind(styles);

type navigationTypes = {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navigation = ({ setIsActive }: navigationTypes) => {
  const { isAuth, currentUser, logout } = useAuthContext();

  const closeHeader = () => {
    setIsActive(false);
  };

  const handleLogout = () => {
    setIsActive(false);
    logout();
  };

  const navButtons = (
    <>
      {isAuth ? (
        <>
          <Link to="/userpanel" onClick={closeHeader}>
            <div className={cx("navigation__item")}>
              <BsPersonLinesFill />
              <SlidingButton
                buttonClass={cx("navButton")}
                firstText={currentUser?.toString()}
                secondText="User Panel"
              />
            </div>
          </Link>

          <div onClick={handleLogout} className={cx("logout")}>
            <div className={cx("navigation__item")}>
              <BsDoorOpenFill />
              <SlidingButton
                buttonClass={cx("navButton")}
                firstText="Log out"
                secondText="Sure?"
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <Link to="/login" onClick={closeHeader}>
            <div className={cx("navigation__item")}>
              <BsArrowBarRight />
              <SlidingButton
                buttonClass={cx("navButton")}
                firstText="Log in"
                secondText="Log in"
              />
            </div>
          </Link>

          <Link to="/register" onClick={closeHeader}>
            <div className={cx("navigation__item")}>
              <BsPersonPlusFill />
              <SlidingButton
                buttonClass={cx("navButton")}
                firstText="Sign in"
                secondText="Sign in"
              />
            </div>
          </Link>
        </>
      )}
    </>
  );

  return <nav className={cx("navigation")}>{navButtons}</nav>;
};

export default Navigation;
