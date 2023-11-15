import React from 'react'
import './skills.css'
import cloud from '../Skill/aws-cloud.jpg'
import web from '../Skill/web-developer.jpg'
import eh from '../Skill/eh.jpg'

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">Seeking a challenging and dynamic entry-level position as a software developer, where I can apply my knowledge of computer science and programming acquired during my MCA, and contribute to the development of innovative software solutions. Eager to work in a collaborative environment that fosters continuous learning and offers opportunities for professional growth. Tester </span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={eh} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Penetration Tester</h2>
                        <p>This is a Demo Text</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={web} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Web Developer</h2>
                        <p>This is a Demo Text</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={cloud} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Cloud Engineer</h2>
                        <p>This is a Demo Text</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Skills
