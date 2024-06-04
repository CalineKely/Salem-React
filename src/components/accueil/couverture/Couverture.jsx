import React, { useState, useEffect } from "react";
import Heading from "../../common/Heading";
import "./couverture.css";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";

const Couverture = () => {
  const [message, setMessage] = useState('');

  const { register, formState: { errors }, handleSubmit } = useForm();

  useEffect(() => {
    const logVisit = async () => {
      try {
        await axios.post("http://localhost:7000/api/logVisit");
      } catch (error) {
        console.error("Erreur lors de la journalisation de la visite:", error);
      }
    };

    logVisit();
  }, []);


  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:7000/api/reserverChambre", data);
      setMessage(response.data);
    } catch (error) {
      console.error(error);
      setMessage("Une erreur s'est produite!");
    }
  };

  const handleClick = async () => {
    const { value: formValues } = await Swal.fire({
      title: "Informations",
      html: `
        <input id="nom" placeholder="Nom" class="swal2-input">
        <input id="prenom" placeholder="Prénom" class="swal2-input">
        <input id="phone" placeholder="Téléphone" class="swal2-input">
        <input id="adresse" placeholder="Domicile" class="swal2-input">
        <input id="gmail" placeholder="Email" class="swal2-input">
      `,
      focusConfirm: false,
      preConfirm: () => {
        return {
          nom: document.getElementById("nom").value,
          prenom: document.getElementById("prenom").value,
          phone: document.getElementById("phone").value,
          adresse: document.getElementById("adresse").value,
          gmail: document.getElementById("gmail").value,
        };
      }
    });

    if (formValues) {
      const reservationData = {
        ...formValues,
        datearriver: document.querySelector("input[name='datearriver']").value,
        datedepart: document.querySelector("input[name='datedepart']").value,
        chambre: document.querySelector("select[name='chambre']").value,
      };

      try {
        const response = await axios.post("http://localhost:7000/api/reserverChambre", reservationData);
        setMessage(response.data);
      } catch (error) {
        console.error(error);
        setMessage("La chambre que vous avez selectionné est déja occupé à cette date");
      }
    }
  };

  return (
    <>
      <section className='couv'>
        <div className='container'>
          <Heading title='SALEM HÔTEL' subtitle='Aux services de votre confort et de votre bien-être' />
          <p className="text-success">{message}</p>
          <form className='flex' onSubmit={handleSubmit(onSubmit)}>
            <div className='box'>
              <div className="mb-3">
                <label className="form-lable">Date d'arrivée</label>
                <input type="date" {...register("datearriver", { required: true })} className="form-control" />
                <span className="text-danger" id="io">
                  {errors.datearriver?.type === "required" && "Veuillez saisir votre date d'arrivée avant de soumettre"}
                </span>
              </div>
            </div>
            <div className='box'>
              <div className="mb-3">
                <label className="form-lable">Date de départ</label>
                <input type="date" {...register("datedepart", { required: true })} className="form-control" />
                <span className="text-danger" id="io">
                  {errors.datedepart?.type === "required" && "Veuillez saisir votre date de départ avant de soumettre"}
                </span>
              </div>
            </div>
            <div className='box'>
              <div className="mb-3">
                <label className="form-lable">Chambres</label> <br />
                <select {...register("chambre", { required: true })} className="form-control">
                  <option value="">--Please select--</option>
                  <option value="Chambre simple">Chambre simple</option>
                  <option value="Chambre familiale">Chambre familiale</option>
                  <option value="Suite nuptiale">Suite nuptiale</option>
                  <option value="Chambre VIP">Chambre VIP</option>
                  <option value="Suite Présidentielle">Suite Présidentielle</option>
                </select>
                <span className="text-danger" id="io">
                  {errors.chambre?.type === "required" && "Le type de chambre est obligatoire"}
                </span>
              </div>
            </div>
            <div className='box'>
              <div className="mb-3">
                <label className="form-lable"></label>
                <button onClick={handleClick} type="button" className="btn btn-success btn-lg" id="po">Envoyer</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Couverture;
