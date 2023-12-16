import React from 'react'
import './All.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from 'react'
import axios from 'axios'
import Pagination from '../../Pagination/Pagination'
import Navibar from '../../Navbar/Navibar'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'


function All() {
  const [AllMovie, setAllMovie] = useState([])
  const [Loading, setLoading] = useState(false)
  const [currentPage, setcurrentPage] = useState(1)
  const [postsPerPage, setpostsPerPage] = useState(9)
  const [Genre, setGenre] = useState([])
  const params = useParams()

  const getAllMovie = () => {
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=d1bce55223ce5e9be82d838f676fbe67')
      .then(res => res.json())
      .then(json => setAllMovie(json.results))
  }

  useEffect(() => {

    getAllMovie()
  }, [])

 


  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = AllMovie.slice(indexOfFirstPost, indexOfLastPost);


  return (
    <div>
      <Navibar />
      <h1 className='apr'>All Movies </h1>
      <div className='allsie'>
       


        {currentPosts.map((movie) => {
          const movieName = movie.original_title.substring(0, 12)
          return (
            <div className='allsie2'>
              <div className='hovv'>
                <Link to={`/movie/${movie.id}`}>
                  <h2 className='allsie_cap'>{movieName.length >= 12 ? `${movieName}... ` : movieName}</h2>
                </Link>
                <Link to={`/movie/${movie.id}`}>
                  <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                </Link>
              </div>
            </div>
          )
        })}
      </div>
      <Pagination postsPerPage={postsPerPage} totalPosts={AllMovie.length} setCurrentPage={setcurrentPage} />
    </div>

  )
}

export default All