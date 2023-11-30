import axios from 'axios'
import React, {useEffect, useState } from 'react'
import apiPath from './Paths'
import { FaPlay } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go"; 

export const Banner = () => {
  
  const [movie, setMovies] = useState([]);
  const [myList, setMyList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(apiPath.popular);
      setMovies(data.data.results[Math.floor(Math.random() * data.data.results.length - 1)])
    }
    fetchData()
  }, [])
  
  function truncate(string, n){
    return string?.length > n ? string.substr(0, n) + '...': string
  }
  
  const pushToMyList = (movieId) => {
    let uniqueNum = myList.filter((element, index) => {
      return myList.indexOf(element) === index;
  });
  
    setMyList(prev => [...prev, movieId])
    console.log(myList)
    
    localStorage.setItem('movieId', JSON.stringify(uniqueNum))
  }

  return (
        <div className='relative h-screen text-white' style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path || movie?.poster_path}")`,
          backgroundPosition: "center center"
        }}>
          <div className='z-10 w-full h-full absolute inset-0 linear bg'></div>
          <div className=' px-10 md:w-[600px] h-full flex flex-col justify-center'>
          <div className='z-50 flex items-center space-x-4'>
            <p className='flex items-center space-x-4'>
            <FaStar className='text-yellow-300'/> <span>{Math.floor(movie?.vote_average)}</span>
            </p>
            <GoDotFill className='text-[6px] text-gray-400'/>
            <p>
            {movie?.release_date}
            </p>
          </div>
          <p className='py-4 z-50 text-6xl font-bold tracking-widest'>{movie?.original_title || movie?.title}</p>
          <p className='z-50 py-7'>{truncate(movie?.overview, 150)}</p>
          <div className='z-50 py-4 flex items-center space-x-4'>
            <button className='flex items-center space-x-2 justify-center bg-yellow-500 w-24 h-8 p-4 rounded-full'>
                <FaPlay/>
                <p>Watch</p>
            </button>
            <button className='flex items-center space-x-2 justify-center bg-gray-600/40 h-8 p-4 rounded-full'>
                <IoAddCircleOutline/>
                <button onClick={() => pushToMyList(movie?.id)}>Add To List</button>
            </button>
          </div>
          </div>
        </div>
  )
}
