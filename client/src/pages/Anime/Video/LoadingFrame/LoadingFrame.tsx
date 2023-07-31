import "./loadingFrame.scss";

type LoadingFrameType = {
  text: string;
};

const LoadingFrame = ({ text }: LoadingFrameType) => {
  return (
    <div className="loading-frame">
      <div className="loading-frame-dots">
        <div className="loading-frame-dots-dot loading-frame-dots-dot-1"></div>
        <div className="loading-frame-dots-dot loading-frame-dots-dot-2"></div>
        <div className="loading-frame-dots-dot loading-frame-dots-dot-3"></div>
      </div>

      <p className="loading-frame__end-message">{text}</p>

      <div className="loading-frame__line loading-frame__line__1"></div>
      <div className="loading-frame__line loading-frame__line__2"></div>
      <div className="loading-frame__line loading-frame__line__3"></div>
      <div className="loading-frame__line loading-frame__line__4"></div>
    </div>
  );
};

export default LoadingFrame;
