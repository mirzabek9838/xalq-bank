
import './Home.css'

import React from 'react'

export const Home = ({ isOpen, onClose }) => {
  const onHommerClick = (event) => {
    if (event.target.classList.contains('home')) onClose();
  };
  return (
    <>
      {isOpen && (
        <div className='home' onClick={onHommerClick}>
          <div className='home-content'>
            <button className='home-btn'>Bankamatlarni ko'rish</button>
            <button className='home-btn'>Bankamatlarni ko'rish</button>
            <button className='home-btn'>Bankamatlarni ko'rish</button>
            <button className='home-btn'>Operatir bilan bog'lanish</button>
            <button className='home-btn'>Bank filialarini ko'rish</button>
            <button className='home-btn'>Orqaga</button>
          </div>
        </div>
      )}
    </>
  )
}
