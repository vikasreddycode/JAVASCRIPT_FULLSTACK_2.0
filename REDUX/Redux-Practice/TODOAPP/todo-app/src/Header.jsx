import React from 'react'
import '../src/index.css'

export default function Header() {
  return (
    <div className='bg-fuchsia-600  mt-[-5vh] w-[100%] block'>
    <nav className='  py-[3vh] px-[2vw] w-[100%] block ml-[0vw]' >
   <ul className='text-white flex justify-between font-bold m-[0vh]'>
   <li ><a href='#'><h1 className='text-2xl tracking-tight font-mono'>Create a todo list</h1></a></li>
   <li> <a href="#"><h1 className='text-2xl tracking-tight font-mono'>Edit todo lists</h1></a></li>
   <li> <a href='#'><h1 className='text-2xl tracking-tight font-mono '>Today tasks</h1></a></li>
   <li> <a href="#"><h1 className='text-2xl tracking-tight font-mono ' >Todo lists</h1></a></li>
   </ul>    
    </nav>
    </div>
  )
}
