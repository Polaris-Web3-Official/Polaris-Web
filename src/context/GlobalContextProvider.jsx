/* eslint-disable react/prop-types */
//Importaciones nativas
import { createContext, useEffect, useState } from "react";

//Importaciones externas
import { fetchHivePosts } from "../Layout/SocialFi/functions/FetchHivePosts";
import { error } from "../functions/error";

//Creamos el contexto
export const Context = createContext()

export function GlobalContextProvider({children}){
  const [sesionUser, setSesionUser] = useState({})
  const [userDeviceWidth, setUserDeviceWidth] = useState()
  const [navBar, setNavBar] = useState(true)

  //Hive Blockchain
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('movie');
  const [detailPost, setDetailPosts] = useState({});
  const [savedPosts, setSavedPosts] = useState([])
  const [statsPosts, setStatsPost] = useState([])


 
  //Escuchamos el evento resize del objeto window para determinar 
  //la medida actual del dispositivo del usuario y actualizamos
  //su respectivo estado.
  window.addEventListener('resize', (e)=>{
    setUserDeviceWidth(e.currentTarget.innerWidth)
  })

  //Buscamos la informacion de los Posts en la Blockchain de Hive
  //esta data debe de buscarse a nivel de componente no de la app
  //por lo tanto en la V1.0 esto se movera a su respectivo componente.
  useEffect(() => {
    fetchHivePosts(search, 90).then((posts) => {
      if (posts === null) {
        error(`Ocurrio u error al buscar la informacion de los ultimos posts en la blockchain de hive para la palabra ${search}`)
      } else {
        setPosts(posts);
      }
    });
  }, [search]);

  return (
    <Context.Provider value={{
      sesionUser: {
        sesion: sesionUser,
        setSeseion: setSesionUser,
      },
      userDevice: {
        deviceWhidth: userDeviceWidth,
      },
      responsiveAndroidNabvar: {
        navBar: navBar,
        setNavBar: setNavBar,
      },
      socialFi: {
        posts: posts,
        search: search,
        detailPost: detailPost,
        savedPosts: savedPosts,
        statsPosts: statsPosts,

        setSearch: setSearch,
        setSavedPosts: setSavedPosts,
        setDetailPosts: setDetailPosts,
        setStatsPost: setStatsPost,
      },
      theme: {
        mainBackgroundColor: "#171717",
        mainBackgroundColor2: "#1e1e1e",
        mainBackgroundColor3: "#2e2e2e",
        testColor: "rgb(255, 100,100)",
        testColor2: "rgb(100,255,180)",
        secundaryBackgroundColor: "#191919",
        paragraphColor: "#ffff",
        borderColor: "#595959",
        ButtonColor: "#7eb8ed",
        tabBar: {
          inactiveColor: "rgb(45,68,103)",
          activeColor: "rgb(166,201,252)",
        },
        topbar: {
          backgronColor: "#ffff",
        },
      },
    }}>
      {children}
    </Context.Provider>
  )
}