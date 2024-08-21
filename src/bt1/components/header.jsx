import React from 'react'
import './header.css'

function Header() {
  return (
    <div className='text-green h-12 w-full bg-white flex justify-left  '>
      <div className=' h-12 w-full bg-white flex justify-center p-2.5 items-left'>HOME</div>
      <div className='h-12 w-full bg-white flex justify-center p-2.5 items-left bg-blue'>SHOP PAGE</div>
      <div className='h-12 w-full bg-white flex justify-center p-2.5 items-left'>SINGLE PRODUCE</div>
      <div className='h-12 w-full bg-white flex justify-center p-2.5 items-left'>CART</div>
      <div className='h-12 w-full bg-white flex justify-center p-2.5 items-left'>CATEGORY</div>
      <div className='h-12 w-full bg-white flex justify-center p-2.5 items-left'>ORTHERS</div>
      <div className='h-12 w-full bg-white flex justify-center p-2.5 items-left'>CONTACT</div>
    </div>
  )
}
//justifinecontent;spaceevent
export default Header