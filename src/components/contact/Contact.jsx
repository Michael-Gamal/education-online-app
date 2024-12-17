import React from 'react'
import Back from '../common/back/Back.jsx'
import './contact.css'
const Contact = () => {
    const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.37809421998!2d31.299664093645315!3d30.059482028204542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2z2KfZhNmC2KfZh9ix2KnYjCDZhdit2KfZgdi42Kkg2KfZhNmC2KfZh9ix2KnigKw!5e0!3m2!1sar!2seg!4v1734454328762!5m2!1sar!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
    return (
    <>
      <Back title='Contact Us' />
      <section className="contact padding">
        <div className="container shadow flexSB">
            <div className="left row">
                <iframe src={map} ></iframe>
            </div>
            <div className="right row">
                <h1>Contact Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                <div className="items grid2">
                    <div className="box">
                        <h4>ADDRESS: </h4>
                        <p>14ds west 21st street, suite 751 New York NY 10016</p>
                    </div>
                    <div className="box">
                        <h4>Email:</h4>
                        <p>info@gmail.com</p>
                    </div>
                    <div className="box">
                        <h4>Phone:</h4>
                        <p>+123 456 789</p>
                    </div>
                </div>
                <form action="">
                    <div className="flexSB">
                        <input type="text" placeholder='Name' />
                        <input type="email" placeholder='Email' />
                    </div>
                    <input type="email" placeholder='Subject' />
                    <textarea cols="30" rows="10">
                        Create a message here ...
                    </textarea>
                    <button className="primary-btn">SEND MESSAGE</button>
                </form>
                <h3>Follow us here</h3>
                <span>FACEBBOK TWITTER INSTAGRAM DRIBBBLE</span>
            </div>
        </div>
      </section>
    </>
  )
}

export default Contact
