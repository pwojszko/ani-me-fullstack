import { useParams } from "react-router-dom";
import { skipToken } from "@reduxjs/toolkit/query/react";
import {
  useGetAnimeByIdQuery,
  useGetAnimeCharactersQuery,
} from "src/store/anime/animeService";
import Video from "./Video/Video";
import Parameters from "./Parameters/Parameters";
import classNames from "classnames/bind";
import Content from "./Content/Content";
import Characters from "./Characters/Characters";
import Relations from "./Relations/Relations";
import styles from "./Anime.module.scss";

const cx = classNames.bind(styles);

const Anime = () => {
  const { id } = useParams();
  const { data: anime } = useGetAnimeByIdQuery(id ?? skipToken);
  const { data: characters } = useGetAnimeCharactersQuery(id ?? skipToken);

  return (
    <div className={cx("anime")}>
      <article className={cx("article")}>
        <p className={cx("watermark")}>{anime?.title_japanese}</p>
        {anime && <Content anime={anime} />}
        {characters && <Characters characters={characters} />}
        {anime && <Relations anime={anime} />}
        {anime && <Parameters anime={anime} />}
        {anime && <Video anime={anime} />}
      </article>
    </div>
  );
};

export default Anime;
