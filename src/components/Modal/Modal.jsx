import React, { useContext } from 'react'
import { AppProvider } from '../../App'
import { FaStar } from 'react-icons/fa6'
import { GoDotFill } from 'react-icons/go'
import { AiOutlineMinusCircle } from "react-icons/ai";

export const Modal = () => {
    const {myList, removeFromList} = useContext(AppProvider)
   
    function truncate(string, n){
        return string?.length > n ? string.substr(0, n) + '...': string
      }
      function truncateDate(string, n){
        return string?.length > n ? string.substr(0, n) : string
      }
  return (
    <div className='text-white z-[5000]'>
        <h1 className='pt-40 text-center text-4xl'>My List</h1>
         <div className='py-10 pl-10 relative gap-4 flex flex-wrap justify-center overflow-x-scroll bg-black text-white hide-scroll'>
        {myList?.map(movie => (
        <div className='px-2 h-full flex flex-col justify-center'>
        <img className='h-56 rounded-lg object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path || movie?.poster_path}`} alt="" />
        <div className='flex items-center space-x-4 pt-2'>
          <p className='flex items-center space-x-4'>
          <FaStar className='text-yellow-300'/> <span>{Math.floor(movie?.vote_average)}</span>
          </p>
          <GoDotFill className='text-[6px] text-gray-400'/>
          <p>
          {truncateDate(movie?.release_date, 4)}
          </p>
        </div>
        <p className='py-4 z-60 font-bold tracking-widest'>{truncate(movie?.title, 10)}</p>
        <button onClick={() => removeFromList(movie.id)} className='flex items-center space-x-2 justify-center bg-gray-600/40 h-8 p-4 rounded-full'>
                <AiOutlineMinusCircle/>
                <button>Remove From List</button>
            </button>
        </div>
      ))}
      </div>
        <div className='-z-10 w-full h-full fixed inset-0 bg-black/90'/>
    </div>
  )
}
