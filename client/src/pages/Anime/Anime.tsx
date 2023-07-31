import { useParams } from "react-router-dom";
import { skipToken } from "@reduxjs/toolkit/query/react";
import classNames from "classnames/bind";
import {
  useGetAnimeByIdQuery,
  useGetAnimeCharactersQuery,
} from "src/store/anime/animeService";
import { useGetWatchedQuery } from "src/store/watched/watchedService";
import { useAppSelector } from "src/store/hooks";
import Video from "./Video/Video";
import Parameters from "./Parameters/Parameters";
import Content from "./Content/Content";
import Characters from "./Characters/Characters";
import Relations from "./Relations/Relations";
import Image from "./Image/Image";
import styles from "./Anime.module.scss";

const cx = classNames.bind(styles);

const Anime = () => {
  const { id } = useParams();
  const isAuth = useAppSelector((state) => !!state.auth.token);

  const { data: anime } = useGetAnimeByIdQuery(id ?? skipToken);
  const { data: characters } = useGetAnimeCharactersQuery(id ?? skipToken);
  const { data: watched } = useGetWatchedQuery();

  return (
    <div className={cx("anime")}>
      <article className={cx("article")}>
        <p className={cx("watermark")}>
          {anime?.title_japanese || "Loading..."}
        </p>

        <div className={cx("description")}>
          <Content anime={anime} />
          <Image anime={anime} animeId={id} isAuth={isAuth} watched={watched} />
        </div>

        <Characters characters={characters} />
        {anime && <Relations anime={anime} />}
        {anime && <Parameters anime={anime} />}
        {anime && <Video anime={anime} />}
      </article>
    </div>
  );
};

export default Anime;
