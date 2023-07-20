export type Character = {
  character: {
    mal_id: number;
    url: string;
    images: {
      jpg: {
        image_url: string;
      };
      webp: {
        image_url: string;
        small_image_url: string;
      };
    };
    name: string;
  };
  role: "Main" | "Supporting";
  favorites: number;
  voice_actors: {
    person: {
      mal_id: number;
      url: string;
      images: {
        image_url: string;
      };
      name: string;
    };
    language:
      | "Japanese"
      | "English"
      | "French"
      | "German"
      | "Hungarian"
      | "Italian"
      | "Korean"
      | "Portuguese (BR)"
      | "Spanish";
  }[];
};

export type Anime = {
  mal_id: number;
  url: string;
  images: { [key: string]: Image };
  trailer: Trailer;
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: any[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  year: number;
  broadcast: Broadcast;
  producers: Genre[];
  licensors: Genre[];
  studios: Genre[];
  genres: Genre[];
  explicit_genres: any[];
  themes: Genre[];
  demographics: any[];
};

export type Aired = {
  from: Date;
  to: Date;
  prop: Prop;
  string: string;
};

export type Prop = {
  from: From;
  to: From;
};

export type From = {
  day: number;
  month: number;
  year: number;
};

export type Broadcast = {
  day: string;
  time: string;
  timezone: string;
  string: string;
};

export type Genre = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

export type Image = {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
};

export type Title = {
  type: string;
  title: string;
};

export type Trailer = {
  youtube_id: string;
  url: string;
  embed_url: string;
  images: Images;
};

export type Images = {
  image_url: string;
  small_image_url: string;
  medium_image_url: string;
  large_image_url: string;
  maximum_image_url: string;
};
