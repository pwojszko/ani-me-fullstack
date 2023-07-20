import { Link } from "react-router-dom";
import "../../../../assets/images/hero-bg.webp";
import { useGetAnimeListQuery } from "../../../../store/anime/animeService";
import classNames from "classnames/bind";
import styles from "./Hero.module.scss";
const cx = classNames.bind(styles);

const Hero = () => {
  const { data, error, isLoading, isSuccess } =
    useGetAnimeListQuery("seasons/upcoming");

  const firstElement = data?.data && data?.data[0];

  const imgSrc: string = firstElement?.images?.webp?.image_url;
  const imgAlt: string = firstElement?.title;
  const title: string = firstElement?.title;
  const synopsis: string = firstElement?.synopsis?.slice(0, 500) + "...";

  const button = (
    <Link to={`/anime/${firstElement?.mal_id}`}>
      <button className={cx("hero__button", "button")}>See more</button>
    </Link>
  );

  return (
    <section className={cx("hero")}>
      <div className={cx("hero__container")}>
        <div className={cx("hero__text")}>
          <h2>{title}</h2>
          <p>{synopsis}</p>
          {button}
        </div>
        <img className={cx("hero__image")} src={imgSrc} alt={imgAlt} />
      </div>
    </section>
  );
};

export default Hero;
