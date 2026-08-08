import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/Auth.context";
import axios from "axios";
import api from "../api/api";

export function usePosts() {
     const [posts, setPosts] = useState(null);
      const { token } = useContext(AuthContext);
      async function getAllPosts() {
        try {
     
          const { data } = await api.get(`/posts?limit=50&page=1`);
    
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