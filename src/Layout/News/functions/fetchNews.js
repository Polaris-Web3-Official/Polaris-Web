import { fetchData } from "../../../functions/fetchData";
import { API_KEY_NEWS } from "../../../constants/keys";

export const fetchNews = async (searsh, setData) => {
  let data = await fetchData(`https://newsapi.org/v2/everything?sources=${searsh}&apiKey=${API_KEY_NEWS}`);
  setData(data?.articles)
}