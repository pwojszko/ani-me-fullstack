import { Link } from "react-router-dom";
import DraggableScroll from "./CarouselHandler";
import anime from "../../../../types/anime";
import { useGetAnimeListQuery } from "../../../../store/anime/animeService";
import classNames from "classnames/bind";
import styles from "./Carousel.module.scss";
const cx = classNames.bind(styles);

const Carousel = ({ path, title }: { path: string; title: string }) => {
  const { data } = useGetAnimeListQuery(path);

  const list: JSX.Element = data?.data?.map((anime: anime) => (
    <div key={anime?.mal_id} className={cx("carousel__item")}>
      <Link to={`/anime/${anime?.mal_id}`}>
        <p className={cx("carousel__item-title")}>{anime?.title}</p>
      </Link>
      <img
        className={cx("carousel__item-image")}
        src={anime?.images?.webp?.image_url}
        alt={anime?.title}
      />
    </div>
  ));

  return (
    <section className={cx("carousel")}>
      <div className={cx("carousel__title-container")}>
        <h2 className={cx("carousel__title")}>{title}</h2>
        <div className={cx("carousel__line")}></div>
      </div>
      <DraggableScroll elements={list} />
    </section>
  );
};

export default Carousel;
