import axios from "axios";
import { createContext, useEffect, useState } from "react";
import api from "../api/api";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const [userPosts, setUserPosts] = useState([]);
    const [unreadCount, setUnreadCount] = useState(0);
  


  async function logOut() {

    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    
  }


  async function getUnreadCount() {
    try {
      const { data } = await api.get("/notifications/unread-count");
      setUnreadCount(data.data.unreadCount);
    } catch (error) {
      console.log(error);
    }
  }


  async function getProfileData() {
    if (!token) return;
    try {

      const { data } = await api.get(`/users/profile-data`);
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
        
    
          const { data } = await api.get(`/users/${id}/posts`);
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

  // useEffect(() => {
  //   getUnreadCount()
  // },[])
  return (
    <AuthContext.Provider value={{ token, setToken, user, setUser ,userPosts,logOut , unreadCount,setUnreadCount,getUnreadCount}}>
      {children}
    </AuthContext.Provider>
  );
}
