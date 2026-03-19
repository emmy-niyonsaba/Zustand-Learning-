import React from 'react'
import { Outlet } from 'react-router-dom'
import PostNavbar from '../PostNavbar'
function PostsLayout() {
  return (
    <div>
      <PostNavbar />
      <Outlet />
    </div>
  )
}

export default PostsLayout
