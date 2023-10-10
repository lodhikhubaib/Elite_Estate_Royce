import React from 'react'
import './Hero.css'
import {HiLocationMarker} from "react-icons/hi"
import CountUp from 'react-countup';
const Hero = () => {
  return (
    <section className='hero-wrapper'>
        <div className='paddings innerWidth flexCenter hero-container'>
{/* left side */}
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    {/* <div className='orange-circle'/> */}
                    <h1>Royce Royale Residences<br/>Where Elegance<br/> Meets Excellence </h1>
                </div>
                <div className="flexColStart hero-des">
                    <span>Welcome to Elite Estate Royce, Where opulence meets sophistication in the world of real estate.<br/>Nestled in the heart of a prestigious community, our exclusive estates redefine the art of luxurious living.</span>
                </div>
                <div className="flexCenter search-bar">
                    <HiLocationMarker color="var(--blue)" size={25}/>
                    <input type='text'/>
                    <button className="button">Search</button>
                </div>
                <div className="flexCenter stats">
                <div className="flexCenter stat">
                    <span>
                        <CountUp start={8800} end={9000} duration={4}/>
                        <span>+</span>
                        </span><span>
                    Exclusive Real Estate
                    </span>
                </div>
                <div className="flexCenter stat">
                    <span>
                        <CountUp start={1950} end={2000} duration={4}/>
                        <span>+</span>
                        </span><span>
                        Satisfied Client
                    </span>
                </div>
                <div className="flexCenter stat">
                    <span>
                        <CountUp end={28} duration={4}/>
                        <span>+</span>
                        </span><span>
                        Excellence-recognized
                    </span>
                </div>
                
            </div>       
            </div>
{/* right side */}
            <div className="flexCenter hero-right">
                <div className="image-container">
                    <img src='hero-image.jpg' alt='' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero