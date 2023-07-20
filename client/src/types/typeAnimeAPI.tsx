type typeAnimeAPI = {
  [key: string]: any;
  id: number;
  mal_id: number;
  title: string;
  synopsis: string;
  images: {
    webp: {
      image_url: string;
    };
  };
  title_japanese: string;
  trailer: {
    embed_url: string;
  };
  type: string;
  episodes: number;
  score: number;
  year: number;
};

export default typeAnimeAPI;
