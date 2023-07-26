import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import { BsArrowBarRight, BsPersonPlusFill } from "react-icons/bs";
import SlidingButton from "src/components/SlidingButton/SlidingButton";
import styles from "./Navigation.module.scss";

const cx = classNames.bind(styles);

type UnauthorizedNavigationProps = {
  closeHeader: () => void;
};

const UnauthorizedNavigation = ({
  closeHeader,
}: UnauthorizedNavigationProps) => {
  return (
    <>
      <Link to="/login" onClick={closeHeader}>
        <div className={cx("item")}>
          <BsArrowBarRight />
          <SlidingButton
            buttonClass={cx("button")}
            firstText="Log in"
            secondText="Log in"
          />
        </div>
      </Link>

      <Link to="/register" onClick={closeHeader}>
        <div className={cx("item")}>
          <BsPersonPlusFill />
          <SlidingButton
            buttonClass={cx("button")}
            firstText="Sign in"
            secondText="Sign in"
          />
        </div>
      </Link>
    </>
  );
};

export default UnauthorizedNavigation;
