import { useGetAnimeByIdQuery } from "../../../../store/anime/animeService";
import { skipToken } from "@reduxjs/toolkit/query/react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import SlidingButton from "../../../../components/SlidingButton/SlidingButton";
import classNames from "classnames/bind";
import styles from "./WatchedAnime.module.scss";
const cx = classNames.bind(styles);

type WatchedAnimeType = {
  mal_id: string;
  rate: number;
  isWatched: boolean;
};

const WatchedAnimeCard = ({ mal_id, rate, isWatched }: WatchedAnimeType) => {
  const { data } = useGetAnimeByIdQuery(mal_id ?? skipToken);
  if (!data) return null;
  const { title } = data.data;
  const { image_url } = data.data.images.webp;

  const rating = !!rate && (
    <>
      Rate: <strong>{rate} / 5</strong>
    </>
  );
  const unwatchedLabel = isWatched ?? "Not watched yet";

  return (
    <div className={cx("watched-anime-card")}>
      <img
        className={cx("watched-anime-card__image")}
        src={image_url}
        alt={title}
      />
      <p className={cx("watched-anime-card__title")}>{title}</p>
      <p className={cx("watched-anime-card__rating")}>{rating}</p>
      <p className={cx("watched-anime-card__status")}>{unwatchedLabel}</p>
      <Link to={`/anime/${mal_id}`}>
        <SlidingButton
          buttonClass={cx("watched-anime-card__button")}
          icon={<FontAwesomeIcon icon={faArrowRight} />}
          secondText="Go"
        />
      </Link>
    </div>
  );
};

export default WatchedAnimeCard;
