import React from "react"
import "./autreR.css"
import {useForm} from "react-hook-form";
import Swal from "sweetalert2";



const Salleconf = () => {
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
  return (
    <>
      <section className='pricing mb'>

        <div className='price container' id="exe">
          

          <form onSubmit={handleSubmit(onSubmit)} id="plo">
            <div className="col-md-6" id="mimi">
              <div className="mb-3" id="mama">
                <label className="form-lable">Nom</label>
                <input type="text" {...register("nom", {required:true})} className="form-control" id="meme"/>
              <span className="text-danger" id="red">
                {errors.nom?.type==="required" && "Nom obligatoire"}
              </span>
              </div>
            </div>

            <div className="col-md-6" id="mimi">
              <div className="mb-3" id="mama">
                <label className="form-lable">Prénom</label> 
                <input type="text" {...register("prenom", {required:true})} className="form-control" id="meme"/>
                <span className="text-danger" id="red">
                {errors.prenom?.type==="required" && "Prénom obligatoire"}
              </span>
              </div>
            </div>

            <div className="col-md-6" id="mimi">
              <div className="mb-3" id="mama">
                <label className="form-lable">Addresse</label>
                <input type="text" {...register("addresse", {required:true})} className="form-control"  id="meme"/>
                <span className="text-danger" id="red">
                {errors.addresse?.type==="required" && "Adresse obligatoire"}
              </span>
              </div>
            </div>

            <div className="col-md-6" id="mimi">
              <div className="mb-3" id="mama">
                <label className="form-lable">Téléphone</label> 
                <input type="text" {...register("phone", {required:true})} className="form-control"  id="meme"/>
                <span className="text-danger" id="red">
                {errors.phone?.type==="required" && "Téléphone obligatoire"}
              </span>
              </div>
            </div>
            
            <div className="col-md-6" id="mimi">
              <div className="mb-3" id="mama">
                <label className="form-lable">Email</label>
                <input type="email" {...register("email", {required:true})} className="form-control"  id="meme"/>
                <span id="red">
                  {errors.email?.type==="required" && "Email Obligatoire"}
                </span>
              </div>
            </div>   

            <div className="col-md-6" id="mimi">
              <div className="mb-3" id="mama"> <br></br>
                <label className="form-lable">Date de réservation Salle de conférence</label>
                <input type="date" {...register("piscine", {required:true})} className="form-control"  id="meme"/>
                <span className="text-danger" id="red">
                {errors.piscine?.type==="required" && "Date obligatoire"}
              </span>
              </div>
            </div>         
            
            <div className="col-md-6" id="mimi">
              <div className="mb-3" id="mama">
                <label className="form-lable"></label> <br></br>
                <button type="submit" onClick={handleClick} className="btn btn-success" id="momo">Envoyer</button>
              </div>
            </div>         
            
          </form>
          
          
        </div>
      </section>
    </>
  )
}
}
export default Salleconf
