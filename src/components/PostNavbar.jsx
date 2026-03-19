import React from 'react'
import { NavLink } from 'react-router-dom'
function PostNavbar() {
  return (
    <div className='flex items-center gap-4 p-4 border-b border-gray-200'>
      <h1>Posts</h1>
      <NavLink to="" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-gray-500'}>
        All Posts
      </NavLink>  
      <NavLink to="new" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-gray-500'}>
        New Post
      </NavLink>
    </div>
  ) 
}

export default PostNavbar
