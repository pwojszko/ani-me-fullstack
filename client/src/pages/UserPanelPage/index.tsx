import { useEffect, useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import WatchedAnimeList from "./components/WatchedAnime/WatchedAnimeList";
import UserProfile from "./components/UserProfile/UserProfile";
import ShouldRedirect from "../../utils/ShouldRedirect";
import getData from "../../utils/auth/getData";
import classNames from "classnames/bind";
import styles from "./UserPanelPage.module.scss";
const cx = classNames.bind(styles);

export default function UserPanelPage() {
  const { isAuth, userId } = useAuthContext();
  const [watchedAnimeList, setWatchedAnimeList] = useState({});

  ShouldRedirect(!isAuth);

  useEffect(() => {
    getData("users/" + userId + "/libary").then((data) =>
      setWatchedAnimeList(data)
    );
  }, [userId]);

  return (
    <div className={cx("userpanel-page", "grid__userpanel-page")}>
      <div className={cx("userpanel-page-watermark")}>
        <h1 className={cx("userpanel-page-watermark__title")}>User panel</h1>
      </div>
      <div className={cx("userpanel-page__container")}>
        <UserProfile />
        <WatchedAnimeList watchedAnimeList={watchedAnimeList} />
      </div>
    </div>
  );
}
