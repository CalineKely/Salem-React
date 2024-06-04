import React from "react";
import img from "../images/42.jpg";
import Swal from "sweetalert2";
import Back from "../common/Back";
import "./contact.css";
import axios from "axios";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (data) => {
    Swal.fire({
      title: "Êtes-vous sur de vouloir envoyer ?",
      showDenyButton: true,
      confirmButtonText: "Envoyer",
      denyButtonText: `Annuler`,
    }).then((result) => {
      if (result.isConfirmed) {
        axios.post("http://localhost:7000/api/ajouterCommentaire", data)
          .then(response => {
            Swal.fire("Enregistré!", response.data, "success");
          })
          .catch(error => {
            Swal.fire("Erreur", error.response.data, "error");
          });
      } else if (result.isDenied) {
        Swal.fire("Données non enregistrées", "", "info");
      }
    });
  };

  return (
    <>
      <section className='contact mb'>
        <Back name='Contactez-nous' title="Pour plus d'informations" cover={img} />
        <div className='container'>
          <form className='shadow' onSubmit={handleSubmit(onSubmit)}>
            <h4>Veuillez remplir le formulaire</h4> <br />
            <div>
              <input type='text' id="nom" placeholder='Nom' {...register("nom", { required: true })} />
              {errors.nom && <span>Nom est requis</span>}
              <input type='text' id="prenom" placeholder='Prénom' {...register("prenom", { required: true })} />
              {errors.prenom && <span>Prénom est requis</span>}
              <input type='text' id="email" placeholder='Email' {...register("email", { required: true })} />
              {errors.email && <span>Email est requis</span>}
              <input type='text' id="phone" placeholder='Téléphone' {...register("phone", { required: true })} />
              {errors.phone && <span>Téléphone est requis</span>}
            </div>
            <h4> Veuillez nous rédiger vos questions/commentaires ci-dessous</h4> 
            <br></br>
            
            <textarea id="texte" cols='30' rows='10' {...register("texte", { required: true })}></textarea>
            {errors.texte && <span>Texte est requis</span>}
            <button type="submit">Envoyer ma requête</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
