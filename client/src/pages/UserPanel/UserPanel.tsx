import WatchedAnimeList from "./components/WatchedAnime/WatchedAnimeList";
import classNames from "classnames/bind";
import styles from "./UserPanel.module.scss";
const cx = classNames.bind(styles);

const UserPanel = () => {
  return (
    <div className={cx("userpanel-page", "grid__userpanel-page")}>
      <div className={cx("userpanel-page-watermark")}>
        <h1 className={cx("userpanel-page-watermark__title")}>User panel</h1>
      </div>
      <div className={cx("userpanel-page__container")}>
        {/* <UserProfile /> */}
        <WatchedAnimeList />
      </div>
    </div>
  );
};

export default UserPanel;
