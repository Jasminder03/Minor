
import React from 'react'
import { movs } from './components/Movies'
import { upcom } from './components/upcoming'
import { top } from './components/Toprated'
import Homepage from './components/Pages/Homepage/Homepage'
import Login from './components/Pages/Login/Login'
import Register from './components/Pages/Register/Register'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Tops from './components/Pages/Tops/Tops'
import All from './components/Pages/All/All'
import Upcom from './components/Pages/Upcom/Upcom'
import Latest from './components/Pages/Latest/Latest'
import MovieDetails from './components/Pages/MovieDetails/MovieDetails'
import AddReview from './components/Pages/AddReview/AddReview'
import { Auth0Provider } from '@auth0/auth0-react';


function App() {
  return (
    <>
      <Auth0Provider
        domain="dev-77irv4up2jbl68lh.us.auth0.com"
        clientId="rI677R9kanEWgxYVQoj209SUSpnqPdJW"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >

        <BrowserRouter>

          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path='/Top_rated' element={<Tops />} />
            <Route path='/all' element={<All />} />
            <Route path='/upcoming' element={<Upcom />} />
            <Route path='/latest' element={<Latest />} />
            <Route path='/movie/:id' element={<MovieDetails />} />
            <Route path='/Add_Review' element={<AddReview />} />
          </Routes>

        </BrowserRouter>
      </Auth0Provider>


    </>

  )
}

export default App