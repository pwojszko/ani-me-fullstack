import type { Character } from "@store/anime/AnimeTypes";
import styles from "./Characters.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const Character = ({ data }: { data: Character }) => {
  return (
    <div className={cx("character")}>
      <div className={cx("character-item")}>
        <div className={cx("character-text")}>
          <div className={cx("title-container")}>
            <div className={cx("line")}></div>
            <p className={cx("character-title")}>{data.character.name}</p>
          </div>
          <img
            className={cx("character-image")}
            src={data.character.images.webp.image_url}
            alt={data.character.name}
          />
          <div className={cx("subtitle-container")}>
            <div className={cx("line")}></div>
            <p className={cx("character-subtitle")}>
              {data.voice_actors[0]?.person?.name &&
                `Voice actor: ${data.voice_actors[0]?.person?.name}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Character;
