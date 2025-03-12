import { TGetNewsDocs, TNews } from "./types";

export function updateGetNewsData(data:TGetNewsDocs):TNews[] {
  return data.docs.map((item) => ({
    abstract: item.abstract,
    web_url: item.web_url,
    multimedia: item.multimedia,
    pub_date: item.pub_date,
    source: item.source,
  }));
}
