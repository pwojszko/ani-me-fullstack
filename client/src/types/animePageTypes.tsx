import typeAnimeAPI from "./typeAnimeAPI";

type animePageTypes = {
  setIsWatched?: () => void;
  isWatched?: boolean;
  currentAnimeId?: number | string;
  userId?: string;
  data?: typeAnimeAPI;
  error?: any;
  isLoading?: any;
};

export default animePageTypes;
