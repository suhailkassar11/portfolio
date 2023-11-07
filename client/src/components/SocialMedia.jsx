import React from 'react'
import {BsInstagram,BsTwitter,BsLinkedin} from 'react-icons/bs'
import {Link} from 'react-router-dom'

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a href="https://www.linkedin.com/in/suhail-kassar-997756222/">
          <BsLinkedin/>
        </a>
      </div>
      <div>
        <a href="https://twitter.com/Suhail1181">
        <BsTwitter/>
        </a>
      </div>
     <div>
      <a href="https://www.instagram.com/urs_suhailkhan7/">
        <BsInstagram/>
      </a>
     </div>
    </div>
  )
}

export default SocialMedia
