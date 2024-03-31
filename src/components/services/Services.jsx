import React from "react"
import img from "../images/39.jpg"
import Back from "../common/Back"
import "../accueil/activite/Activite.css"
import ActiviteCards from "../accueil/activite/ActiviteCards"


const Services = () => {
  return (
    <>
      <section className='services mb'>
        <Back name='Services' title='Services - Tout les Services' cover={img} />
        <div className='activite container'>
          <ActiviteCards />
        </div>
      </section>
    </>
  )
}

export default Services
