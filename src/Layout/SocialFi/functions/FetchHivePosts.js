//importando funciones externas
import { fetchBasicInfo } from "./fetchBasicInfo";

//Funcion para coger los ultimos posts de la Blockchain (para un topic especifico: {searsh} y la cantidad limite: {limit})
export const fetchHivePosts = async (search, limit) => {
  const data = {
    jsonrpc: "2.0",
    method: "condenser_api.get_discussions_by_created",
    params: [{ tag: search, limit: limit }],
    id: 1,
  };

  try {
    const response = await fetch("https://api.hive.blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();

    if (Array.isArray(responseData.result)) {
      const markdownPosts = responseData.result.filter( //--> filtramos para que no nos den posts que contenga html (solo markdown)
        (post) => 
          !/<div>|<center>|<sub>|<br>|<div class=|<a|<a href=""|<img|<img src=""|<sup>|<script>|<meta>|<link>|<p>|<table>|<strong>|<hr>|<b>|<s>/.test(
            post.body
          )
      );
      return markdownPosts; //Retornamos los posts
    } else {
      console.error("Unexpected response from the API:", responseData);
      return null;
    }
  } catch (e) {
    console.error(e);
    return null;
  }
};


//----------------------------------------------------------------------------------------------------------------------------------
//Buscar los posts totales de un usuario y sacar la data para las graficas
export const getTotalPosts = async (search, limit) => {
  const data = {
    jsonrpc: "2.0",
    method: "condenser_api.get_discussions_by_blog",
    params: [{ tag: search, limit: limit }],
    id: 1,
  };

  try {
    const response = await fetch("https://api.hive.blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json(); //<-- Convertimos la respuesta en un Json

    if (Array.isArray(responseData.result)) {
      let totalPayout = 0; //<-- variable que guardara el total pagado
      let postDates = []; //<-- variable que guardara los posts totales
      let tags = {}; //<-- variable que guardara el ("TOTAL") de los tags utilizados
      let titleWords = {}; //<-- variable que guardara los titulos
      let voters = {}; //<-- variable que guardara los votos recibidos por el usuario
      let totalChars = 0; //<-- variables que guardara el total de letras
      let totalWords = 0; //<-- variable que guardara el total de palabras

      const posts = responseData.result.map((post) => {

        totalPayout += parseFloat(post.pending_payout_value); //guardamos el total pagado
        postDates.push(new Date(post.created)); //guardamos la fecha de creacion del post
        let json = JSON.parse(post.json_metadata); // Pasamos la metadata a un json
        json.tags.forEach((tag) => { //iteramos en los tags
          tags[tag] = (tags[tag] || 0) + 1;
        });

        post?.title?.split(" ")?.forEach((word) => { //separamos las palabras del titulo
          if (word.length >= 4) {
            titleWords[word] = (titleWords[word] || 0) + 1;
          }
        });

        post?.active_votes?.forEach((vote) => { //iteramos el los votos activos
          voters[vote.voter] = (voters[vote.voter] || 0) + 1;
        });

        const postLengthChars = post.body.length; //guardamnos el total de caracteres escritos en el body
        const postLengthWords = post.body.split(/\s+/).length; //guardamos el total de palabras
        totalChars += postLengthChars; 
        totalWords += postLengthWords;
        return {
          ...post,
          lengthChars: postLengthChars,
          lengthWords: postLengthWords,
        };
      });

      let totalVotes = 0;
      posts.forEach((post) => {
        totalVotes += post.active_votes.length;
      });

      const lazyPublic = posts.filter((post) => post.lengthChars < 1500); //Publico Perezoso (lectura rapida)

      const commonPublic = posts.filter(
        (post) => post.lengthChars >= 1500 && post.lengthChars < 3000 //publico comun (lectura normal)
      );

      const gluttonPublic = posts.filter((post) => post.lengthChars >= 5000); //publico gloton (lectura amplia)

      let userCategory = "";

      if (
        lazyPublic.length > commonPublic.length &&
        lazyPublic.length > gluttonPublic.length
      ) {
        userCategory = "Publico Perezoso";
      } else if (
        commonPublic.length > lazyPublic.length &&
        commonPublic.length > gluttonPublic.length
      ) {
        userCategory = "Publico Comun";
      } else {
        userCategory = "Publico Gloton";
      }

      const correlation = totalVotes !== 0 ? totalChars / totalVotes : 0; //definimos la correlacion de los posts
      
      //Guardamos los mejores posts del usuario (mas botos)
      const topPosts = posts
        .sort((a, b) => b.active_votes.length - a.active_votes.length)
        .slice(0, 10)
        .map((post) => ({
          title: post.title,
          votes: post.active_votes.length,
        }));

      const now = new Date(); //Guardamos la fecha actual para comparar
      const oldestPostDate = new Date(Math.min.apply(null, postDates)); //buscamos la fecha de su ultimo post

      const days = Math.ceil( //guardamos hace cuantos dias fue su ultimo post
        Math.abs(now - oldestPostDate) / (1000 * 60 * 60 * 24) //utilizamos Math.abs para ver la diferencia entre now(fecha actual) y (su ultimo post)
      ); // especificacion de Math.abs --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs


      //-------------------------------------------------------------------------------------------
      //Esta info sera super importante para el mercado de Cuentas de Hive de Polaris
      const weeks = Math.ceil(days / 7); //guardamos las semanas
      const avgVotesPerDay = totalVotes / days; //guardamos los votos por dia
      const avgVotesPerWeek = totalVotes / weeks; //guardamos los votos por semana
      const avgCharsPerPost = totalChars / posts.length;  //average de caracteres escritos --> por post
      const avgWordsPerPost = totalWords / posts.length; //average de palabras escritos --> por post
      //Con esta info se calculara la respectiva correlacion para ver ("Promedio de dinero que gana la cuenta por dia/mes/año")
      //-------------------------------------------------------------------------------------------

      const basicInfo = await fetchBasicInfo(search); //--> tambien buscamos la informacuion basica del usuario
      return {
        avgTransactionsPerDay: posts.length / days,
        avgTransactionsPerWeek: posts.length / weeks,
        earningsPerDay: totalPayout / days,
        earningsPerWeek: totalPayout / weeks,
        totalEarnings: totalPayout,
        top10Tags: Object.entries(tags)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 10),
        top10TitleWords: Object.entries(titleWords)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 10),
        top10Voters: Object.entries(voters)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 10),
        totalVotes,
        avgVotesPerDay,
        avgVotesPerWeek,
        avgCharsPerPost,
        avgWordsPerPost,
        userCategory,
        correlation,
        TopPosts: topPosts,
        basicInfo: basicInfo,
      };
    } else {
      console.error("Unexpected response from the API:", responseData);
      return null;
    }
  } catch (e) {
    console.error(e);
    return null;
  }
};
//----------------------------------------------------------------------------------------------------------------------------------
