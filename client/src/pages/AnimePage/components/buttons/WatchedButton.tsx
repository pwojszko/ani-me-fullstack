import typeAnimeAPI from "../../../../types/typeAnimeAPI";
import updateData from "../../../../utils/auth/updateData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

type WatchedButtonTypes = {
  setIsWatched: (value: boolean) => void;
  animeId?: string;
  isWatched?: boolean;
  userId?: string;
  data?: typeAnimeAPI;
};

const WatchedButton = ({
  setIsWatched,
  animeId,
  isWatched,
  userId,
  data,
}: WatchedButtonTypes) => {
  const handleWatchedButton = () => {
    if (userId && animeId) {
      const path = "users/" + userId + "/libary/" + animeId;
      const data = {
        watched: !isWatched,
        mal_id: animeId,
      };
      updateData(path, data);
      setIsWatched(!isWatched);
    }
  };

  return (
    <button
      onClick={handleWatchedButton}
      className={`button-watched button-watched--${isWatched && "active"}`}
    >
      <FontAwesomeIcon icon={faEye} />
    </button>
  );
};

export default WatchedButton;
