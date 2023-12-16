import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./Slider.css"
import { jawan, evil, dark } from '../../assets'
import { AiOutlinePlayCircle } from 'react-icons/ai'

const Slider = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100 igg" src={evil} alt="First slide" />
                        <div class="carousel-caption d-none d-md-block item">
                            <h5  className='itemmm'>THE EVIL DEAD RISE</h5>
                            <p className='itemmm2'>Release: 21/04/2023 </p>
                            <p className='itemmm3'>Rating: 6.5/10</p>
                            <p className='itemmm4'>A reunion between two estranged sisters gets cut short <br></br>by the rise of flesh-possessing demons,<br></br> thrusting them into a primal battle for survival as they<br></br>face the most nightmarish version of family imaginable</p>
                            <p className='itemmm5'> <a href='https://youtu.be/BqQNO7BzN08?si=eFZJAaL9qRdXoyq3' target='_blank'><AiOutlinePlayCircle /> </a></p>
                            <p className='itemmm6'><a href='https://youtu.be/BqQNO7BzN08?si=eFZJAaL9qRdXoyq3' target='blank'>Watch Trailer</a></p>
                        </div>
                        <div class="carousel-caption d-none d-md-block itemm">
                            
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 igg" src={jawan} alt="Second slide" />
                        <div class="carousel-caption d-none d-md-block item">
                        <h5  className='itemmm7'>Jawan</h5>
                            <p className='itemmm2'>Release: 7/09/2023 </p>
                            <p className='itemmm3'>Rating:  7.3/10</p>
                            <p className='itemmm9'>A man is driven by a personal vendetta to rectify the wrongs in society, <br></br>while keeping a promise made years ago.<br></br> He comes up against a monstrous outlaw with no fear, <br></br>who has caused extreme suffering to many. </p>
                            <p className='itemmm5'> <a href='https://youtu.be/MWOlnZSnXJo?si=E75CLBUSlDAyGvrs' target='_blank'><AiOutlinePlayCircle /> </a></p>
                            <p className='itemmm6'><a href='https://youtu.be/MWOlnZSnXJo?si=E75CLBUSlDAyGvrs' target='_blank'>Watch Trailer</a></p>
                        </div>
                    </div>
                     <div className="carousel-item">
                        <img className="d-block w-100 igg" src={dark} alt="Third slide" />
                        <div class="carousel-caption d-none d-md-block item">
                        <h5  className='itemmm8'>The Dark Knight</h5>
                            <p className='itemmm2'>Release: 18/07/2008</p>
                            <p className='itemmm3'>Rating: 9/10</p>
                            <p className='itemmm10'>With the help of allies <br></br>Lt. Jim Gordon (Gary Oldman) and DA Harvey Dent (Aaron Eckhart), Batman (Christian Bale) <br></br> has been able to keep a tight lid on crime in Gotham City.<br></br> But when a vile young criminal calling himself the Joker (Heath Ledger) suddenly throws the town into chaos,<br></br> the caped Crusader begins to tread a fine line between heroism and vigilantism.</p>
                            <p className='itemmm5'> <a href='https://youtu.be/EXeTwQWrcwY?si=CpkEnx3ImncM2s7L' target='_blank'><AiOutlinePlayCircle /> </a></p>
                            <p className='itemmm6'><a href='https://youtu.be/EXeTwQWrcwY?si=CpkEnx3ImncM2s7L' target='_blank'>Watch Trailer</a></p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default Slider