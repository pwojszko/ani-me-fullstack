import classNames from "classnames/bind";
import { AiFillEye, AiFillStar } from "react-icons/ai";
import styles from "./ActionButtons.module.scss";

const cx = classNames.bind(styles);

type ActionButtonsProps = {
  handleWatch: () => void;
  handleRate: (point: number) => void;
  watchedRate?: number;
  isWatched: boolean;
};

const scorePoints = [5, 4, 3, 2, 1];

const ActionButtons = ({
  handleWatch,
  handleRate,
  watchedRate,
  isWatched,
}: ActionButtonsProps) => {
  return (
    <div className={cx("buttons")}>
      <div className={cx("buttons-container")}>
        <div className={cx("rating-buttons", { active: isWatched })}>
          {scorePoints.map((point: number) => (
            <button
              key={point}
              onClick={() => handleRate(point)}
              className={cx("button", {
                active: watchedRate && point <= watchedRate,
              })}
            >
              <AiFillStar />
            </button>
          ))}
        </div>

        <button
          onClick={handleWatch}
          className={cx("button-watched", { active: isWatched })}
        >
          <AiFillEye />
        </button>
      </div>
    </div>
  );
};

export default ActionButtons;
