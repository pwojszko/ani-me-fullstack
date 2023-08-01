export type Watched = {
  id: string;
  rate?: number;
};

export type AddWatchedBody = {
  animeId: string;
};

export type RemoveWatchedBody = {
  animeId: string;
};

export type RateWatchedBody = {
  animeId: string;
  rate: number;
};
