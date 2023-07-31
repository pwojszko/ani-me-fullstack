import classNames from "classnames/bind";
import { Anime } from "src/store/anime/AnimeTypes";
import styles from "./Content.module.scss";
import PreloadingFrame from "src/components/PreloadingFrame/PreloadingFrame";

const cx = classNames.bind(styles);

const Content = ({ anime }: { anime?: Anime }) => {
  return (
    <div className={cx("content")}>
      {anime ? (
        <>
          <h1 className={cx("title")}>{anime.title}</h1>
          <p className={cx("text")}>{anime.synopsis}</p>
        </>
      ) : (
        <>
          <PreloadingFrame height={"35px"} width={"650px"} />
          <PreloadingFrame height={"16px"} width={"650px"} quantity={6} />
          <PreloadingFrame height={"16px"} width={"450px"} />
        </>
      )}
    </div>
  );
};

export default Content;
