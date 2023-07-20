import { Anime } from "@store/anime/AnimeTypes";
import styles from "./Parameters.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const Parameters = ({ data }: { data?: Anime }) => {
  const parametersList = [
    { text: "Type", api: data?.type },
    { text: "Episodes", api: data?.episodes },
    { text: "Score", api: data?.score },
    { text: "Year", api: data?.year },
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
