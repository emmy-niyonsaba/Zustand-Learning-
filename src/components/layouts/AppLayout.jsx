
import React from 'react'
import Sibar from '../Sibar'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div className='flex'>  
      <Sibar />
      <main className='flex-1 ml-[280px]'>
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout
