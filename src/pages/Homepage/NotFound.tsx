import React from 'react'
import notFound from './notFound.png'

const NotFound = () => {
  return (
    <div className='flex items-center justify-center w-full h-screen'>
        <img src={notFound} alt="" />
    </div>
  )
}

export default NotFound