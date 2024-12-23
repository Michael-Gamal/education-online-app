import React from 'react'
import { coursesCard } from '../../dummydata'
import './courses.css'
const CoursesCard = () => {
  return (
    <>
        <section className='coursesCard'>
          <div className="container grid2">
            {coursesCard.map((val) => {
              return (
                <div className="item">
                  <div className="content ">
                    <div className="details">
                    <div className="text">
                        <div className="img">
                          <img src={val.cover} alt="" />
                      </div>
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
                            </div>
                            <span>{details.totalTime}</span>
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
        </section>
    </>
  )
}

export default CoursesCard
