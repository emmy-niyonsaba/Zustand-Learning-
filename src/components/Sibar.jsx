
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Sibar = () => {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/about', label: 'About', icon: 'ℹ️' },
    { path: '/users', label: 'Users', icon: 'ℹ️' },
    { path: '/posts', label: 'Posts', icon: '📝' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <div className='bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 h-screen min-w-[250px] w-[280px] fixed left-0 top-0 shadow-2xl border-r border-slate-700 flex flex-col'>
      {/* Logo Section */}
      <div className='px-6 py-8 border-b border-slate-700'>
        <div className='flex items-center gap-3'>
          <div className='w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center shadow-lg'>
            <span className='text-white font-bold text-lg'>Z</span>
          </div>
          <div>
            <h1 className='text-white font-bold text-lg leading-tight'>Zustand</h1>
            <p className='text-slate-400 text-xs font-medium'>State Manager</p>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className='flex-1 px-4 py-8 flex flex-col gap-2'>
        <p className='text-slate-400 text-xs font-semibold uppercase tracking-widest mb-4 px-2'>Menu</p>
        
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`relative group px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-3 overflow-hidden ${
              isActive(item.path)
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50'
                : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
            }`}
          >
            {/* Animated background for active */}
            {isActive(item.path) && (
              <div className='absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 -z-10 opacity-0 group-hover:opacity-100 transition-opacity' />
            )}
            
            <span className='text-xl'>{item.icon}</span>
            <span>{item.label}</span>
            
            {isActive(item.path) && (
              <div className='absolute right-2 w-2 h-2 bg-white rounded-full animate-pulse' />
            )}
          </Link>
        ))}
      </nav>

      {/* Footer Section */}
      <div className='px-4 py-6 border-t border-slate-700'>
        <div className='bg-slate-700/30 rounded-lg p-4 text-center'>
          <p className='text-slate-300 text-sm font-medium'>Version 1.0</p>
          <p className='text-slate-500 text-xs mt-2'>Built with React & Zustand</p>
        </div>
      </div>
    </div>
  )
}

export default Sibar
