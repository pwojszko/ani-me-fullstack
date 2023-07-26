import { auth } from "../../../../firebase";
import image from "../../../../assets/images/placeholder.webp";
import classNames from "classnames/bind";
import styles from "./UserProfile.module.scss";
const cx = classNames.bind(styles);

const UserProfile = () => {
  const user = auth?.currentUser?.email;

  return (
    <section className={cx("user-profile")}>
      <div className={cx("title-container")}>
        <h2 className={cx("title-container__title")}>{user}</h2>
        <div className={cx("title-container__line")}></div>
      </div>
    </section>
  );
};

export default UserProfile;
