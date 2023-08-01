import { useState } from "react";
import WatchedAnimeCard from "./WatchedAnimeCard";
import classNames from "classnames/bind";
import styles from "./WatchedAnime.module.scss";
import { useGetWatchedListQuery } from "src/store/watched/watchedService";
const cx = classNames.bind(styles);

const WatchedAnimeList = () => {
  const [isActive, setIsActive] = useState(false);

  const { data: watchedList } = useGetWatchedListQuery();

  const handleClickExpandList = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div className={cx("watched-anime")}>
      <h2 className={cx("title")}>Your list</h2>
      <div className={cx("list", { active: isActive })}>
        {watchedList?.map((watched) => (
          <WatchedAnimeCard key={watched.id} watched={watched} />
        ))}
      </div>

      <div className={cx("expand-button")}>
        {watchedList && watchedList.length >= 3 && (
          <button
            onClick={handleClickExpandList}
            className={cx("button", { active: isActive })}
          >
            <div className={cx("line-1", "line")}></div>
            <div className={cx("line-2", "line")}></div>
            <div className={cx("line-3", "line")}></div>
            <div className={cx("line-4", "line")}></div>
          </button>
        )}
      </div>
    </div>
  );
};

export default WatchedAnimeList;
