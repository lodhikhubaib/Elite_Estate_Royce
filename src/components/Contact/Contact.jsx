 import React from 'react'
import './Contact.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
// import {HiChatBubbleBottonCenter} from 'react-icons/hi2'
const Contact = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
    {/* left */}
    <div className="flexColStart c-left">
        <span className='orangeText'>Our Contact</span>
        <span className='primaryText'>Easy To Contact Us</span>
        <span className='secondaryText'>Seamlessly connect with us on our real estate portal. We make it easy to reach out and explore your property needs</span>
    
    <div className="flexColStart contactModes">
      {/* phone row */}
      <div className="flexStart row">
        <div className="flexColCenter mode">
          <div className="flexStart">
            <div className="primaryTextflexCenter icon">
              <MdCall size={25}/>
            </div>
            <div className="flexColStart detail">
              <span className='primaryText'>Call</span>
              <span className='secondaryText'>021 345 567 987</span>
            </div>
          </div>
          <div className="flexCenter button">Call Now</div>
        </div>

      {/*chat row */}
      <div className="flexColCenter mode">
          <div className="flexStart">
            <div className="primaryTextflexCenter icon">
              <BsFillChatDotsFill size={25}/>
            </div>
            <div className="flexColStart detail">
              <span className='primaryText'>Chat</span>
              <span className='secondaryText'>021 345 567 987</span>
            </div>
          </div>
          <div className="flexCenter button">Chat Now</div>
    </div>
    </div>

    {/*  */}
    <div className="flexStart row">
        <div className="flexColCenter mode">
          <div className="flexStart">
            <div className="primaryTextflexCenter icon">
              <MdCall size={25}/>
            </div>
            <div className="flexColStart detail">
              <span className='primaryText'>Video Call</span>
              <span className='secondaryText'>021 345 567 987</span>
            </div>
          </div>
          <div className="flexCenter button">Video Call Now</div>
        </div>

      {/*chat row */}
      <div className="flexColStart mode">
          <div className="flexStart">
            <div className="primaryTextflexCenter icon">
              <BsFillChatDotsFill size={25}/>
            </div>
            <div className="flexColStart detail">
              <span className='primaryText'>Message</span>
              <span className='secondaryText'>021 345 567 987</span>
            </div>
          </div>
          <div className="flexCenter button">Message Now</div>
    </div>
    </div>

    </div>
    </div>


    {/* right */}
    <div className="c-right">
        <div className="image-container">
            <img src="./contact.jpg" alt="" />
        </div>
    </div>
    </div>
    </section>
  )
}

export default Contact