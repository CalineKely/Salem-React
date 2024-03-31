import React from "react"
import { activite } from "../../data/Data"

const ActiviteCards = () => {
  return (
    <>
      <div className='content grid5 mtop'>
        {activite.map((items, index) => (
          <div className='box' key={index}>
            <img src={items.cover} alt='' />
            <h4>{items.name}</h4>
            <label>{items.total}</label>
          </div>
        ))}
      </div>
    </>
  )
}

export default ActiviteCards ;
