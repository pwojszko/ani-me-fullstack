import classNames from "classnames/bind";
import { Anime } from "src/store/anime/AnimeTypes";
import styles from "./Parameters.module.scss";

const cx = classNames.bind(styles);

const Parameters = ({ anime }: { anime: Anime }) => {
  const parametersList = [
    { text: "Type", api: anime.type },
    { text: "Episodes", api: anime.episodes },
    { text: "Score", api: anime.score },
    { text: "Year", api: anime.year },
  ];

  return (
    <div className={cx("parameters")}>
      {parametersList?.map(
        (parameter, id) =>
          parameter.api && (
            <div className={cx("parameter")} key={id}>
              <p className={cx("title")}>{parameter.text}</p>
              <p className={cx("subtitle")}>{parameter.api}</p>
            </div>
          )
      )}
    </div>
  );
};

export default Parameters;
