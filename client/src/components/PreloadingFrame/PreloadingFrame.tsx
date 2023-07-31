import classNames from "classnames/bind";
import styles from "./PreloadingFrame.module.scss";

const cx = classNames.bind(styles);

type PreloadingFrameProps = {
  width: number;
  height: number;
  quantity?: number;
};

const PreloadingFrame = ({
  width,
  height,
  quantity = 1,
}: PreloadingFrameProps) => {
  if (quantity === 1) {
    return (
      <div
        className={cx("preloading-frame")}
        style={{ width: `${width}px`, height: `${height}px` }}
      ></div>
    );
  }

  return [...(Array(quantity) as number[])].map((_, index) => (
    <div
      className={cx("preloading-frame")}
      style={{ width: `${width}px`, height: `${height}px` }}
      key={index}
    ></div>
  ));
};

export default PreloadingFrame;
