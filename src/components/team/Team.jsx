import React from 'react'
import Back from '../common/back/Back.jsx'
import TeamCard from './TeamCard'
import './team.css'
const Team = () => {
  return (
    <>
        <Back title='Team' />
        <section className="team padding">
            <div className="container grid">
                <TeamCard />
            </div>
        </section>
    </>
  )
}

export default Team