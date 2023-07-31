import classNames from "classnames/bind";
import styles from "./PreloadingFrame.module.scss";

const cx = classNames.bind(styles);

type PreloadingFrameProps = {
  width?: string;
  height?: string;
  quantity?: number;
};

const PreloadingFrame = ({
  width = "100%",
  height = "100%",
  quantity = 1,
}: PreloadingFrameProps) => {
  if (quantity === 1) {
    return (
      <div
        className={cx("preloading-frame")}
        style={{ width: `${width}`, height: `${height}` }}
      ></div>
    );
  }

  return [...(Array(quantity) as number[])].map((_, index) => (
    <div
      className={cx("preloading-frame")}
      style={{ width: `${width}`, height: `${height}` }}
      key={index}
    ></div>
  ));
};

export default PreloadingFrame;
