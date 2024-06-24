import axios from 'axios';
import { API_KEY_GOOGLE } from '../../../../../../constants/keys';

export default async function fetchVideos(setVideos, search) {
  const cachedData = sessionStorage.getItem(search);
  
  //si hay datos en la sesión, no hacemos una nueva petición
  if (cachedData) {
    setVideos(JSON.parse(cachedData));
    return;
  }

  try {
    const response = await axios.get(
      'https://www.googleapis.com/youtube/v3/search', {
          params: {
              part: 'snippet',
              maxResults: 21,
              key: API_KEY_GOOGLE,
              q: search
          }
      }
    );

    const videoData = response.data.items;
    //los videos se guardan en la sesión para no hacer una nueva petición
    sessionStorage.setItem(search, JSON.stringify(videoData));
    setVideos(videoData);
  } catch (error) {
    console.error('Error fetching videos:', error.message);
  }
}