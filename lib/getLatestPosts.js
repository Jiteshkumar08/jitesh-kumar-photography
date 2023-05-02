import userData from "@constants/data";
import axios from "axios";

const getLatestPosts = async (token) => {
  try {
    if (token) {
      const response = await axios.get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink&access_token=542731504719265|cumPnnxbl_mFPugT67Ae3_u16dI`);
      const posts = response.data;
      const latestSixPosts = posts.splice(0, 6);
      return latestSixPosts;
    }
    else{
      console.log("Error: Token was not found.")
      return userData.demoInstagramPosts
    }
  } catch (err) {
    console.log(err);
    return userData.demoInstagramPosts
  }
};

export default getLatestPosts;
