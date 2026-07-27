import React, { useContext, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Feed from '../../components/Feed/Feed'
import PostUpload from '../../components/PostUpload/PostUpload'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import { usePosts } from '../../hooks/PostsHook'
import { AuthContext } from '../../Context/Auth.context'
import axios from 'axios'

export default function Home() {

   
    const { posts, getAllPosts } = usePosts()
    
  
  return (
    <div className='min-h-screen'>
      <Navbar />
      <div className='container mx-auto max-w-7xl px-4 mt-6'>
        <div className='grid grid-cols-1 lg:grid-cols-[280px_1fr_300px] gap-6'>
          {/* Left Sidebar - Hidden on mobile/tablet */}
          <div className='hidden lg:block'>
            <LeftSidebar />
          </div>

          {/* Main Feed */}
          <main>
            <PostUpload getAllPosts={getAllPosts} />
            <Feed posts={posts} />
          </main>

          {/* Right Sidebar - Hidden on mobile/tablet */}
          <div className='hidden lg:block'>
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  )
}
