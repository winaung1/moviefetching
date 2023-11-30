import React, { useContext, useState } from 'react'
import { AppProvider } from '../../App';

export const Types = () => {
const {getGenreType} = useContext(AppProvider)
const [active, setActive] = useState('')

const handleClick = (item) => {
  setActive(item)
}
  return (
    <div className='bg-black/90 drop-shadow-2xl h-20'>
    <div className='hide-scroll space-x-6 px-8 overflow-x-scroll flex text-white justify-between h-full items-center max-w-6xl mx-auto'>
     <button onClick={() => {
      handleClick('Action')
      getGenreType('Action')
      }} className={active === 'Action' ? 'text-white flex items-center space-x-2 justify-center bg-yellow-500 w-24 h-8 p-4 rounded-full' : 'text-white flex items-center space-x-2 justify-center bg-gray-500/40 w-24 h-8 p-4 rounded-full'}>
      Action
     </button>
     <button onClick={() => {
      handleClick('Drama')
      getGenreType('Drama')}} className={active === 'Drama' ? 'text-white flex items-center space-x-2 justify-center bg-yellow-500 w-24 h-8 p-4 rounded-full' : 'text-white flex items-center space-x-2 justify-center bg-gray-500/40 w-24 h-8 p-4 rounded-full'}>
      Drama
     </button>
     <button onClick={() => {
      handleClick('Adventure')
      getGenreType('Adventure')}} className={active === 'Adventure' ? 'text-white flex items-center space-x-2 justify-center bg-yellow-500 w-24 h-8 p-4 rounded-full' : 'text-white flex items-center space-x-2 justify-center bg-gray-500/40 w-24 h-8 p-4 rounded-full'}>
      Adventure
     </button>
     <button onClick={() => {
      handleClick('Science Fiction')
      getGenreType('Science Fiction')}} className={active === 'Science Fiction' ? 'text-white flex items-center space-x-2 justify-center bg-yellow-500 w-24 h-8 p-4 rounded-full' : 'text-white flex items-center space-x-2 justify-center bg-gray-500/40 w-24 h-8 p-4 rounded-full'}>
      Sci-Fi
     </button>
     <button onClick={() => {
      handleClick('Comedy')
      getGenreType('Comedy')}} className={active === 'Comedy' ? 'text-white flex items-center space-x-2 justify-center bg-yellow-500 w-24 h-8 p-4 rounded-full' : 'text-white flex items-center space-x-2 justify-center bg-gray-500/40 w-24 h-8 p-4 rounded-full'}>
      Comedy
     </button>
      </div>
    </div>
  )
}
