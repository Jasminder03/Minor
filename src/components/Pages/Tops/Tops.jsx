import React from 'react'
import "./Tops.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from 'react'
import axios from 'axios'
import Pagination from '../../Pagination/Pagination'
import Navibar from '../../Navbar/Navibar'
import { Link } from 'react-router-dom'



function Tops() {

  const [TopMovie, setTopMovie] = useState([])
  const [Loading, setLoading] = useState(false)
  const [currentPage, setcurrentPage] = useState(1)
  const [postsPerPage, setpostsPerPage] = useState(9)


  const getTopMovie = () => {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=d1bce55223ce5e9be82d838f676fbe67')
      .then(res => res.json())
      .then(json => setTopMovie(json.results))
  }

  useEffect(() => {

    getTopMovie()
  }, [])


  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = TopMovie.slice(indexOfFirstPost, indexOfLastPost);


  return (
    <div>
      <Navibar />
      <h1 className='tpr'>Top Rated Movies</h1>
      <div className='topsie'>

        {currentPosts.map((movie) => {
          const movieName = movie.original_title.substring(0, 12)
          return (
            <div className='topsie2'>
              <div className='hov'>
              <Link to={`/movie/${movie.id}`}>
                <h2 className='topsie_cap'>{movieName.length >= 12 ? `${movieName}... ` : movieName}</h2>
                </Link>
                <Link to={`/movie/${movie.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                </Link>
              </div>
            </div>
          )
        })}
      </div>
      <Pagination postsPerPage={postsPerPage} totalPosts={TopMovie.length} setCurrentPage={setcurrentPage} />
    </div>
  )
}

export default Tops