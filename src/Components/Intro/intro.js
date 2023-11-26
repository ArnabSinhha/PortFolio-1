import React from 'react'
import './intro.css'
import introImage from './introImg.png';
import {Link} from 'react-scroll';


const Intro = () => {
  return (
    <div>
      <section id="intro">
        <div className="introContent">
            <span className="hello">Hello</span>
            <span className="introText">I'm <span className="introName">Arnab</span><br/>Penetration Tester</span>
            <p className="introPara">I am skilled Full Stack MERN Developer </p>
            <Link><button className="btn">Hire Me</button></Link>
        </div>
        <img src={introImage} alt="" className="bg" />
      </section>
    </div>
  )
}

export default Intro
