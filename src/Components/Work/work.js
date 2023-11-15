import React from 'react'
import './work.css'
import img1 from '../../Components/Work/img1.jpg'
import img2 from '../../Components/Work/img2.jpg'
import img3 from '../../Components/Work/img3.jpg'
import img4 from '../../Components/Work/img4.jpg'
import img5 from '../../Components/Work/img5.jpg'


const Work = () => {
  return (
    <section id="work">
        <h2 className="worktitle">My Portfolio</h2>
        <span className="workDesc">This showcases the various projects I have worked for various clients</span>
        <div className="workImgs">
            <img src={img1} alt="" className="workImg" />
            <img src={img2} alt="" className="workImg" />
            <img src={img3} alt="" className="workImg" />
            <img src={img4} alt="" className="workImg" />
            <img src={img5} alt="" className="workImg" />
        </div>
        <button className="workBtn">
            See More
        </button>
    </section>
  )
}

export default Work
