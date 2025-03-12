import { getDate } from "./getDate";
import { TGetNewsDocs, TNews } from "./types";

export function updateGetNewsData(data:TGetNewsDocs):TNews[] {
  return data.docs.map((item) => ({
    abstract: item.abstract,
    web_url: item.web_url,
    multimedia: item.multimedia,
    pub_date: getDate(item.pub_date, true),
    pub_date_detail: getDate(item.pub_date, false),
    source: item.source,
  }));
}
