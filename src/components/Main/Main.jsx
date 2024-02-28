import './Main.css'

import React from 'react'
import bank from '../images/bank.png'
import europe from '../images/Europe .png'
import kz from '../images/Kz.png'
import usd from '../images/Usd.png'
import wad from '../images/Wad.png'


export const Main = ({ isOpen, onClose }) => {
  const onWrapperClick = (event) => {
    if (event.target.classList.contains('container')) onClose();
  };
  return (
    <>
      {isOpen && (
        <div className='container' onClick={onWrapperClick}>
          <div className='main-nav' >
            <div className='modal'>
              <button className='close' onClick={() => onClose()} >
                <ion-icon name="chevron-back-outline"></ion-icon>
              </button>
              <h2>Valyuta kursi</h2>
              <img src={bank} />
            </div>
            <p>Oxirgi yangilanish 16.03.2024 12:00</p>
            <div className='modal-btn'>
              <form>
                <a className='eur'> EUR <img src={europe} /></a>
                <a className='text' href="">Sotib olish</a>
                <a>13,693,88</a>
                <a className='text' href="">Sotish</a>
                <a>12,288,34</a>
              </form>
              <form>
                <a className='eur'> KZT <img src={kz} /></a>
                <a href="">Sotib olish</a>
                <a>13,693,88</a>
                <a href="">Sotish</a>
                <a>12,288,34</a>
              </form>
              <form>
                <a className='eur'> USD <img src={usd} /></a>
                <a href="">Sotib olish</a>
                <a>13,693,88</a>
                <a href="">Sotish</a>
                <a>12,288,34</a>
              </form>
              <form>
                <a className='eur'> GPB <img src={wad} /></a>
                <a href="">Sotib olish</a>
                <a>13,693,88</a>
                <a href="">Sotish</a>
                <a>12,288,34</a>
              </form>
            </div>
            <button className='btn'>Kunlik xabarnomaga obuna bo'lish</button>
          </div>
        </div>
      )}
    </>

  );
};





{/* <p>16.05.2024 19:02</p> */ }