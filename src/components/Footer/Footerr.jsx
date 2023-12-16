
import React from 'react'
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import "./Footerr.css"
 

function Footerr ()  {
  return (
    <Footer bgDark>
    <div className="w_full">
      <div className="w_full2">
        <div className='khs'>
          <Footer.Title title="Company" className='titu' />
          <Footer.LinkGroup col className='null'>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Careers</Footer.Link>
            <Footer.Link href="#">Brand Center</Footer.Link>
            <Footer.Link href="#">Blog</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div className='khs'>
          <Footer.Title title="Help Center" className='titu' / >
          <Footer.LinkGroup col className='null'>
            <Footer.Link href="#">Discord Server</Footer.Link>
            <Footer.Link href="#">Twitter</Footer.Link>
            <Footer.Link href="#">Facebook</Footer.Link>
            <Footer.Link href="#">Contact Us</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div  className='khs'>
          <Footer.Title title="Legal" className='titu2'/>
          <Footer.LinkGroup col className='null'>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div  className='khs'>
          <Footer.Title title="Download" className='titu3'/>
          <Footer.LinkGroup col className='null2'>
            <Footer.Link href="#">iOS</Footer.Link>
            <Footer.Link href="#">Android</Footer.Link>
            <Footer.Link href="#">Windows</Footer.Link>
            <Footer.Link href="#">MacOS</Footer.Link>
          </Footer.LinkGroup>
        </div>
      </div>
      <div className="com">
        <Footer.Copyright href="#" by="Reel Critic™" year={2023}   className='comp'/>
        <div className="compy">
          <Footer.Icon href="#" icon={BsFacebook} />
          <Footer.Icon href="#" icon={BsInstagram} />
          <Footer.Icon href="#" icon={BsTwitter} />
          <Footer.Icon href="#" icon={BsGithub} />
          <Footer.Icon href="#" icon={BsDribbble} />
        </div>
      </div>
    </div>
  </Footer>
  )
}

export default Footerr