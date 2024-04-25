import React from "react"
import Back from "../common/Back"
import img from "../images/53.jpg"
import "./autreR.css"
import {useForm} from "react-hook-form";
import Salleconf from "./Salleconf";
import Swal from "sweetalert2";



const Autrereservations = () => {
  const {register, formState:{errors}, handleSubmit}= useForm();
  const onSubmit = (data)=>{
    console.log(data);
  }
  const handleClick = () =>{
    Swal.fire({
      title: "Êtes vous sur de vouloir réserver?",
      showDenyButton: true,
      
      confirmButtonText: "Réserver",
      denyButtonText: `Annuler`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Enregistré!", "", "succès");
      } else if (result.isDenied) {
        Swal.fire("Données non enregistrés", "", "info");
      }
    });
    
  }
  return (
    <>
      <section className='pricing mb'>
        <Back name='Autres réservations' title='Piscine et Salle de conférence ' cover={img} />
        <div className='price container' id="exe">
          
          <form onSubmit={handleSubmit(onSubmit)} id="plo">
            <h2>Reservetion piscine</h2>
              <div>
                <input type="text" placeholder='Name' {...register("nom", {required:true})} className="form-control" id="meme"/>
              <span className="text-danger" id="red">
                {errors.nom?.type==="required" && "Nom obligatoire"}
              </span>
              </div>
            
              <div>
                <input type="text" placeholder="prénom" {...register("prenom", {required:true})} className="form-control" id="meme"/>
                <span className="text-danger" id="red">
                {errors.prenom?.type==="required" && "Prénom obligatoire"}
              </span>
              </div>
                        
              <div>
                <input type="text" placeholder="Addresse" {...register("addresse", {required:true})} className="form-control"  id="meme"/>
                <span className="text-danger" id="red">
                {errors.addresse?.type==="required" && "Adresse obligatoire"}
              </span>
              </div>
            
              <div>
                <input type="text" placeholder="phone" {...register("phone", {required:true})} className="form-control"  id="meme"/>
                <span className="text-danger" id="red">
                {errors.phone?.type==="required" && "Téléphone obligatoire"}
              </span>
              </div>
             
              <div >
                <input type="email" placeholder="email" {...register("email", {required:true})} className="form-control"  id="meme"/>
                <span id="red">
                  {errors.email?.type==="required" && "Email Obligatoire"}
                </span>
              </div>
              
              <div >
              <label>Date de réservation</label>
                <input type="date" placeholder="Date de réservation piscine" {...register("piscine", {required:true})} className="form-control"  id="meme"/>
                <span className="text-danger" id="red">
                {errors.piscine?.type==="required" && "Date obligatoire"}
              </span>
              </div>
                              
              <div>
                <button type="submit" onClick={handleClick} className="btn btn-success" id="momo">Envoyer</button>
              </div>
                  
            
          </form>
          
        </div>
        
      </section>
      <Salleconf />

    </>
  )
}

export default Autrereservations
