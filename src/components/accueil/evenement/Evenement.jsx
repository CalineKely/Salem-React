import React from "react"
import Heading from "../../common/Heading"
import { evenement } from "../../data/Data"
import "./evenement.css"


const Evenement = () => {
  return (
    <>
      <section className='evenement padding'>
        <div className='container'>
          <Heading title='Salem vous invite chaleureusemnt dans son hôtel lors des évènements festives qui marqueront vos vies!' subtitle='Nos évènements' />

          <div className='content grid4 mtop'>
            {evenement.map((val, index) => (
              <div className='box' key={index}>
                <div className='icon'>
                  <span>{val.icon}</span>
                </div>
                <h1>{val.titre}</h1>
                <p>{val.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Evenement
