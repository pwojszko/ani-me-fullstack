import { useParams } from "react-router-dom";
import { skipToken } from "@reduxjs/toolkit/query/react";
import { useGetAnimeByIdQuery } from "../../store/anime/animeService";
import Youtube from "./Youtube/Youtube";
import Parameters from "./Parameters/Parameters";
import classNames from "classnames/bind";
import styles from "./AnimePage.module.scss";
import Content from "./Content";
const cx = classNames.bind(styles);

export const AnimePage = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetAnimeByIdQuery(id ?? skipToken);

  return (
    <div className={cx("anime-page")}>
      <article className={cx("article")}>
        <p className={cx("watermark")}>{data?.title_japanese}</p>
        {/* <Content data={data} /> */}
        {/* <Characters /> */}
        {/* <Parameters data={data} /> */}
        <Youtube data={data} />
      </article>
    </div>
  );
};
