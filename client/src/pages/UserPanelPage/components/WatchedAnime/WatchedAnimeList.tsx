import { useState } from "react";
import WatchedAnimeCard from "./WatchedAnimeCard";
import classNames from "classnames/bind";
import styles from "./WatchedAnime.module.scss";
const cx = classNames.bind(styles);

type WatchedAnimeListType = {
  watchedAnimeList: {
    mal_id?: number;
    rate?: number;
    isWatched?: boolean;
  };
};

const WatchedAnimeList = (watchedAnimeList: WatchedAnimeListType) => {
  const [isActive, setIsActive] = useState(false);

  const handleClickExpandList = () => setIsActive((prev) => !prev);

  const watchedAnimeMap =
    watchedAnimeList.watchedAnimeList &&
    Object.values(watchedAnimeList.watchedAnimeList).map((anime: any) => {
      return (
        <WatchedAnimeCard
          key={anime.mal_id}
          mal_id={anime.mal_id}
          rate={anime.rate}
          isWatched={anime.watched}
        />
      );
    });

  const watchedAnimeMapContainer = (
    <div
      className={cx("watched-anime__list", {
        "watched-anime__list--active": isActive,
      })}
    >
      {watchedAnimeMap}
    </div>
  );

  const button = watchedAnimeMap?.length >= 4 && (
    <div className={cx("watched-anime__button-container")}>
      <button
        onClick={handleClickExpandList}
        className={cx("watched-anime__button", {
          "watched-anime__button--active": isActive,
        })}
      >
        <div
          className={cx(
            "watched-anime__button-line-1",
            "watched-anime__button-line"
          )}
        ></div>
        <div
          className={cx(
            "watched-anime__button-line-2",
            "watched-anime__button-line"
          )}
        ></div>
        <div
          className={cx(
            "watched-anime__button-line-3",
            "watched-anime__button-line"
          )}
        ></div>
        <div
          className={cx(
            "watched-anime__button-line-4",
            "watched-anime__button-line"
          )}
        ></div>
      </button>
    </div>
  );

  if (!watchedAnimeMap?.length) return null;
  return (
    <div className={cx("watched-anime")}>
      <h2 className={cx("watched-anime__title")}>Your list</h2>
      {watchedAnimeMapContainer}
      {button}
    </div>
  );
};

export default WatchedAnimeList;
