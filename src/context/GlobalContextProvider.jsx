import { createContext, useEffect, useState } from "react";
import { fetchHivePosts } from "../Layout/SocialFi/functions/fetchHivePosts";
import { error } from "../functions/error";

export const Context = createContext()

export function GlobalContextProvider({children}){
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('hive');
  const [limitPosts, setLimitPosts] = useState(99);
  const [detailPost, setDetailPosts] = useState({});
  const [sesionUser, setSesionUser] = useState({})
  const [userDeviceWidth, setUserDeviceWidth] = useState()
  const [navBar, setNavBar] = useState(true)

 
  window.addEventListener('resize', (e)=>{
    setUserDeviceWidth(e.currentTarget.innerWidth)
  })

useEffect(() => {
  fetchHivePosts(search, 99).then((posts) => {
    if (posts === null) {
      error(`Ocurrio u error al buscar la informacion de los ultimos posts en la blockchain de hive para la palabra ${search} con la cantidad limite de ${limitPosts}`)
    } else {
      setPosts(posts);
    }
  });
}, [search, limitPosts]);

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
        setSearch: setSearch,
        posts: posts,
        search: search,
        detailPost: detailPost,
        setDetailPosts: setDetailPosts,
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