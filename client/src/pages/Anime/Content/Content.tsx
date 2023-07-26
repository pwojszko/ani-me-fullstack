import { useState } from "react";
import { useParams } from "react-router-dom";
import classNames from "classnames/bind";
import { Anime } from "src/store/anime/AnimeTypes";
import styles from "./Content.module.scss";
import { useGetWatchedQuery } from "src/store/watched/watchedService";

const cx = classNames.bind(styles);

const Content = ({ data }: { data?: Anime }) => {
  const { id } = useParams();
  const [isWatched, setIsWatched] = useState(false);
  const { data: watched } = useGetWatchedQuery();

  console.log(watched);

  // useEffect(() => {
  //   if (id && userId)
  //     getData("users/" + userId + "/libary/" + id + "/watched").then((data) =>
  //       setIsWatched(data)
  //     );
  // }, [isWatched, id, userId]);

  // const buttons = (
  //   <div className="anime-page_buttons">
  //     <div className="anime-page_buttons-container">
  //       <RateButtons
  //         scorePoints={[5, 4, 3, 2, 1]}
  //         animeId={id}
  //         userId={userId}
  //         data={data}
  //       />
  //       <WatchedButton
  //         setIsWatched={setIsWatched}
  //         isWatched={isWatched}
  //         userId={userId}
  //         animeId={id}
  //         data={data}
  //       />
  //     </div>
  //   </div>
  // );

  return (
    <div className={cx("content")}>
      <div className={cx("content-part")}>
        <h1 className={cx("title")}>{data?.title}</h1>
        <p className={cx("text")}>{data?.synopsis}</p>
      </div>
      <div className={cx("container")}>
        {/* {userId && buttons} */}
        <div className={cx("image-container")}>
          <img
            className={cx("image")}
            src={data?.images?.webp?.image_url}
            alt={data?.title}
          />
          {isWatched && (
            <span className={cx("is-watched")}>
              <span className={cx("is-watched-text")}>Seen</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Content;
