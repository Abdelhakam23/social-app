import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const [userPosts, setUserPosts] = useState([]);

  async function getProfileData() {
    if (!token) return;
    try {
      const options = {
        url: "https://route-posts.routemisr.com//users/profile-data",
        method: "GET",
        headers: {
          token,
        },
      };

      const { data } = await axios.request(options);
      if (data.success) {
        setUser(data.data.user);
        getUserPosts(data.data.user._id);
      }
    } catch (error) {
      console.log(error);
    }
  }
   async function getUserPosts(id) {
        if (!id) return;
        try {
          const options = {
            url: `https://route-posts.routemisr.com/users/${id}/posts`,
            method: "GET",
            headers: {
              token,
            },
          };
    
          const { data } = await axios.request(options);
          if (data.success) {
            // console.log("user posts",data.data.posts);
            setUserPosts(data.data.posts);
          }
        } catch (error) {
          console.log(error);
        }
     }
  
  useEffect(() => {
    getProfileData();
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, setToken, user, setUser ,userPosts}}>
      {children}
    </AuthContext.Provider>
  );
}
