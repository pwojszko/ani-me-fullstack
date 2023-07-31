import WatchedAnimeList from "./WatchedAnime/WatchedAnimeList";
import UserProfile from "./UserProfile/UserProfile";
import classNames from "classnames/bind";
import styles from "./Profile.module.scss";

const cx = classNames.bind(styles);

const Profile = () => {
  return (
    <div className={cx("profile")}>
      <div className={cx("watermark")}>
        <h1 className={cx("title")}>User panel</h1>
      </div>
      <div className={cx("container")}>
        <UserProfile />
        <WatchedAnimeList />
      </div>
    </div>
  );
};

export default Profile;
