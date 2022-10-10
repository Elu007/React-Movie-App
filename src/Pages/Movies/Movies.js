import React from 'react'
import axios from 'axios'


const Movies = () => {
  const fetchMovies = async() =>{
    const {data} = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
  };
  return (
    <div>
      <span className='pageTitle'>Movies</span>
    </div>
  )
}

export default Movies
