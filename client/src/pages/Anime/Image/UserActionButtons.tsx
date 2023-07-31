import classNames from "classnames/bind";
import { AiFillEye } from "react-icons/ai";
import styles from "./Image.module.scss";

const cx = classNames.bind(styles);

type UserActionButtonsProps = {
  animeId?: string;
  handleWatchedButton: (animeId: string) => void;
  isWatched: boolean;
};

const UserActionButtons = ({
  animeId,
  handleWatchedButton,
  isWatched,
}: UserActionButtonsProps) => {
  return (
    <div className={cx("buttons")}>
      <div className={cx("buttons-container")}>
        {/* <RateButtons
                  scorePoints={[5, 4, 3, 2, 1]}
                  animeId={id}
                  userId={userId}
                  anime={anime}
                /> */}

        <button
          onClick={() => animeId && handleWatchedButton(animeId)}
          className={cx("button-watched", { active: isWatched })}
        >
          <AiFillEye />
        </button>
      </div>
    </div>
  );
};

export default UserActionButtons;
