import React from "react"
import Heading from "../../common/Heading"
import "./couverture.css"
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


const Couverture = () => {
  const {register, formState:{errors}, handleSubmit}= useForm();
  const onSubmit=(data)=>{
    console.log(data);
  }
  const handleClick = () =>{
    (async () => {
      const { value: formValues } = await Swal.fire({
        title: "Multiple inputs",
        html: `
          <input id="nom" placeholder="Nom" class="swal2-input">
          <input id="prenom" placeholder="Prénom" class="swal2-input">
          <input id="phone" placeholder="Téléphone" class="swal2-input">
        `,
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById("nom").value,
            document.getElementById("prenom").value,
            document.getElementById("phone").value
          ];
        }
      });

      console.log("Données saisies :", formValues);
      if (formValues) {
        Swal.fire(JSON.stringify(formValues));
      }
    })();
    
  }

  return (
    <>
      <section className='couv'>
        <div className='container'>
          <Heading title='SALEM HÔTEL' subtitle='Aux services de votre confort et de votre bien-être' />

          <form className='flex' onSubmit={handleSubmit(onSubmit)}>
            <div className='box'>
              <div className="mb-3">
                <label className="form-lable">Date d'arrivée</label>
                <input type="date" {...register("datearriver", {required:true})} className="form-control"/>
                <span className="text-danger" id="io">
                  {errors.datearriver?.type==="required"&&"Veuillez saire votre date d'arrivée avant de soumettre"}
                </span>
              </div>
            </div>
            <div className='box'>
            <div className="mb-3">
                <label className="form-lable">Date de départ</label>
                <input type="date" {...register("datedepart", {required:true})} className="form-control"/>
                <span className="text-danger" id="io">
                  {errors.datedepart?.type==="required"&&"Veuillez saire votre date de depart avant de soumettre"}
                </span>
              </div>
            </div>
            <div className='box'>
            <div className="mb-3">
                <label className="form-lable">Chambres</label> <br></br>
                <select {...register("chambre", {required:true})} className="form-control">
                  <option value="">--Please select--</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                <span className="text-danger" id="io">
                  {errors.chambre?.type==="required"&&"Le type de chambre est obligatoire"}
                </span>
              </div>
            </div>
            <div className='box'>
            <div className="mb-3">
                <label className="form-lable"></label>
                <button onClick={handleClick}  type="submit" className="btn btn-success btn-lg" id="po">Envoyer</button>
              </div>
            </div>
            
            
          </form>
          
          </div>
        
      </section>
    </>
  )
}

export default Couverture
