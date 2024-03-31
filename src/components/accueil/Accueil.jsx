import React from "react"
import Activite from "./activite/Activite"
import Couverture from "./couverture/Couverture"
import Apercu from "./apercu/Apercu"
import Evenement from "./evenement/Evenement"


const Accueil = () => {
  return (
    <>
      <Couverture />
      <Activite />
      <Evenement />
      <Apercu />
    </>
  )
}

export default Accueil
