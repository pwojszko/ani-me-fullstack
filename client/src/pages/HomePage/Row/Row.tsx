import { useGetAnimeListQuery } from "../../../store/anime/animeService";
import classNames from "classnames/bind";
import styles from "./Row.module.scss";
import Carousel from "../../../components/Carousel/Carousel";
import { Anime } from "@store/anime/AnimeTypes";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const Row = ({ path, title }: { path: string; title: string }) => {
  const { data } = useGetAnimeListQuery(path);

  return (
    <section className={cx("row")}>
      <div className={cx("title-container")}>
        <h2 className={cx("title")}>{title}</h2>
        <div className={cx("line")}></div>
      </div>

      <Carousel>
        {data &&
          data.map((anime: Anime) => (
            <div key={anime?.mal_id} className={cx("item")}>
              <Link to={`/anime/${anime?.mal_id}`}>
                <p className={cx("item-title")}>{anime?.title}</p>
              </Link>
              <img
                className={cx("item-image")}
                src={anime?.images?.webp?.image_url}
                alt={anime?.title}
              />
            </div>
          ))}
      </Carousel>
    </section>
  );
};

export default Row;
