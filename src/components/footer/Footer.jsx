import React from 'react'
import './footer.css'
import { blog } from '../../dummydata'
const Footer = () => {
  return (
    <>
      <section className="newletter">
        <div className="container flexSB">
            <div className="left row">
                <h1>NewsLetter -Stay tune and get the latedt update</h1>
                <span> far far away, behind the word mountains </span>
            </div>
            <div className="right row">
                <input type="text" placeholder='Enter email address' />
                <i className='fa fa-paper-plane'></i>
            </div>
        </div>
      </section>
      <footer>
        <div className="container padding">
            <div className="box logo">
                <h1>ACADEMIA</h1>
                <span>online education & learning</span>
                <p> dolorem obcaecati aliquid porro facere aliquam commodi neque rerum minima adipisci beatae voluptate placeat! Amet, aut.</p>
                <i className="fab fa-facebook-f icon"></i>
                <i className="fab fa-instagram icon"></i>
                <i className="fab fa-twitter icon"></i>
                <i className="fab fa-youtube icon"></i>
            </div>

            <div className="box">
                <h3>Recent post</h3>
                {blog.slice(0, 3).map((val) => {
                    return (
                        <div className="items flexSB">
                            <div className="img">
                                <img src={val.cover} alt="" />
                            </div>
                            <div className="text">
                                <span>
                                    <i className="fa fa-user"></i>
                                    <label htmlFor=""> {val.type} </label>
                                </span>
                                <span>
                                <i class="fa fa-calendar" ></i>
                                <label htmlFor=""> {val.date} </label>
                                </span>
                                <h4> {val.title} </h4>                  
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="box last">
                <h3>Have a Qustion ?</h3>
                <ul>
                    <li>
                        <i className='fa fa-map'></i>
                        203 fake st. Mount view , san francisio california, USA
                    </li>
                    <li>
                        <i className='fa fa-phone-alt'></i>
                        +123 456 789
                    </li>
                    <li>
                        <i className='fa fa-paper-plane'></i>
                        example@gmail.com
                    </li>
                </ul>
            </div>
        </div>
      </footer>
      <p>
        Copyright @2022 ALL rights reserved | this template is made with <i className='fa fa-heart'></i> by GorkhCoder
      </p>
    </>
  )
}

export default Footer
