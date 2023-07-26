import classNames from "classnames/bind";
import AuthorizedNavigation from "./AuthorizedNavigation";
import UnauthorizedNavigation from "./UnauthorizedNavigation";
import styles from "./Navigation.module.scss";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { logout } from "src/store/auth/authSlice";

const cx = classNames.bind(styles);

type NavigationProps = {
  setIsActive: (isActive: boolean) => void;
  isActive: boolean;
};

const Navigation = ({ setIsActive, isActive }: NavigationProps) => {
  const auth = useAppSelector((state) => state.auth);
  const disapatch = useAppDispatch();

  const closeHeader = () => {
    setIsActive(false);
  };

  const handleLogout = () => {
    setIsActive(false);
    disapatch(logout());
  };

  return (
    <nav className={cx("navigation", { active: isActive })}>
      {auth.token ? (
        <AuthorizedNavigation
          closeHeader={closeHeader}
          handleLogout={handleLogout}
        />
      ) : (
        <UnauthorizedNavigation closeHeader={closeHeader} />
      )}
    </nav>
  );
};

export default Navigation;
