//Importaciones de funciones externas
import formatDateHive from "../functions/formatDateHive";

export const fetchBasicInfo = (user) => { //<-- Funcion para buscar informacion basica de un user
  const url = "https://api.hive.blog";
  const q = {
    jsonrpc: "2.0",
    method: "condenser_api.get_accounts",
    params: [[user]],
    id: 1,
  };
  //Se realiza la llamada a la api de Hive
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(q),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json()) //--> pasamos la respuesta a un Json
    .then((json) => {

      let result = json?.result[0]; //cogemos el resultado que tiene a los posts
      let metadataPosting = JSON.parse(result?.posting_json_metadata); //cogemos la metadata del posts para mas adelante procesarla
      let cover = metadataPosting?.profile?.cover; //Sacamos la foto (cover) del posts
      let tokens = metadataPosting?.profile?.tokens; // sacamos los tokens del usuario
      let website = metadataPosting?.profile?.website; // Sacamos la website (si tiene ?) del usuario
      let witness = metadataPosting?.profile?.witness_description; // sacamos la descripcion (corta) del usuario
      let name = result?.name; // Sacamos el nombre del usuario
      let description = metadataPosting?.profile?.about; // Sacamos la descripcion completa del usuario
      let image = metadataPosting?.profile?.profile_image; // Sacamos la profile image del user
      let created = formatDateHive(result?.created); // Fromateamos el momento en que se creo el post
      let balanceHive = result?.balance; // Sacamos el balance de Hive (no es necesario formatear)
      let hbdBalamce = result?.hbd_balance; // Sacamos el balance en HBD (no es necesario formatear)
      let totalPost = result?.post_count; // Sacamos la cantidad de Posts totales del usuario
      let powerVotes = result?.post_voting_power.slice(0, 7); // Sacamos el poder de boto del usuario
      let rewards = result?.posting_rewards; // Sacamos las recompensas del usuario
      return { // <-- retornamos la data buscada
        metadataPosting,
        name,
        description,
        image,
        created,
        balanceHive,
        hbdBalamce,
        totalPost,
        powerVotes,
        rewards,
        cover,
        tokens,
        website,
        witness,
      };
    })
    .catch((error) => {
      console.error("Error:", error);
      return null; //<-- retornamos null si ocurrio un error 
    });
};

//Funcion para sacar la cantidad de followers totales de un user
export const getTotalFollowers = async (user) => {
  const url = "https://api.hive.blog"; 
  const q = {
    jsonrpc: "2.0",
    method: "condenser_api.get_follow_count",
    params: [user],
    id: 1,
  };
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(q),
    headers: { "Content-Type": "application/json" },
  });
  let json = await response.json();
  return json.result.follower_count;
};

//Funcion para sacar la cantidad total de personas que sigue el user
export const getTotalFollowing = async (user) => {
  const url = "https://api.hive.blog";
  const q = {
    jsonrpc: "2.0",
    method: "condenser_api.get_follow_count",
    params: [user],
    id: 1,
  };
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(q),
    headers: { "Content-Type": "application/json" },
  });
  let json = await response.json();
  return json.result.following_count;
};

//Funcion para buscar los posts de un user (ultimos 100)
export const getPosts = async (user) => {
  const url = "https://api.hive.blog";
  const data = {
    jsonrpc: "2.0",
    method: "condenser_api.get_discussions_by_author_before_date",
    params: [user, "", "2100-01-01T00:00:00", 100],
    id: 1,
  };
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    const postsPerDay = Array(7).fill(0);
    const now = Date.now();
    result.result.forEach((post) => {
      const daysAgo = Math.floor(
        (now - new Date(post.created)) / (1000 * 60 * 60 * 24)
      );
      if (daysAgo < 7) {
        postsPerDay[daysAgo]++;
      }
    });
    return postsPerDay.reverse();
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};
