import React from 'react'
import './Botom.css'
const Botom = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">

            {/* left */}
            <div className="flexColStart f-left">
                <img src="logo.jpg" alt="" width={120}/>
                <span className='secondaryText'>
                    Our Vision Is To Provide All People <br/>
                    The Best Place To Live.
                </span>
            </div>

            {/* right */}
            <div className="flexColStart f-right">
                <span className='primaryText'>Information</span>
                <span className='secondaryText'>145 Shahrah-E-Faisal,Karachi,Pakistan</span>
                <div className="flexCenter f-menu">
                    <span>Property</span>
                    <span>Services</span>
                    <span>Residencies</span>
                    <span>About Us</span>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Botom