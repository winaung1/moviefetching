import React from 'react'
import { FaPlay, FaStar } from 'react-icons/fa'
import { GoDotFill } from 'react-icons/go'
import { useLocation } from 'react-router-dom'

export const Details = () => {
    const location = useLocation()
    const {movies} = location.state


  
  return (
    <div className='relative h-screen text-white overflow-hidden' style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path || movies?.poster_path}")`,
        backgroundPosition: "center center"
      }}>
        <div className='z-10 w-full h-full absolute inset-0 linear bg'></div>
        <div className=' px-10 md:w-[600px] h-full flex flex-col justify-center'>
        <div className='z-50 flex items-center space-x-4'>
          <p className='flex items-center space-x-4'>
          <FaStar className='text-yellow-300'/> <span>{Math.floor(movies?.vote_average)}</span>
          </p>
          <GoDotFill className='text-[6px] text-gray-400'/>
          <p>
          {movies?.release_date}
          </p>
        </div>
        <p className='py-4 z-50 text-5xl md:text-8xl font-bold tracking-widest'>{movies?.original_title || movies?.title}</p>
        <p className='z-50 py-7'>{movies?.overview}</p>
        <div className='z-50 py-4 flex justify-between items-center space-x-4'>
          <button className='relative top-10 right-0 flex items-center space-x-2 justify-center bg-yellow-500 w-20 h-20 p-4 rounded-full'>
              <FaPlay className='z-50 text-4xl'/>
                <div className='-z-10 animate-pulse absolute -top-6 -left-8 h-32 w-32 bg-white/20 rounded-full'></div>
          </button>
        </div>
        </div>
      </div>
  )
}
