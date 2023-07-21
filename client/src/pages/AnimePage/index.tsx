import { useParams } from "react-router-dom";
import { skipToken } from "@reduxjs/toolkit/query/react";
import { useGetAnimeByIdQuery } from "src/store/anime/animeService";
import Video from "./Video/Video";
import Parameters from "./Parameters/Parameters";
import classNames from "classnames/bind";
import styles from "./AnimePage.module.scss";
import Content from "./Content/Content";
import Characters from "./Characters/Characters";

const cx = classNames.bind(styles);

export const AnimePage = () => {
  const { id } = useParams();
  const { data } = useGetAnimeByIdQuery(id ?? skipToken);

  return (
    <div className={cx("anime-page")}>
      <article className={cx("article")}>
        <p className={cx("watermark")}>{data?.title_japanese}</p>
        <Content data={data} />
        <Characters />
        <Parameters data={data} />
        <Video data={data} />
      </article>
    </div>
  );
};
