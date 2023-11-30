import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go"; 
import { IoAddCircleOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { AppProvider } from '../App';

export const MovieRow = ({moviePath, title}) => {
    const [movies, setMovies] = useState([]);

    const {myList, setMyList, myGen} = useContext(AppProvider)
    useEffect(() => {
      const fetchData = async () => {
        const data = await axios.get(moviePath);
        setMovies(data.data.results)
      }
     fetchData()
    }, [moviePath])
    
    function truncate(string, n){
      return string?.length > n ? string.substr(0, n) + '...': string
    }
    function truncateDate(string, n){
      return string?.length > n ? string.substr(0, n) : string
    }

  
    const pushToMyList = (movie) => {

      let index = myList.findIndex((item) => item.id === movie.id);

      // Check if the object with the specified property value exists in the array
      if (index === -1) {
        // If not found, push a new object with the desired properties
        setMyList(prev => [...prev, movie])
        } else {
  // If found, log a message indicating that the object already exists
        alert(`${movie.title}'s already in the list`);
      }
    }
   

  return (
    <>
    <h1 className='bg-black py-2 text-white px-8 text-3xl font-bold tracking-widest'>{title}</h1>
      <div className='pl-10 relative  flex py-2 overflow-x-scroll bg-black text-white hide-scroll'>
        {movies.filter(movie => movie.genre_ids.includes(myGen)).map(movie => (
        <div className='group relative px-2 h-full flex flex-col justify-center'>

        <Link to='/components/Details/Details' state ={{movies: movie}}>
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
        </Link>
        <button className='group-hover:block hidden absolute top-0 right-2  '>
            <IoAddCircleOutline  onClick={() => pushToMyList(movie)} className='text-3xl'/>
        </button>
        </div>
      ))}
      </div>
      </>
  )
}
