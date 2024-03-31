import React from "react"
import Back from "../common/Back"
import Galerie from "../accueil/Galerie/galerie"

import img from "../images/2.jpg"

const Sary = () => {
  return (
    <>
      <section className='blog-out mb'>
        <Back name='P H O T O ' title='G A L E R Y' cover={img} />
        <div className='container recent'>
          <Galerie />
        </div>
      </section>
    </>
  )
}

export default Sary
