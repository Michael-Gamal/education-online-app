import React from 'react'
import './price.css'
import Back from '../common/back/Back.jsx'
import PriceCard from './PriceCard.jsx'
import Faq from './Faq.jsx'
const Price = () => {
  return (
    <>
        <Back title="Choose The Right Plan" />
        <section className="price padding">
            <div className="container grid">
                <PriceCard />
            </div>
        </section>
        <Faq />
    </>
  )
}

export default Price