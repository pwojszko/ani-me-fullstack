import classNames from "classnames/bind";
import LoadingFrame from "src/pages/Anime/Video/LoadingFrame/LoadingFrame";
import type { Anime } from "src/store/anime/AnimeTypes";
import styles from "./Video.module.scss";

const cx = classNames.bind(styles);

const Video = ({ anime }: { anime: Anime }) => {
  const youtubeId = anime.trailer.youtube_id;

  return (
    <div className={cx("video")}>
      <div className={cx("iframe-container")}>
        {youtubeId ? (
          <>
            <LoadingFrame text="" />
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=0`}
              title="YouTube video player"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </>
        ) : (
          <LoadingFrame text="No video found" />
        )}
      </div>
    </div>
  );
};

export default Video;
