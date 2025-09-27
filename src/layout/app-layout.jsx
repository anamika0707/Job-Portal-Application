
import Header from '@/components/ui/header'
import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'


const AppLayout = () => {
  useEffect(() => {
    const root = document.getElementById('root');
    if (root) {
      root.removeAttribute('aria-hidden');
      root.removeAttribute('data-aria-hidden');
    }
  });
  return (
    <div>
      <div className='grid-background'></div>
      <main className='min-h-screen'>
        <Header/>
        <Outlet/>
      </main>
      <div  className='p-10 text-center bg-gray-800 mt-10'>Made by Anamika</div>
    </div>
  )
}

export default AppLayout
