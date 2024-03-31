import React from "react"
import Heading from "../../common/Heading"
import { apercu } from "../../data/Data"
import "./apercu.css"

const Apercu = () => {
  return (
    <>
      <section className='apercu padding'>
        <div className='container'>
          <Heading title='Explorez Salem Hôtel' subtitle="Quelques images pour representer nos évenements, activités et services" />

          <div className='content grid3 mtop'>
            {apercu.map((item, index) => (
              <div className='box' key={index}>
                <img src={item.cover} alt='' />
                <div className='overlay'>
                  <h5>{item.name}</h5>
                  <p>
                    <label>{item.Villas}</label>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Apercu
