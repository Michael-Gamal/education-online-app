import React from 'react'
import { coursesCard } from '../dummydata'
import Title from '../components/common/title/Title'
import OnlineCurses from '../components/allcourses/OnlineCurses'
const HAbout = () => {
  return (
    <>
        <section className='homeAbout'>
            <div className="container">
                <Title subtitle="Our Courses" title='explore our popular online courses' />
                        <div className='coursesCard'>
                          <div className=" grid2">
                            {coursesCard.slice(0, 3).map((val) => {
                              return (
                                <div className="item">
                                  <div className="content flex">
                                    <div className="details">
                                      <div className="img">
                                        <img src={val.cover} alt="" />
                                      </div>
                                    <div className="text">
                                      <h1>{val.coursesName}</h1>
                                    </div>
                                    <div className="rate">
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <label htmlFor="">(5.0)</label>
                                    </div>
                                      {val.courTeacher.map((details) => {
                                        return (
                                          <>
                                          <div className="box">
                                            <div className="dimg">
                                              <img src={details.dcover} alt="" />
                                            </div>
                                            <div className="para">
                                              <h4>{details.name}</h4>
                                              <span>{details.totalTime}</span>
                                            </div>
                                          </div>
                                            </>
                                        )
                                      })}
                                    </div>
                                  </div>
                                  <div className="price">
                                    <h3>{val.priceAll} / {val.pricePer}</h3>
                                  </div>
                                  <button className="outline-btn">ENROLL NOW !</button>
                                </div>
                              )
                            })}
                          </div>
                        </div>
            </div>
        </section>
        <OnlineCurses />
    </>
  )
}

export default HAbout