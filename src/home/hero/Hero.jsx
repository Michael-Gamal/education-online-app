import React from 'react'
import Title from '../../components/common/title/Title'
import './hero.css'
const Hero = () => {
  return (
    <>
        <section className="hero">
            <div className="container">
                <div className="row">
                    <Title subtitle='WELCOME TO ACADEMIA' title= 'Best Online Education' />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur perspiciatis atque rem asperiores tempora?
                        Optio placeat minus consectetur ipsam quas impedit similique, tenetur at, maxime distinctio excepturi sunt dignissimos nihil.
                    </p>
                    <div>
                        <div className="button">
                            <button className="primary-btn">
                                GET START NOW <i className="fa fa-long-arrow-alt-right"></i>
                            </button>
                            <button >
                                VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="margin">

        </div>
    </>
  )
}

export default Hero