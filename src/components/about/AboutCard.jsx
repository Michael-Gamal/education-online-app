import React from 'react'
import Title from '../common/title/Title.jsx';
import { homeAbout } from '../../dummydata.js'
import AWrapper from './AWrapper.jsx'
import './about.css';
import IMGAbout from '../../images/about.webp'
const AboutCard = () => {
  return (
    <>
        <section className="aboutHome">
            <div className="container flexSB">
                <div className="left row">
                    {/* <img src="./images/about.wEBP" alt="/" /> */}
                    <img src={IMGAbout} alt="" />
                </div>
                <div className="right row">
                    <Title subtitle="LEARN ANYTHING" title="Benefits About Online Learning Expertise" />
                <div className="items">
                    {homeAbout.map((val,index) => {
                            return(
                                <div className="item flexSB" key={index}>
                                    <div className="img">
                                        <img src={val.cover} alt="" />
                                    </div>
                                    <div className="text">
                                        <h2>{val.title}</h2>
                                        <p>{val.desc}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                    
                </div>
                </div>
            </div>
        </section>
        <AWrapper/>
    </>
  )
}

export default AboutCard