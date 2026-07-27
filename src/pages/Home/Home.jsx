import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Feed from '../../components/Feed/Feed'
import PostUpload from '../../components/PostUpload/PostUpload'
import { usePosts } from '../../hooks/PostsHook'

export default function Home() {

 const{posts,getAllPosts} =  usePosts()
  return (
    <div>
      <Navbar />
      <div className='mx-4'>

        <PostUpload getAllPosts={ getAllPosts} />
      <Feed posts = {posts} />
      </div>
    </div>
  )
}
