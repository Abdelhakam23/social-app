import React from 'react'
import PostCard from '../PostCard/PostCard'

export default function Feed() {
  return (
    <>
          <section className='all-posts  mx-auto max-w-2xl my-5'>
              <div className="container">
                  <h1 className='text-2xl font-semibold text-gray-500 mb-4'>Latest Posts</h1>
                  <PostCard/>
              </div>
      </section>
    </>
  )
}
