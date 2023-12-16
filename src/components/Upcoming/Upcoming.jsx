import React from 'react'
import "./Upcoming.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom'


function Upcoming({ up }) {
  return (
    <div className='container.fluid'>
      <div className='row'>      
      <div className='col-lg-11'>
        <div className='up_bg' >
          <div className='up_new'>
            <p data-aos="fade-right">Upcoming Releases </p>
            <Link to='/upcoming'><p target='_blank' className='more' data-aos="fade-left">More</p></Link>
            
          </div>
          <hr></hr>
          
          <div>
            <div className='poster' data-aos="fade-down" >
              {up.map((item, index) => {
                return (
                  <div key={index} className='poster2' id='col'>
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

export default Upcoming