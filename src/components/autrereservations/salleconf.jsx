import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import "./autreR.css";

const Salleconf = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (data) => {
    Swal.fire({
      title: "Êtes-vous sûr de vouloir réserver?",
      showDenyButton: true,
      confirmButtonText: "Réserver",
      denyButtonText: `Annuler`,
    }).then((result) => {
      if (result.isConfirmed) {
        axios.post("http://localhost:7000/api/reserverSalle", data)
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
      <section className='pricing mb'>
        <div className='price container' id="exe">
          <form onSubmit={handleSubmit(onSubmit)} id="plo">
            <h2>Réservation de la salle de conférence</h2>
            <div>
              <input
                type="text"
                placeholder='Nom'
                {...register("nom", { required: true })}
                className="form-control"
                id="meme"
              />
              <span className="text-danger" id="red">
                {errors.nom?.type === "required" && "Nom obligatoire"}
              </span>
            </div>
            <div>
              <input
                type="text"
                placeholder="Prénom"
                {...register("prenom", { required: true })}
                className="form-control"
                id="meme"
              />
              <span className="text-danger" id="red">
                {errors.prenom?.type === "required" && "Prénom obligatoire"}
              </span>
            </div>
            <div>
              <input
                type="text"
                placeholder="Adresse"
                {...register("adresse", { required: true })}
                className="form-control"
                id="meme"
              />
              <span className="text-danger" id="red">
                {errors.adresse?.type === "required" && "Adresse obligatoire"}
              </span>
            </div>
            <div>
              <input
                type="text"
                placeholder="Téléphone"
                {...register("phone", { required: true })}
                className="form-control"
                id="meme"
              />
              <span className="text-danger" id="red">
                {errors.phone?.type === "required" && "Téléphone obligatoire"}
              </span>
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
                className="form-control"
                id="meme"
              />
              <span className="text-danger" id="red">
                {errors.email?.type === "required" && "Email obligatoire"}
              </span>
            </div>
            <div>
              <label>Date de réservation</label>
              <input
                type="date"
                {...register("date_salle", { required: true })}
                className="form-control"
                id="meme"
              />
              <span className="text-danger" id="red">
                {errors.date_salle?.type === "required" && "Date obligatoire"}
              </span>
            </div>
            <div>
              <button type="submit" className="btn btn-success" id="momo">Envoyer</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Salleconf;
