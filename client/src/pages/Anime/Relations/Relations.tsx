import classNames from "classnames/bind";
import {
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
  AiOutlineLink,
} from "react-icons/ai";
import styles from "./Relations.module.scss";
import { Anime } from "src/store/anime/AnimeTypes";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

type RelationsProps = {
  anime: Anime;
};

const Relations = ({ anime }: RelationsProps) => {
  const navigate = useNavigate();

  return (
    <div className={cx("relations")}>
      {anime.relations.map(
        ({ relation, entry }) =>
          relation !== "Adaptation" && (
            <div className={cx("relation-card")} key={entry[0].mal_id}>
              <button
                className={cx("button")}
                onClick={() => {
                  navigate(`/anime/${entry[0].mal_id}`);
                  window.scrollTo(0, 0);
                }}
              >
                {relation === "Sequel" ? (
                  <AiOutlineArrowRight />
                ) : relation === "Prequel" ? (
                  <AiOutlineArrowLeft />
                ) : (
                  <AiOutlineLink />
                )}
              </button>
              <p className={cx("type")}>{entry[0].type}</p>
              <p className={cx("relation")}>{relation}</p>
              <p className={cx("title")}>{entry[0].name}</p>
            </div>
          )
      )}
    </div>
  );
};

export default Relations;
