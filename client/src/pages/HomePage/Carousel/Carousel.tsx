import { Link } from "react-router-dom";
import { useGetAnimeListQuery } from "../../../store/anime/animeService";
import classNames from "classnames/bind";
import styles from "./Carousel.module.scss";
import { Anime } from "@store/anime/AnimeTypes";
import { useRef, useState } from "react";
const cx = classNames.bind(styles);

const Carousel = ({ path, title }: { path: string; title: string }) => {
  const { data } = useGetAnimeListQuery(path);
  const ref = useRef<HTMLDivElement>(null);
  const [srollProgress, setSrollProgress] = useState<number>(0);

  const handleScroll = (toRight: boolean) => {
    if (ref.current) {
      const { scrollLeft, offsetWidth, scrollWidth, clientWidth } = ref.current;

      const scrollToPosition =
        scrollLeft + (toRight ? offsetWidth : -offsetWidth);
      const maxPosition = scrollWidth - clientWidth;
      const scrollProgress = (scrollToPosition / maxPosition) * 100;

      ref.current?.scrollTo({
        left: scrollToPosition,
        behavior: "smooth",
      });
      setSrollProgress(scrollProgress);
    }
  };

  return (
    <section className={cx("carousel")}>
      <div className={cx("title-container")}>
        <h2 className={cx("title")}>{title}</h2>
        <div className={cx("line")}></div>
      </div>

      <button
        className={cx("button", "left", { disabled: srollProgress <= 0 })}
        onClick={() => handleScroll(false)}
        aria-label="scroll left"
      >
        {"<"}
      </button>
      <button
        className={cx("button", "right", { disabled: srollProgress >= 100 })}
        onClick={() => handleScroll(true)}
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
