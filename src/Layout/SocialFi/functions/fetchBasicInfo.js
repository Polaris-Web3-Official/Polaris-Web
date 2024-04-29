import formatDateHive from "../functions/formatDateHive";

export const fetchBasicInfo = (user) => {
  const url = "https://api.hive.blog";
  const q = {
    jsonrpc: "2.0",
    method: "condenser_api.get_accounts",
    params: [[user]],
    id: 1,
  };
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(q),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((json) => {
      let result = json?.result[0];
      let metadataPosting = JSON.parse(result?.posting_json_metadata);
      let cover = metadataPosting?.profile?.cover;
      let tokens = metadataPosting?.profile?.tokens;
      let website = metadataPosting?.profile?.website;
      let witness = metadataPosting?.profile?.witness_description;
      let name = result?.name;
      let description = metadataPosting?.profile?.about;
      let image = metadataPosting?.profile?.profile_image;
      let created = formatDateHive(result?.created);
      let balanceHive = result?.balance;
      let hbdBalamce = result?.hbd_balance;
      let totalPost = result?.post_count;
      let powerVotes = result?.post_voting_power.slice(0, 7);
      let rewards = result?.posting_rewards;
      return {
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
      return null;
    });
};

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
