import React, { useContext } from "react";
import { FormationContext } from "../context/FormationContext.jsx";
import { styles } from "../styles.js";
import { money, time } from "../assets/index.js";

const Theme = () => {
  const { selectedTheme } = useContext(FormationContext);
  return (
    <div
      className={`${styles.padding} z-0 max-w-7xl mx-auto w-[60%] text-[15px] flex flex-col gap-4`} >
      <p className="text-center font-semibold text-[24px]">
        {selectedTheme.designation}
      </p>
      <div className="flex flex-row gap-2 items-center">
        <img className=" w-[25px] h-[25px]" src={time} alt="formateur" />
        <p>
          <span>{selectedTheme.Duree}</span>
          <span> jours</span>
        </p>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <img className=" w-[25px] h-[25px]" src={money} alt="formateur" />
        <p>
          <span>{selectedTheme.TarifP}</span>
          <span> DA</span>
        </p>
      </div>
      <div className="flex flex-row text-[14px] gap-9">
        <p className="text-color-blue bg-color-blue/10 px-4 py-1 rounded-md">
          {selectedTheme.Niveau}
        </p>
        <p className="flex flex-row gap-2 text-green-500 bg-green-500/10 px-4 py-1 text-[14px] rounded-md">
          {selectedTheme.isCertif ? "Certifié" : "Non-Certifié"}
        </p>
      </div>
      <p className="font-semibold mt-12">Prérequis : </p>
      <p>- Bonne connaissance de l’outil informatique</p>
      <p className="font-semibold mt-12">Objectifs : </p>
      <p>- Apprendre les commandes de bases du système Linux</p>
      <p>- Se familiariser avec l’arborescence des chiers</p>
      <p>- Utiliser l’interface graphique</p>
      <p className="font-semibold mt-12">Contenu de formation : </p>
      <button className="px-6 py-2 bg-color-blue text-white rounded-xl mt-12 font-medium text-[13px] ml-auto hover:bg-blue-500">
        S'inscrire
      </button>
    </div>
  );
};

export default Theme;
