import { useState, useEffect } from "react";
import typeAnimeAPI from "../../../../types/typeAnimeAPI";
import getData from "../../../../utils/auth/getData";
import updateData from "../../../../utils/auth/updateData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./buttons.scss";

type RateButtonsType = {
  scorePoints: number[];
  animeId?: string;
  userId?: number;
  data?: typeAnimeAPI;
  error?: any;
  isLoading?: any;
};

const RateButtons = ({ scorePoints, animeId, userId }: RateButtonsType) => {
  const [activeRate, setActiveRate] = useState(0);

  const handleClick = (point: number) => {
    const path = "users/" + userId + "/libary/" + animeId;
    const data = {
      mal_id: animeId,
      rate: point === activeRate ? 0 : point,
    };
    setActiveRate(data.rate);
    updateData(path, data);
  };

  useEffect(() => {
    if (animeId && userId)
      getData("users/" + userId + "/libary/" + animeId + "/rate").then((data) =>
        setActiveRate(data)
      );
  }, [activeRate, animeId, userId]);

  const scorePointsMap = scorePoints.map((point: number) => (
    <button
      key={point}
      onClick={() => handleClick(point)}
      className={`rating-buttons__button ${
        point <= activeRate && "rating-buttons__button--active"
      }`}
    >
      <FontAwesomeIcon icon={faStar} />
    </button>
  ));

  return <div className="rating-buttons">{scorePointsMap}</div>;
};

export default RateButtons;
