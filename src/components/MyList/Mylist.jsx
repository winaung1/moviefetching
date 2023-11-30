import axios from 'axios';
import React, { useEffect, useState } from 'react'
import apiPath from '../Paths';

export const Mylist = () => {
    const [listMovies, setListMovies] = useState([])
    useEffect(() => {
        const fetchDatas = async () => {
            const data = await axios.get(apiPath.movies);
            setListMovies(data.data)
        }
        fetchDatas()
        
    }, [])
//     const get = JSON.parse(localStorage.getItem('movieId'))
// // console.log(listMovies.results.id)
//       const ok = listMovies?.results.filter(a => get[a.id] === a.id)
//       console.log(ok)
const ye = [0,1,2,3,5]
const l = [
    {
        id: 1,
        name: 'win'
    },
    {
        id: 2,
        name: 'adsdasads'
    },
    {
        id: 3,
        name: 'ben'
    },
    {
        id: 4,
        name: 'lone'
    },
]


ye.map(a => {
    if(a === l[0].id){
        console.log(l)
    }  
})
// ye.map(a => a == l[0].id)
// const ok = l.filter(a => {
//     if(a.id === 1){
//         console.log(a.name)
//     }
// })
// console.log(ok)
  return (
    <div>
      
    </div>
  )
}
