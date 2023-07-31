import classNames from "classnames/bind";
import CharacterCard from "./CharacterCard";
import styles from "./Characters.module.scss";
import Carousel from "src/components/Carousel/Carousel";
import { Character } from "src/store/anime/AnimeTypes";

const cx = classNames.bind(styles);

type CharactersProps = {
  characters?: Character[];
};

const Characters = ({ characters }: CharactersProps) => {
  return (
    <div className={cx("characters")}>
      <Carousel width={275} height={430}>
        {characters?.map((character) => (
          <CharacterCard
            key={character.character.mal_id}
            character={character}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Characters;
