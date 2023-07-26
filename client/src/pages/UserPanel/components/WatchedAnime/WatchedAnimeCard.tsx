import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import SlidingButton from "src/components/SlidingButton/SlidingButton";
import { useGetAnimeByIdQuery } from "src/store/anime/animeService";
import { Watched } from "src/store/watched/WatchedTypes";
import styles from "./WatchedAnime.module.scss";

const cx = classNames.bind(styles);

type WatchedAnimeProps = {
  watched: Watched;
};

const WatchedAnimeCard = ({ watched }: WatchedAnimeProps) => {
  const { data: anime } = useGetAnimeByIdQuery(watched.id);

  return (
    <div className={cx("watched-anime-card")}>
      {anime && (
        <>
          <img
            className={cx("watched-anime-card__image")}
            src={anime.images.webp.image_url}
            alt={anime.title}
          />
          <p className={cx("watched-anime-card__title")}>{anime.title}</p>
          <p className={cx("watched-anime-card__rating")}>
            Rate: <strong>{watched.rate} / 10</strong>
          </p>
          <Link to={`/anime/${anime.mal_id}`}>
            <SlidingButton
              buttonClass={cx("watched-anime-card__button")}
              icon={<div></div>}
              secondText="Go"
            />
          </Link>
        </>
      )}
    </div>
  );
};

export default WatchedAnimeCard;
