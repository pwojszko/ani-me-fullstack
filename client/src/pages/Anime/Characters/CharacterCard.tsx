import classNames from "classnames/bind";
import type { Character } from "src/store/anime/AnimeTypes";
import styles from "./Characters.module.scss";

const cx = classNames.bind(styles);

const CharacterCard = ({ character }: { character: Character }) => {
  return (
    <div className={cx("character")}>
      <div className={cx("character-item")}>
        <div className={cx("character-text")}>
          <div className={cx("title-container")}>
            <div className={cx("line")}></div>
            <p className={cx("character-title")}>{character.character.name}</p>
          </div>
          <img
            className={cx("character-image")}
            src={character.character.images.webp.image_url}
            alt={character.character.name}
          />
          <div className={cx("subtitle-container")}>
            <div className={cx("line")}></div>
            <p className={cx("character-subtitle")}>
              {character.voice_actors[0]?.person?.name &&
                `Voice actor: ${character.voice_actors[0]?.person?.name}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
