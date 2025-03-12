export type TGetNewsResponse = {
  copyright: string;
  response: TGetNewsDocs
}

export type TGetNewsDocs = {
  docs: Omit<TNews[], 'pub_date_detail'>
}

export type TNews = {
  abstract: string;
  web_url: string;
  multimedia: TMultimedia[];
  pub_date: string;
  pub_date_detail: string;
  source: string;
};

type TMultimedia = {
  caption: null;
  credit: null;
  crop_name: string;
  height: number;
  legacy: {
    thumbnail: string;
    thumbnailwidth: number;
    thumbnailheight: number;
  };
  rank: number;
  subType: string;
  subtype: string;
  type: string;
  url: string;
  width: number;
};
