import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import { useGetRandomAnimeQuery } from "src/store/anime/animeService";
import styles from "./Hero.module.scss";
import PreloadingFrame from "src/components/PreloadingFrame/PreloadingFrame";

const cx = classNames.bind(styles);

const Hero = () => {
  const { data: anime } = useGetRandomAnimeQuery("seasons/upcoming");

  const handleSynopsis = (synopsis: string) => {
    if (synopsis.length > 500) {
      return `${synopsis.slice(0, 500)}...`;
    }
    return synopsis;
  };

  return (
    <section className={cx("hero")}>
      <div className={cx("container")}>
        {anime ? (
          <>
            <div className={cx("text")}>
              <h2>{anime.title}</h2>
              <p>{anime.synopsis && handleSynopsis(anime.synopsis)}</p>
              {anime && (
                <Link to={`/anime/${anime.mal_id}`}>
                  <button className={cx("button", "button")}>See more</button>
                </Link>
              )}
            </div>
            <img
              className={cx("image")}
              src={anime.images?.webp?.image_url}
              alt={anime.title}
            />
          </>
        ) : (
          <>
            <PreloadingFrame height={"150px"} width={"300px"} />
            <PreloadingFrame height={"370px"} width={"300px"} />
          </>
        )}
      </div>
    </section>
  );
};

export default Hero;
