
import './Contact.css'

import React from 'react'

export const Contact = ({ isOpen, onClose }) => {
  const onContactClick = (event) => {
    if (event.target.classList.contains ('contact')) onClose();
  };
  return (
    <>
      { isOpen && (
        <div className='contact' onClick={onContactClick}>
          <div className='contact-wrapper'>
            <label>
              <a href="https://bankxizmatlari.uz/uz/banks/37923/" target='blank'>Kreditlar</a>
              <a href="https://bankxizmatlari.uz/uz/loans/avto/" target='blank'>Bank foizlari</a>
              <a href="https://bankxizmatlari.uz/uz/loans/avto/44013/" target='blank'>Avto kredit</a>
              <a href="tel:+998900099898">Bank hodimi bilan ulanish</a>
            </label>
          </div>
          
        </div>
      )}
    </>
    
  )
}
