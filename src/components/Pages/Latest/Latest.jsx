import React from 'react'
import './Latest.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from 'react'
import axios from 'axios'
import Pagination from '../../Pagination/Pagination'
import Navibar from '../../Navbar/Navibar'
import { Link } from 'react-router-dom'

function Latest() {
  const [Loading, setLoading] = useState(false)
  const [currentPage, setcurrentPage] = useState(1)
  const [postsPerPage, setpostsPerPage] = useState(9)
  const [movieList, setMovieList] = useState([]);

  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=d1bce55223ce5e9be82d838f676fbe67"
    )
      .then((res) => res.json())
      .then((json) => setMovieList(json.results));
  };

  useEffect(() => {
    getMovie();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = movieList.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div>
      <Navibar />
      <h1 className='npr'>Latest Movies </h1>
      <div className="nig">

        {currentPosts.map((obj) => {
          const movieName = obj.original_title.substring(0, 12);
          return (
            <div className='nigga'>
              <div className='nig_in'>
                <div>
                  <Link to={`/movie/${obj.id}`}>
                    <h2 className="nigg_inner">
                      {movieName.length >= 12 ? `${movieName}...` : movieName}
                    </h2>
                  </Link>
                  <Link to={`/movie/${obj.id}`}>
                    <img src={`https://image.tmdb.org/t/p/w500${obj.poster_path}`} />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}

      </div>
      <Pagination postsPerPage={postsPerPage} totalPosts={movieList.length} setCurrentPage={setcurrentPage} />
    </div>

  )
}

export default Latest