import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import { BsDoorOpenFill, BsPersonLinesFill } from "react-icons/bs";
import SlidingButton from "src/components/SlidingButton/SlidingButton";
import styles from "./Navigation.module.scss";

const cx = classNames.bind(styles);

type AuthorizedNavigationProps = {
  closeHeader: () => void;
  handleLogout: () => void;
};

const AuthorizedNavigation = ({
  closeHeader,
  handleLogout,
}: AuthorizedNavigationProps) => {
  return (
    <>
      <Link to="/userpanel" onClick={closeHeader}>
        <div className={cx("item")}>
          <BsPersonLinesFill />
          <SlidingButton
            buttonClass={cx("button")}
            firstText={"Profile"}
            secondText="User Panel"
          />
        </div>
      </Link>

      <div onClick={handleLogout} className={cx("logout")}>
        <div className={cx("item")}>
          <BsDoorOpenFill />
          <SlidingButton
            buttonClass={cx("button")}
            firstText="Log out"
            secondText="Sure?"
          />
        </div>
      </div>
    </>
  );
};

export default AuthorizedNavigation;
