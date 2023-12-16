import React from 'react'
import "./Toprated.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom'


function Toprated({ tp }) {
  return (
    <div className='container.fluid'>
      <div className='row'>      
      <div className='col-lg-11'>
        <div className='top_bg' >
          <div className='top_new'>
            <p data-aos="fade-right">Top Rated </p>
            <Link to='/Top_rated'><p target='_blank' className='more' data-aos="fade-left">More</p></Link>
            
          </div>
          <hr></hr>
          
          <div>
            <div className='tp_pos' data-aos="fade-down" >
              {tp.map((item, index) => {
                return (
                  <div key={index} className='tp_pos2' id='col'>
                    <a href='#'> <img src={item.image} /></a>
                      <h4><a href='#'>  {item.caption} </a> </h4>
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </div>
      </div>
    </div>


  )
}

export default Toprated