import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import { useGetRandomAnimeQuery } from "src/store/anime/animeService";
import styles from "./Hero.module.scss";

const cx = classNames.bind(styles);

const Hero = () => {
  const { data } = useGetRandomAnimeQuery("seasons/upcoming");

  const handleSynopsis = (synopsis: string) => {
    if (synopsis.length > 500) {
      return `${synopsis.slice(0, 500)}...`;
    }
    return synopsis;
  };

  return (
    <section className={cx("hero")}>
      <div className={cx("container")}>
        <div className={cx("text")}>
          <h2>{data?.title}</h2>
          <p>{data?.synopsis && handleSynopsis(data?.synopsis)}</p>
          {data && (
            <Link to={`/anime/${data?.mal_id}`}>
              <button className={cx("button", "button")}>See more</button>
            </Link>
          )}
        </div>
        <img
          className={cx("image")}
          src={data?.images?.webp?.image_url}
          alt={data?.title}
        />
      </div>
    </section>
  );
};

export default Hero;
