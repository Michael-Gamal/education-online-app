import React from 'react'
import Title from '../../components/common/title/Title'
import './style.css'
import { testimonal } from '../../dummydata'

const Test = () => {
  return (
    <>
        <section className="testimonal padding">
            <div className="container">
                <Title subtitle="Testimonals" title='our successful students' />
                <div className="content grid2">
                    {testimonal.map((val,index) => {
                        return (
                            <div key={index} className="items shadow">
                                <div className="box flex">
                                    <div  className="img">
                                        <img src={val.cover} alt="" />
                                        <i class="fa fa-quote-left icon" ></i>
                                    </div>
                                    <div className="name">
                                        <h2>{val.name}</h2>
                                        <span>{val.post}</span>
                                    </div>
                                </div>
                                <p>{val.desc}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    </>
  )
}

export default Test