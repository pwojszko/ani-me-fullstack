import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classNames from "classnames/bind";
import { AiFillEye } from "react-icons/ai";
import { Anime } from "src/store/anime/AnimeTypes";
import {
  useGetWatchedQuery,
  usePostAddWatchedMutation,
  usePostRemoveWatchedMutation,
} from "src/store/watched/watchedService";
import { useAppSelector } from "src/store/hooks";
import styles from "./Content.module.scss";

const cx = classNames.bind(styles);

const Content = ({ data }: { data?: Anime }) => {
  const [isWatched, setIsWatched] = useState(false);

  const isAuth = useAppSelector((state) => !!state.auth.token);
  const { id: animeId } = useParams();
  const { data: watched } = useGetWatchedQuery();
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
    <div className={cx("content")}>
      <div className={cx("content-part")}>
        <h1 className={cx("title")}>{data?.title}</h1>
        <p className={cx("text")}>{data?.synopsis}</p>
      </div>
      <div className={cx("container")}>
        {isAuth && (
          <div className={cx("buttons")}>
            <div className={cx("buttons-container")}>
              {/* <RateButtons
                scorePoints={[5, 4, 3, 2, 1]}
                animeId={id}
                userId={userId}
                data={data}
              /> */}

              <button
                onClick={() => animeId && handleWatchedButton(animeId)}
                className={cx("button-watched", { active: isWatched })}
              >
                <AiFillEye />
              </button>
            </div>
          </div>
        )}
        <div className={cx("image-container")}>
          <img
            className={cx("image")}
            src={data?.images?.webp?.image_url}
            alt={data?.title}
          />
          {isWatched && (
            <span className={cx("is-watched")}>
              <span className={cx("is-watched-text")}>Seen</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Content;
