import './Header.css'

import React, { useState } from 'react'
import img1 from '../images/01.png'
import img2 from '../images/02.png'
import img3 from '../images/03.png'
import img4 from '../images/04.png'

import { Main } from '../Main/Main'
import { Home } from '../Home/Home'
import {Contact} from '../Contact/Contact'



const Header = () => {
  const [modalInfoOpen, setModalInfoOpen] = useState(false);
  const [modalHomeOpen, setModalHomeOpen] = useState(false);
  const [modalContactOpen, setModalContactOpen] = useState(false);
  return (
    <div className='header'>

      <div className='header-img'></div>
      <ul>
        <button onClick={() => setModalInfoOpen(true)}>  <img src={img1} />Valyuta kursi</button>
        <button onClick={() => setModalHomeOpen(true)}>  <img src={img2} /> Bank hodimlari</button>
        <button onClick={() => setModalContactOpen(true)}>  <img src={img3} />Bank xizmztlari</button>
        <button>  <img src={img4} /> Ko'p beriladigan savolar</button>
      </ul>
      <Main 
      isOpen={modalInfoOpen}
      onClose={() => setModalInfoOpen(false)}
      />
      
      <Home
      isOpen={modalHomeOpen}
      onClose={() => setModalHomeOpen(false)}
      />

      <Contact
      isOpen={modalContactOpen}
      onClose={() => setModalContactOpen(false)}
      />
    </div>
  )
}

export default Header