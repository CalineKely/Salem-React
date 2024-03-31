import React from "react"
import Heading from "../../common/Heading"
import "./Activite.css"
import ActiviteCards from "./ActiviteCards"

const Activite = () => {
  return (
    <>
      <section className='activite background'>
        <div className='container'>
          <Heading title='Nos activités' subtitle='Disponible chez Salem Hôtel' />
          <ActiviteCards />
        </div>
      </section>
    </>
  )
}

export default Activite
