import React from 'react'
import './MovieDetails.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navibar from '../../Navbar/Navibar'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

function MovieDetails() {

    const {  isAuthenticated, loginWithRedirect } = useAuth0();
    const [MovieDat, setMovieDat] = useState([])
    const [Revs, setRevs] = useState([])
    const param = useParams();


    useEffect(() => {
        const getMovie = async () => {
            const result = await fetch(
                `https://api.themoviedb.org/3/movie/${param.id}?api_key=d1bce55223ce5e9be82d838f676fbe67`
            )
            const data = await result.json();

            setMovieDat(data)
        };
        getMovie();
    }, []);

    const getReview = () => {
        fetch(
            `https://api.themoviedb.org/3/movie/${param.id}/reviews?api_key=d1bce55223ce5e9be82d838f676fbe67`
        )
            .then((res) => res.json())
            .then((json) => setRevs(json.results));
    };


    useEffect(() => {
        getReview();
    }, []);

    console.log(Revs)



    return (
        <div className='container'>
            <Navibar />
            <hr></hr>
            <div className='head'>
                <center>
                    <h1> Movie Details </h1>
                </center>
            </div>
            <hr></hr>
            <div className='md'>
                <div>

                    <div className='row'>
                        <div className='col md2'>
                            <u><h1>{MovieDat.original_title}</h1></u>
                            <img src={`https://image.tmdb.org/t/p/w500${MovieDat.poster_path}`} className='backdrop' />
                        </div>
                        <div className='col over'>
                            <u>Overview:</u> <br></br>
                            {MovieDat.overview} <br></br>
                            <br></br>
                            <div className='extra'>
                                <div >
                                    Positive Reviews:
                                    {MovieDat.popularity}
                                </div>
                                <div >
                                    Release Date:
                                    {MovieDat.release_date}
                                </div>
                                <div >
                                    Likes:
                                    {MovieDat.vote_count}
                                </div>
                                <div className='extra2'>
                                    Rating:
                                    {MovieDat.vote_average}
                                </div>
                                <hr></hr>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
            <hr></hr>
            <div className='add'>
                <center>
                    {
                        isAuthenticated ?
                            <div>
                                <Link to='/Add_Review'> <button>Add a Review</button> </Link>
                            </div>
                            :
                            <div>
                                <button onClick={() => loginWithRedirect()}>Login To Add a Review</button>
                            </div>

                    }
                </center>
            </div>
           
            <hr></hr>
            <div className='auth' >
                <center>
                    <h2>Reviews</h2>
                </center>
                <hr></hr>
                <div>
                {
                    localStorage.getItem('review') ?
                            <div className='row'>
                                <div className='col'>
                                    <h2>{localStorage.getItem('username')}:</h2>
                                </div>
                                <div className='col rev'>
                                    <p>{localStorage.getItem('review')} </p>
                                    <hr></hr>
                                </div>
                            </div>
                        :
                        <div>
                        </div>
                }
            </div>
                {Revs.map((obj,) => {
                    return (
                        <div className='row'>
                            <div className='col author'>
                                <h2></h2>
                                <h2>{obj.author}:</h2>
                                <img src={`https://image.tmdb.org/t/p/w500${obj.author_details.avatar_path}`} className='av' />
                            </div>
                            <div className='col content'>
                                <p>{obj.content}</p>
                                <hr></hr>
                            </div>
                        </div>
                    )
                })}
            </div>
           
        </div>
    )
}

export default MovieDetails



