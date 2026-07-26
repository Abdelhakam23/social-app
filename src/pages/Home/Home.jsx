import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Feed from '../../components/Feed/Feed'
import PostUpload from '../../components/PostUpload/PostUpload'

export default function Home() {
  return (
    <div>
      <Navbar />
      <PostUpload/>
      <Feed/>
    </div>
  )
}
