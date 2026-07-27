import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/Auth.context";
import axios from "axios";

export function usePosts() {
     const [posts, setPosts] = useState(null);
      const { token } = useContext(AuthContext);
      async function getAllPosts() {
        try {
          const options = {
            url: "https://route-posts.routemisr.com/posts?limit=50&page=1",
            method: "GET",
            headers: {
              token,
            },
          };
          const { data } = await axios.request(options);
    
          //   console.log(data.data.posts);
          setPosts(data.data.posts);
        } catch (error) {}
      }
    
      useEffect(() => {
        getAllPosts();
      }, []);
    
    
    return {
        posts,
        getAllPosts
    }
    
}