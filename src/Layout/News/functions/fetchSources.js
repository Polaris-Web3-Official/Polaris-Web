import { fetchData } from "../../../functions/fetchData";
import { API_KEY_NEWS } from "../../../constants/keys";

export const fetchSources = async (setData) => {
  let data = await fetchData(`https://newsapi.org/v2/top-headlines/sources?country=us&apiKey=${API_KEY_NEWS}`);
  setData(data?.sources)
}