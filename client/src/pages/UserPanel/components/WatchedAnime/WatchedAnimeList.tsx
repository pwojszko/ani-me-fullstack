import { useState } from "react";
import WatchedAnimeCard from "./WatchedAnimeCard";
import classNames from "classnames/bind";
import styles from "./WatchedAnime.module.scss";
import { useGetWatchedQuery } from "src/store/watched/watchedService";
const cx = classNames.bind(styles);

const WatchedAnimeList = () => {
  const { data: watchedList } = useGetWatchedQuery();

  const [isActive, setIsActive] = useState(false);

  const handleClickExpandList = () => setIsActive((prev) => !prev);

  // const button = watchedAnimeMap?.length >= 4 && (
  //   <div className={cx("watched-anime__button-container")}>
  //     <button
  //       onClick={handleClickExpandList}
  //       className={cx("watched-anime__button", {
  //         "watched-anime__button--active": isActive,
  //       })}
  //     >
  //       <div
  //         className={cx(
  //           "watched-anime__button-line-1",
  //           "watched-anime__button-line"
  //         )}
  //       ></div>
  //       <div
  //         className={cx(
  //           "watched-anime__button-line-2",
  //           "watched-anime__button-line"
  //         )}
  //       ></div>
  //       <div
  //         className={cx(
  //           "watched-anime__button-line-3",
  //           "watched-anime__button-line"
  //         )}
  //       ></div>
  //       <div
  //         className={cx(
  //           "watched-anime__button-line-4",
  //           "watched-anime__button-line"
  //         )}
  //       ></div>
  //     </button>
  //   </div>
  // );

  // if (!watchedAnimeMap?.length) return null;

  return (
    <div className={cx("watched-anime")}>
      <h2 className={cx("watched-anime__title")}>Your list</h2>
      <div
        className={cx("watched-anime__list", {
          "watched-anime__list--active": isActive,
        })}
      >
        {watchedList?.map((watched) => (
          <WatchedAnimeCard key={watched.id} watched={watched} />
        ))}
      </div>

      {/* {button} */}
    </div>
  );
};

export default WatchedAnimeList;
