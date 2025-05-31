import React from 'react'

function Header(props) {
    console.log(props)
  return (
    <div className='h-8 px-5 bg-blue-500 flex items-center justify-between'>
        <h2>Home</h2>
        <div className='flex gap-8'>
            <h4>about</h4>
            <h4>Career</h4>
            <h4>Blog</h4>
            <h4>Profile</h4>
        </div>

        </div>

  )
}

export default Header