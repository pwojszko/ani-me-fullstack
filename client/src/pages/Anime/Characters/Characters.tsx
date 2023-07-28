import { useParams } from "react-router-dom";
import { skipToken } from "@reduxjs/toolkit/query/react";
import classNames from "classnames/bind";
import { useGetAnimeCharactersQuery } from "src/store/anime/animeService";
import Character from "./Character";
import styles from "./Characters.module.scss";
import Carousel from "src/components/Carousel/Carousel";

const cx = classNames.bind(styles);

const Characters = () => {
  const { id } = useParams();
  const { data: characters } = useGetAnimeCharactersQuery(id ?? skipToken);

  return (
    <div className={cx("characters")}>
      <Carousel width={275}>
        {characters?.map((character) => (
          <Character key={character.character.mal_id} data={character} />
        ))}
      </Carousel>
    </div>
  );
};

export default Characters;
