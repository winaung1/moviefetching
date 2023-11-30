import apiPath from './Paths' 
import { MovieRow } from './MovieRow';

export const Movies = () => {
  return (
    <>
      <div className=' text-white'>
        <MovieRow title='Popular' moviePath={apiPath.popular}/>
        <MovieRow title='Trending' moviePath={apiPath.movies}/>
        <MovieRow title='Top Rated' moviePath={apiPath.topRated}/>
        <MovieRow title='Up Coming' moviePath={apiPath.upComing}/>
      </div>
      </>
)}