import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import SlidingButton from "src/components/SlidingButton/SlidingButton";
import { useGetAnimeByIdQuery } from "src/store/anime/animeService";
import { Watched } from "src/store/watched/WatchedTypes";
import styles from "./WatchedAnime.module.scss";
import { AiOutlineLoading } from "react-icons/ai";
import PreloadingFrame from "src/components/PreloadingFrame/PreloadingFrame";

const cx = classNames.bind(styles);

type WatchedAnimeProps = {
  watched: Watched;
};

const WatchedAnimeCard = ({ watched }: WatchedAnimeProps) => {
  const { data: anime, isLoading } = useGetAnimeByIdQuery(watched.id);
  const navigate = useNavigate();

  return isLoading ? (
    <PreloadingFrame height="170px" />
  ) : (
    <div className={cx("watched-anime-card")}>
      <img
        className={cx("image")}
        src={anime?.images.webp.image_url}
        alt={anime?.title}
      />

      <p className={cx("title")}>{anime?.title}</p>

      <p className={cx("rating")}>
        {watched.rate ? <strong>{watched.rate} / 5</strong> : null}
      </p>

      {anime?.mal_id && (
        <SlidingButton
          buttonClass={cx("button")}
          icon={">"}
          secondText="Go"
          onClick={() => {
            navigate(`/anime/${anime?.mal_id}`);
          }}
        />
      )}
    </div>
  );
};

export default WatchedAnimeCard;
