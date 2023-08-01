import classNames from "classnames/bind";
import PreloadingFrame from "src/components/PreloadingFrame/PreloadingFrame";
import { Anime } from "src/store/anime/AnimeTypes";
import { Watched } from "src/store/watched/WatchedTypes";
import ActionButtons from "./ActionButtons.tsx/ActionButtons";
import styles from "./Image.module.scss";

const cx = classNames.bind(styles);

type ImageProps = {
  isAuth: boolean;
  isWatched: boolean;
  anime?: Anime;
  watched?: Watched;
  handleRate: (point: number) => void;
  handleWatch: () => void;
};

const Image = ({
  isAuth,
  isWatched,
  anime,
  watched,
  handleRate,
  handleWatch,
}: ImageProps) => {
  return (
    <div className={cx("container")}>
      {anime ? (
        <>
          {isAuth && (
            <ActionButtons
              handleRate={handleRate}
              handleWatch={handleWatch}
              watchedRate={watched?.rate}
              isWatched={isWatched}
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
