import React from 'react'
import "./Pagination.css"
import 'bootstrap/dist/css/bootstrap.min.css'

const Pagination = ({ postsPerPage, totalPosts, setCurrentPage }) => {
    const pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className='pagi'>
            <div className='pagi2'>
                {pages.map((page, index) => {
                    return (
                        <button key={index} onClick={() => setCurrentPage(page)}> {page} </button>
                    )
                })}
            </div>
        </div>
    )
}

export default Pagination