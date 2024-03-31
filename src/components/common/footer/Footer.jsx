import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Avez_vous d'autres questions ?</h1>
              <p>Nous vous informerons jusqu'à satisfaction</p>
            </div>
            <button className='btn5'><Link to={"/contact"}>Contactez nous</Link></button>
          </div>
        </div>
      </section>
      <footer>
  <div className='container'>
    <div className='box'>
      <div className='logo'>
        <h1 id="chou">S A L E M  H Ô T E L</h1>
        <h2>Séjourner et visiter Salem ?</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, dolore unde. Voluptates, dolores, tempora incidunt accusantium assumenda dolorum odio laboriosam nesciunt nobis amet dolor harum vitae doloremque dignissimos recusandae repellat.</p>
      </div>
    </div>

    {footer.map((val, index) => ( // Ajout de l'index comme clé unique
      <div key={index} className='box'>
        <h3>{val.title}</h3>
        <ul>
          {val.text.map((items, itemIndex) => ( // Ajout de l'index comme clé unique
            <li key={itemIndex}> {items.list} </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</footer>

      <div className='legal'>
        <span>© 2024 Mioralalaina Câline Projet React </span>
      </div>
    </>
  )
}

export default Footer
