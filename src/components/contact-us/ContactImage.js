import React from 'react'
import "./ContactImage.css"
import { img } from '../../assets/images/Images'
function ContactImage() {
  return (
    <div className='contact-image'>
        <img src={img.contact_us_image} alt="contact-img" />
    </div>
  )
}

export default ContactImage