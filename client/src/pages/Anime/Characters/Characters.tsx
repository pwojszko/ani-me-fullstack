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
  const { data } = useGetAnimeCharactersQuery(id ?? skipToken);

  return (
    <div className={cx("characters")}>
      <Carousel width={275}>
        {data?.map((item) => (
          <Character data={item} />
        ))}
      </Carousel>
    </div>
  );
};

export default Characters;
