import { fetchBasicInfo } from "./fetchBasicInfo";

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
      const markdownPosts = responseData.result.filter(
        (post) => 
          !/<div>|<center>|<sub>|<br>|<div class=|<a|<a href=""|<img|<img src=""|<sup>|<script>|<meta>|<link>|<p>|<table>|<strong>|<hr>|<b>|<s>/.test(
            post.body
          )
      );
      console.log(markdownPosts);
      return markdownPosts;
    } else {
      console.error("Unexpected response from the API:", responseData);
      return null;
    }
  } catch (e) {
    console.error(e);
    return null;
  }
};

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

    const responseData = await response.json();

    if (Array.isArray(responseData.result)) {
      let totalPayout = 0;
      let postDates = [];
      let tags = {};
      let titleWords = {};
      let voters = {};
      let totalChars = 0;
      let totalWords = 0;

      const posts = responseData.result.map((post) => {
        totalPayout += parseFloat(post.pending_payout_value);
        postDates.push(new Date(post.created));
        let json = JSON.parse(post.json_metadata);
        json.tags.forEach((tag) => {
          tags[tag] = (tags[tag] || 0) + 1;
        });
        post?.title?.split(" ")?.forEach((word) => {
          if (word.length >= 4) {
            titleWords[word] = (titleWords[word] || 0) + 1;
          }
        });
        post?.active_votes?.forEach((vote) => {
          voters[vote.voter] = (voters[vote.voter] || 0) + 1;
        });
        const postLengthChars = post.body.length;
        const postLengthWords = post.body.split(/\s+/).length;
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
      const lazyPublic = posts.filter((post) => post.lengthChars < 1500);
      const commonPublic = posts.filter(
        (post) => post.lengthChars >= 1500 && post.lengthChars < 3000
      );
      const gluttonPublic = posts.filter((post) => post.lengthChars >= 5000);
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
      const correlation = totalVotes !== 0 ? totalChars / totalVotes : 0;
      const topPosts = posts
        .sort((a, b) => b.active_votes.length - a.active_votes.length)
        .slice(0, 10)
        .map((post) => ({
          title: post.title,
          votes: post.active_votes.length,
        }));
      const now = new Date();
      const oldestPostDate = new Date(Math.min.apply(null, postDates));
      const days = Math.ceil(
        Math.abs(now - oldestPostDate) / (1000 * 60 * 60 * 24)
      );
      const weeks = Math.ceil(days / 7);
      const avgVotesPerDay = totalVotes / days;
      const avgVotesPerWeek = totalVotes / weeks;
      const avgCharsPerPost = totalChars / posts.length;
      const avgWordsPerPost = totalWords / posts.length;

      const basicInfo = await fetchBasicInfo(search);
      console.log(basicInfo);
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
