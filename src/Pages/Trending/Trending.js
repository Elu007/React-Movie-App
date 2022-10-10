import React from 'react'
import axios from 'axios'
import "./Trending.css"
import { useState } from 'react'
import { useEffect } from 'react';
import SingleContent from '../../components/SingleContent/SingleContent';
import CustomPagination from '../../components/Pagination/CustomPagination';

const Treding = () => {

  const [page,setPage] = useState(1);
  const [content,setContent] = useState([]);

  const fetchTrending = async ()=>{
    const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);
    console.log(data)
    setContent(data.results);
  };

  useEffect(()=>{
    window.scroll(0,0);
    fetchTrending();
  },[page]);
  return (
    <div>
      <span className='pageTitle'>Trending</span>
      <div className="trending">
        {
          content && content.map((c) =>(
            <SingleContent key={c.id} id={c.id} poster={c.poster_path} title={c.title || c.name} date={c.first_air_date || c.release_date} media_type={c.media_type} vote_average={c.vote_average}/>
          ))
        }
      </div>
      <CustomPagination setPage={setPage}/>
    </div>
  )
}

export default Treding