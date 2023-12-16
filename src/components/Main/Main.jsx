import React from 'react'
import "./Main.css"
import { FcLike } from "react-icons/fc"
import { IoReorderThreeSharp } from "react-icons/io5"
import { AiFillEye } from "react-icons/ai"
import { PiFilmReelBold } from "react-icons/pi"
import "bootstrap/dist/css/bootstrap.min.css"



const Main = () => {
    return (
        <div className='coll'>
            <div className='left'>
                <div className='watch'>
                    <div className='row'>
                        <div className="col-6 col-sm-9">
                            <h1>
                                Watch,Track,Like and Discover
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row exp' >
                <div className="col-12 col-lg-12">
                    <div className='right'>

                        <div className='row'>
                            <div className='col col-sm-13'>
                                <div className='gray'>
                                    <div className='ra' style={{ width: "458px" }}>
                                        <div className="card-body">
                                            <FcLike className='icon' />
                                            <h1 className='card_titu'> Like </h1>
                                            <p id='tex'>discover the most liked ultimate content to binge watch with your buddies and have fun together and make it last
                                                explore the new content as you like and make viewing better with us</p>
                                        </div>


                                    </div>
                                </div>
                            </div>
                            <div className='col col-sm-13'>
                                <div className='rap'>
                                    <div className='cardd' style={{ width: "458px" }}>
                                        <div className="card-body" >
                                            <AiFillEye className='icon2' />
                                            <h1 className='card_titu'> Watch </h1>
                                            <p id='tex'>discover the most liked ultimate content to binge watch with your buddies and have fun together and make it last
                                                explore the new content as you like and make viewing better with us</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-12 col-lg-12">
                            <div className="col col-sm-11">
                                <div className='rapp'>
                                    <div className='cardd' style={{ width: "458px" }}>
                                        <div className="card-body" >
                                            <IoReorderThreeSharp className='icon2' />
                                            <h1 className='card_titu'> Wishlist </h1>
                                            <p id='tex'>discover the most liked ultimate content to binge watch with your buddies and have fun together and make it last
                                                explore the new content as you like and make viewing better with us</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col col-sm-13'>
                                    <div className='rappp'>
                                        <div className='cardd' style={{ width: "458px" }}>
                                            <div className="card-body" >
                                                <PiFilmReelBold className='icon2' />
                                                <h1 className='card_titu'> Movies </h1>
                                                <p id='tex'>discover the most liked ultimate content to binge watch with your buddies and have fun together and make it last
                                                    explore the new content as you like and make viewing better with us</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main