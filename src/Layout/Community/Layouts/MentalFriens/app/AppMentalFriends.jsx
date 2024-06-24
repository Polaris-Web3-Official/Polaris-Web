import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY_GOOGLE } from '../../../../../constants/keys';
import fetchVideos from './functions/fetchVideos';
import './styles/appMentalFriends.css'
import HeaderItem from './components/HeaderItem';
import Loading from '../../../../../components/comuns/Loading';

export default function AppMentalFriends() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [searsh, setSearch] = useState('salud mental');
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  
  useEffect(() => {
    try {
      setLoading(true);
      fetchVideos(setVideos, searsh);
      setLoading(false);
    } catch (error) {
      setErr(true);
      console.log(error);
    }
  }, [searsh]);


  const handleVideoClick = async (videoId) => {
    try {
      setLoading(true);
      const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${API_KEY_GOOGLE}&part=snippet,contentDetails,statistics,status`
      );
      setSelectedVideo(response.data.items[0]);
      setLoading(false);
    } catch (error) {
      setErr(true);
      console.log(error);
    }
  };

  useEffect(() => {
    if (selectedVideo) {
      let description = selectedVideo?.snippet?.description;

      // Encierra las palabras que comienzan con # en etiquetas <b></b>
      // y permite caracteres como tildes y ñ
      description = description.replace(/(#[\wñáéíóú]+)/gi, '');

      // Encuentra los enlaces y los convierte en etiquetas <a></a>
      description = description.replace(/(https?:\/\/[^\s]+)/g, function(url) {
        return `<a href='${url}'><b>Enlace</b></a><br></br>`;
      });

      document.getElementById('description').innerHTML = description;
    }
  }, [selectedVideo]);



  if(loading) {
    return (
      <div className='AppMentalFriends'>
        <Loading />
      </div>
    );
  }

  if(err) {
    return (
      <div className='AppMentalFriends'>
        <p>Error al cargar la página</p>
      </div>
    );
  }

  return (
    <div className='AppMentalFriends'>
      {selectedVideo ? (
        <div className='AppMentalFriends_c1'>

          <iframe 
            width="100%"
            height="420"
            style={{ borderRadius: '0.75rem' }}
            src={`https://www.youtube.com/embed/${selectedVideo.id}`} 
            title={selectedVideo.snippet.title}
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
          <h2>{selectedVideo.snippet.title}</h2>
          <section>
            <p id='description'>
              {selectedVideo.snippet.description}
            </p>

            <button style={{width: '100%'}} onClick={() => setSelectedVideo(null)}>
              Volver atras
            </button> 
          </section>
          
        </div>
      ) : (
        <div className='AppMentalFriends_c2'>
          <div className='AppMentalFriends_c2_header'>
            <div onClick={() => setSearch('como mejorar mi salud mental')}>
              <HeaderItem 
                icon={'https://cusoft.tech/wp-content/uploads/2024/06/image-removebg-preview-10-1.png'} 
                title='Mental' 
                color={searsh === 'como mejorar mi salud mental' ? 'var(--mainBackgroundColor)' : 'var(--mainBackgroundColor0)'}
              />
            </div> 

            <div onClick={() => setSearch('como tener amigos')}>
              <HeaderItem 
                icon={'https://cusoft.tech/wp-content/uploads/2024/06/image-removebg-preview-11.png'} 
                title='Relaciones'
                color={searsh === 'como tener amigos' ? 'var(--mainBackgroundColor)' : 'var(--mainBackgroundColor0)'}
              />
            </div> 

            <div onClick={() => setSearch('como se que tengo un trastorno mental')}>
              <HeaderItem 
                icon={'https://cusoft.tech/wp-content/uploads/2024/06/image-removebg-preview-12.png'} 
                title='Trastornos' 
                color={searsh === 'como se que tengo un trastorno mental' ? 'var(--mainBackgroundColor)' : 'var(--mainBackgroundColor0)'}
              />
            </div> 

            <div onClick={() => setSearch('como mejorar quitarme el aburrimiento')}>
              <HeaderItem 
                icon={'https://cusoft.tech/wp-content/uploads/2024/06/image-removebg-preview-13.png'} 
                title='Desarrollo'
                color={searsh === 'como mejorar quitarme el aburrimiento' ? 'var(--mainBackgroundColor)' : 'var(--mainBackgroundColor0)'}
              />
            </div> 
          </div>
          {
            videos.map((video, index) => (
              <div key={index} className='AppMentalFriends_c2_item' onClick={() => handleVideoClick(video.id.videoId)}>
                <img src={video.snippet.thumbnails.high.url} alt="" title=''/>
                <h4>{video.snippet.title.slice(0, 25)}</h4>
              </div>
            ))
          }
        </div>
      )}
    </div>
  );
}
