import React from "react"
import img from "../images/42.jpg"
import Back from "../common/Back"
import "./contact.css"

const Contact = () => {
  return (
    <>
      <section className='contact mb'>
        <Back name='Contactez-nous' title="Pour plus d'informations" cover={img} />
        <div className='container'>
          <form className='shadow'>
            <h4>Veuillez remplir le formulaire</h4> <br />
            <div>
              <input type='text' placeholder='Nom' />
              <input type='text' placeholder='Prénom' />
              <input type='text' placeholder='Email' />
              <input type='text' placeholder='Téléphone' />
            </div>
            <h4> Veuillez nous rédiger vos questions/commentaires ci-dessous</h4> 
            <br></br>
            
            <textarea cols='30' rows='10'></textarea>
            <button>Envoyer ma requête</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
