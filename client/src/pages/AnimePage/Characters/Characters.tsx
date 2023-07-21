import { useRef } from "react";
import { useParams } from "react-router-dom";
import { skipToken } from "@reduxjs/toolkit/query/react";
import classNames from "classnames/bind";
import { useGetAnimeCharactersQuery } from "src/store/anime/animeService";
import Character from "./Character";
import styles from "./Characters.module.scss";

const cx = classNames.bind(styles);

const Characters = () => {
  const { id } = useParams();
  const { data } = useGetAnimeCharactersQuery(id ?? skipToken);
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
    <div className={cx("characters-wrapper")}>
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

      <div className={cx("characters")} ref={ref}>
        {data?.map((item) => (
          <Character data={item} />
        ))}
      </div>
    </div>
  );
};

export default Characters;
