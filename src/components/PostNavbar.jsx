import React from 'react'
import { NavLink } from 'react-router-dom'

function PostNavbar() {
  return (
    <div className='sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm'>
      <div className='px-6 py-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <span className='text-2xl'>📝</span>
            <div>
              <h1 className='text-2xl font-bold text-slate-900'>Posts</h1>
              <p className='text-sm text-slate-500'>Manage and explore all your articles</p>
            </div>
          </div>

          <div className='flex items-center gap-2 bg-slate-50 rounded-lg p-1 border border-slate-200'>
            <NavLink
              to=""
              end
              className={({ isActive }) =>
                `px-4 py-2 rounded-md font-semibold transition-all duration-200 flex items-center gap-2 whitespace-nowrap ${
                  isActive
                    ? 'bg-white text-blue-600 shadow-sm border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`
              }
            >
              <span>📚</span>
              All Posts
            </NavLink>

            <NavLink
              to="new"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md font-semibold transition-all duration-200 flex items-center gap-2 whitespace-nowrap ${
                  isActive
                    ? 'bg-white text-blue-600 shadow-sm border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`
              }
            >
              <span>✨</span>
              New Post
            </NavLink>
          </div>
        </div>

        <div className='mt-4 pt-4 border-t border-slate-100 flex items-center gap-6 text-sm text-slate-600'>
          <div className='flex items-center gap-2'>
            <span className='text-lg'>📊</span>
            <span>Total Posts: <span className='font-bold text-slate-900'>100+</span></span>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-lg'>👥</span>
            <span>Active Users: <span className='font-bold text-slate-900'>50k+</span></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostNavbar
