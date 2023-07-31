import classNames from "classnames/bind";
import styles from "./CharactersPreloader.module.scss";

const cx = classNames.bind(styles);

const CharactersPreloader = () => {
  return (
    <div className={cx("characters-preloader")}>
      <div className={cx("card")}></div>
      <div className={cx("card")}></div>
      <div className={cx("card")}></div>
      <div className={cx("card")}></div>
      <div className={cx("card")}></div>
    </div>
  );
};

export default CharactersPreloader;
