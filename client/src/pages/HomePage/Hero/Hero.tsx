import { Link } from "react-router-dom";
import { useGetAnimeListQuery } from "../../../store/anime/animeService";
import classNames from "classnames/bind";
import styles from "./Hero.module.scss";
const cx = classNames.bind(styles);

const Hero = () => {
  const { data } = useGetAnimeListQuery("seasons/upcoming");
  const anime = data?.[0];

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
          <h2>{anime?.title}</h2>
          <p>{anime?.synopsis && handleSynopsis(anime.synopsis)}</p>
          {anime && (
            <Link to={`/anime/${anime?.mal_id}`}>
              <button className={cx("button", "button")}>See more</button>
            </Link>
          )}
        </div>
        <img
          className={cx("image")}
          src={anime?.images?.webp?.image_url}
          alt={anime?.title}
        />
      </div>
    </section>
  );
};

export default Hero;
