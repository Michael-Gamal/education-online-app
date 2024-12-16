import React from 'react'
import Title from '../common/title/Title'
import { online } from '../../dummydata'
const OnlineCurses = () => {
  return (
    <>
        <section className='online'>
            <div className="container">
                <Title subtitle="COURSES" title="Browse Our Online Course" />
                <div className="content grid3">
                    {online.map((val) => {
                        return (
                            <div className="box">
                                <div className="img">
                                    <img src={val.cover} alt="" />
                                    <img src={val.hoverCover} className='show' alt="" />
                                </div>
                                <h1>{val.courseName}</h1>
                                <span>{val.course}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    </>
  )
}

export default OnlineCurses