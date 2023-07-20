import LoadingFrame from "../../../components/LoadingFrame/LoadingFrame";
import type { Anime } from "@store/anime/AnimeTypes";

const Youtube = ({ data }: { data: Anime }) => {
  const youtubeId = data?.trailer.youtube_id;

  return (
    <div className="anime-page__video">
      <div className="iframe-container">
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

export default Youtube;
