import React, { useContext } from "react";
import { FormationContext } from "../context/FormationContext.jsx";
import { styles } from "../styles.js";
import {
  person,
  organisme,
  location,
  date,
  money,
  time,
  formation,
} from "../assets/index.js";

const Formation = () => {
  const { selectedFormation } = useContext(FormationContext);
  return (
    <div
      className={`${styles.padding} z-0 max-w-7xl mx-auto w-[60%] text-[15px] flex flex-col gap-4`}
    >
      <p className="text-center font-semibold text-[24px]">
        {selectedFormation.designation}
      </p>
      <div className="flex flex-row gap-2 items-center">
        <img className=" w-[25px] h-[25px]" src={person} alt="formateur" />
        <p>{`${selectedFormation.nomFormateur} ${selectedFormation.prenomFormateur}`}</p>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <img className=" w-[25px] h-[25px]" src={organisme} alt="formateur" />
        <p>{selectedFormation.nomPartenaire}</p>
      </div>
      <div className="flex flex-row gap-3">
        <img className=" w-[20px] h-[20px]" src={location} alt="localisation" />
        <p>{selectedFormation.lieu}</p>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <img className=" w-[25px] h-[25px]" src={money} alt="formateur" />
        <p>
          <span>{selectedFormation.TarifP}</span>
          <span> DA</span>
        </p>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <img className=" w-[25px] h-[25px]" src={time} alt="formateur" />
        <p>
          <span>{selectedFormation.NbJours}</span>
          <span> jours</span>
        </p>
      </div>

      <div className="flex flex-row gap-9">
        <p className="text-color-blue bg-color-blue/10 p-2 rounded-md w-[130px] text-[14px]">
          <span>{selectedFormation.NbParticipants}</span>
          <span> Participants</span>
        </p>
        <div className="flex flex-row gap-2 text-green-500 bg-green-500/10 p-2 text-[14px] rounded-md">
          <img className="w-[22px] h-[22px]" src={date} alt="date" />
          <p className="text-[14px]">
            {selectedFormation.DateDebut.slice(0, 10)}
          </p>
        </div>
        <div className="flex flex-row gap-2 text-green-500 bg-green-500/10 p-2 text-[14px] rounded-md">
          <img className="w-[22px] h-[22px]" src={date} alt="date" />
          <p className="text-[14px]">
            {" "}
            {selectedFormation.DateFin.slice(0, 10)}
          </p>
        </div>
      </div>
      <p className="font-semibold mt-12">Prérequis : </p>
      <p>- Bonne connaissance de l’outil informatique</p>
      <p className="font-semibold mt-12">Objectifs : </p>
      <p>- Apprendre les commandes de bases du système Linux</p>
      <p>- Se familiariser avec l’arborescence des chiers</p>
      <p>- Utiliser l’interface graphique</p>
      <p className="font-semibold mt-12">Contenu de formation : </p>
      <button className="px-6 py-2 bg-color-blue text-white rounded-xl mt-12 font-medium text-[13px] ml-auto hover:bg-blue-500">
        Demander Devis
      </button>
    </div>
  );
};

export default Formation;
