export type TGetNewsResponse = {
  copyright: string;
  response: TGetNewsDocs
}

export type TGetNewsDocs = {
  docs: TNews[]
}

export type TNews = {
  abstract: string;
  web_url: string;
  multimedia: TMultimedia[];
  pub_date: string;
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
