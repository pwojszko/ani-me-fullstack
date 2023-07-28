import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import SlidingButton from "src/components/SlidingButton/SlidingButton";
import { useGetAnimeByIdQuery } from "src/store/anime/animeService";
import { Watched } from "src/store/watched/WatchedTypes";
import styles from "./WatchedAnime.module.scss";
import { AiOutlineLoading } from "react-icons/ai";

const cx = classNames.bind(styles);

type WatchedAnimeProps = {
  watched: Watched;
};

const WatchedAnimeCard = ({ watched }: WatchedAnimeProps) => {
  const { data: anime, isLoading } = useGetAnimeByIdQuery(watched.id);

  return (
    <div className={cx("watched-anime-card")}>
      <>
        {isLoading && <AiOutlineLoading className={cx("loading")} />}

        <img
          className={cx("image")}
          src={anime?.images.webp.image_url}
          alt={anime?.title}
        />

        <p className={cx("title")}>{anime?.title}</p>

        <p className={cx("rating")}>
          {watched.rate ? <strong>{watched.rate} / 10</strong> : null}
        </p>

        {anime?.mal_id && (
          <Link to={`/anime/${anime?.mal_id}`}>
            <SlidingButton
              buttonClass={cx("button")}
              icon={">"}
              secondText="Go"
            />
          </Link>
        )}
      </>
    </div>
  );
};

export default WatchedAnimeCard;
