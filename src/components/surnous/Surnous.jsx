import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/couverture.jpg"
import "./surnous.css"

const Surnous = () => {
  return (
    <>
      <section className='about'>
        <Back name='A propos de Salem Hôtel' title='Qui est Salem Hôtel?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Description de Salem' subtitle='Tout sur nous ☺' />

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            
          </div>
          <div className='right row'>
            <img src='./about.jpg' alt='' className="uu" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Surnous
