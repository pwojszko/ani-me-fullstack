import { useParams } from "react-router-dom";
import { skipToken } from "@reduxjs/toolkit/query/react";
import { Rotator } from "../../../components/Rotator";
import { useGetAnimeCharactersQuery } from "../../../store/anime/animeService";
import type { Character } from "@store/anime/AnimeTypes";

const Characters = () => {
  const { id } = useParams();
  const { data } = useGetAnimeCharactersQuery(id ?? skipToken);

  const voiceActor = (voiceActorName: string) => {
    if (typeof voiceActorName === "string") {
      return `Voice actor: ${voiceActorName}`;
    } else return null;
  };

  const animeCharactersMap: JSX.Element = data?.data?.map(
    (character: Character, id: number) => {
      const { mal_id, name } = character?.character;
      const { image_url } = character?.character?.images?.webp;
      const voiceActorName = character?.voice_actors[0]?.person?.name;

      return (
        <div key={id} className="anime-page__character-container rotator__item">
          <div className="anime-page__character-item" key={mal_id}>
            <div className="anime-page__character-text">
              <div className="anime-page__title-container">
                <div className="anime-page__line"></div>
                <p className="anime-page__character-title">{name}</p>
              </div>
              <img
                className="anime-page__character-image"
                src={image_url}
                alt={name}
              />
              <div className="anime-page__subtitle-container">
                <div className="anime-page__line"></div>
                <p className="anime-page__character-subtitle">
                  {voiceActor(voiceActorName)}
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  );

  return (
    <div className="anime-page__character-list">
      {Rotator(animeCharactersMap, 1, 2, 3, 4)}
    </div>
  );
};

export default Characters;
