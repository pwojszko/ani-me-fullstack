import classNames from "classnames/bind";
import CharacterCard from "./CharacterCard";
import styles from "./Characters.module.scss";
import Carousel from "src/components/Carousel/Carousel";
import { Character } from "src/store/anime/AnimeTypes";
import CharactersLoader from "./CharactersPreloader/CharactersPreloader";

const cx = classNames.bind(styles);

type CharactersProps = {
  characters?: Character[];
  isLoading: boolean;
};

const Characters = ({ characters, isLoading }: CharactersProps) => {
  return (
    <div className={cx("characters")}>
      {isLoading && <CharactersLoader />}
      <Carousel width={275}>
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
