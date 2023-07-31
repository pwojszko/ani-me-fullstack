import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { Anime } from "src/store/anime/AnimeTypes";
import {
  usePostAddWatchedMutation,
  usePostRemoveWatchedMutation,
} from "src/store/watched/watchedService";
import styles from "./Image.module.scss";
import { Watched } from "src/store/watched/WatchedTypes";
import PreloadingFrame from "src/components/PreloadingFrame/PreloadingFrame";
import UserActionButtons from "./UserActionButtons";

const cx = classNames.bind(styles);

type ImageProps = {
  anime?: Anime;
  animeId?: string;
  watched?: Watched[];
  isAuth: boolean;
};

const Image = ({ anime, animeId, watched, isAuth }: ImageProps) => {
  const [isWatched, setIsWatched] = useState(false);

  const [addWatched] = usePostAddWatchedMutation();
  const [removeWatched] = usePostRemoveWatchedMutation();

  const handleWatchedButton = (animeId: string) => {
    if (isWatched) {
      void removeWatched({ animeId });
    } else {
      void addWatched({ animeId });
    }
  };

  useEffect(() => {
    const isWatched = !!watched?.find((item) => item.id === animeId);
    setIsWatched(isWatched);
  }, [animeId, watched]);

  return (
    <div className={cx("container")}>
      {anime ? (
        <>
          {isAuth && (
            <UserActionButtons
              handleWatchedButton={handleWatchedButton}
              isWatched={isWatched}
              animeId={animeId}
            />
          )}
          <div className={cx("image-container")}>
            <img
              className={cx("image")}
              src={anime.images.webp.image_url}
              alt={anime.title}
            />
            {isWatched && (
              <span className={cx("is-watched")}>
                <span className={cx("is-watched-text")}>Seen</span>
              </span>
            )}
          </div>
        </>
      ) : (
        <PreloadingFrame height={"330px"} width={"250px"} />
      )}
    </div>
  );
};

export default Image;
