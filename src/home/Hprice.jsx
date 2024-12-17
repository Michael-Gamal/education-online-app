import React from 'react'
import Title from '../components/common/title/Title'
import PriceCard from '../components/pricing/PriceCard.jsx'
const Hprice = () => {
  return (
    <>
      <section className="hpricepadding">
            <Title subtitle='Our Pricing' title=" pricing & packages " />
        <div className="price container grid">
            <PriceCard />
        </div>
      </section>   
    </>
  )
}

export default Hprice
