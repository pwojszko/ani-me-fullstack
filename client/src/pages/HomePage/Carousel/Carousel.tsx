import { Link } from "react-router-dom";
import { useGetAnimeListQuery } from "../../../store/anime/animeService";
import classNames from "classnames/bind";
import styles from "./Carousel.module.scss";
import { Anime } from "@store/anime/AnimeTypes";
import { useRef } from "react";
const cx = classNames.bind(styles);

const Carousel = ({ path, title }: { path: string; title: string }) => {
  const { data } = useGetAnimeListQuery(path);
  const ref = useRef<HTMLDivElement>(null);

  const handleScrollRight = () => {
    if (ref.current) {
      const finalPosition = ref.current?.scrollLeft + ref.current?.offsetWidth;
      ref.current?.scrollTo({
        left: finalPosition,
        behavior: "smooth",
      });
    }
  };

  const handleScrollLeft = () => {
    if (ref.current) {
      const finalPosition = ref.current?.scrollLeft - ref.current?.offsetWidth;
      ref.current?.scrollTo({
        left: finalPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={cx("carousel")}>
      <div className={cx("title-container")}>
        <h2 className={cx("title")}>{title}</h2>
        <div className={cx("line")}></div>
      </div>

      <button
        className={cx("button", "left")}
        onClick={handleScrollLeft}
        aria-label="scroll left"
      >
        {"<"}
      </button>
      <button
        className={cx("button", "right")}
        onClick={handleScrollRight}
        aria-label="scroll right"
      >
        {">"}
      </button>
      <div className={cx("list")} ref={ref}>
        {data?.map((anime: Anime) => (
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
      </div>
    </section>
  );
};

export default Carousel;
