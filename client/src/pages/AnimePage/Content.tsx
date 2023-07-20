import { useState, useEffect } from "react";
import animePageTypes from "../../types/animePageTypes";
import RateButtons from "./components/buttons/RateButton";
import WatchedButton from "./components/buttons/WatchedButton";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import getData from "../../utils/auth/getData";

const Content = ({ data }: animePageTypes) => {
  const { userId } = useAuthContext();

  const imageUrl = data?.data?.images?.webp?.image_url;
  const title = data?.data?.title;
  const { id } = useParams();
  const [isWatched, setIsWatched] = useState(false);

  useEffect(() => {
    if (id && userId)
      getData("users/" + userId + "/libary/" + id + "/watched").then((data) =>
        setIsWatched(data)
      );
  }, [isWatched, id, userId]);

  const isWatchedLabel = isWatched ? (
    <span className="anime-page__is-watched">
      <span className="anime-page__is-watched-text">Seen</span>
    </span>
  ) : null;

  const image = (
    <div className="anime-page__image-container">
      <img className="anime-page__image" src={imageUrl} alt={title} />
      {isWatchedLabel}
    </div>
  );

  const buttons = (
    <div className="anime-page_buttons">
      <div className="anime-page_buttons-container">
        <RateButtons
          scorePoints={[5, 4, 3, 2, 1]}
          animeId={id}
          userId={userId}
          data={data}
        />
        <WatchedButton
          setIsWatched={setIsWatched}
          isWatched={isWatched}
          userId={userId}
          animeId={id}
          data={data}
        />
      </div>
    </div>
  );

  return (
    <div className="anime-page__content">
      <div className="anime-page__content-part">
        <h1 className="anime-page__title">{data?.data?.title}</h1>
        <p className="anime-page__text">{data?.data?.synopsis}</p>
      </div>
      <div className="anime-page__container">
        {userId && buttons}
        {image}
      </div>
    </div>
  );
};

export default Content;
