import React from 'react'
import Navibar from "../../Navbar/Navibar";
import Slider from "../../Slider/Slider";
import Upcoming from "../../Upcoming/Upcoming";
import Toprated from "../../Toprated/Toprated";
import Tops from '../Tops/Tops';
import Pagination from '../../Pagination/Pagination';
import { movs } from '../../Movies'
import { upcom } from '../../upcoming'
import { top } from '../../Toprated'
import Main from '../../Main/Main';
import Tagline from '../../Tagline/Tagline';
import Footerr from '../../Footer/Footerr';
import Login from '../Login/Login';

const Homepage = () => {


    return (
        <>
            <Navibar />
            <Slider many={movs} />
            <Upcoming up={upcom} />
            <Toprated tp={top} />
            <Main />
            <Tagline />
            <Footerr />
        </>
    )
}

export default Homepage

