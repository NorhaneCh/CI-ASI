import React from "react";
import { styles } from "../styles";
import { formation, arrow } from "../assets/index.js";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { FormationContext } from "../context/FormationContext.jsx";
const Accueil = () => {
  const { setSelectedFormation,formations } = useContext(FormationContext);
  const SelectFormation = (formation) => {
    setSelectedFormation(formation);
  };
  return (
    <div className="z-0 min-h-screen bg-blue-200">
      <div className={`${styles.paddingX} max-w-7xl mx-auto z-0`}>
        <div className="flex flex-row gap-24 items-center justify-center">
          <img src={formation} alt="formation" className="w-[500px]" />
          <div className="flex flex-col gap-12 items-center ">
            <p className="text-[40px] text-center font-semibold">
              <span>Profitez des formations</span>
              <span> offertes par l'ESI</span>
            </p>
            <Link to="/catalogue">
              <button className="flex flex-row gap-6 py-2 px-9 bg-color-blue text-white items-center justify-center rounded-md">
                <p className="text-white text-[15px] font-semibold">
                  Consulter le catalogue
                </p>
                <img src={arrow} alt="frame" className="w-[25px]" />
              </button>
            </Link>
          </div>
        </div>
        <p className="text-[25px] font-semibold text-center">
          Formations à venir
        </p>
        <div className="flex flex-col max-h-[250px] overflow-scroll items-center bg-white mt-9 w-[60%] mx-auto rounded-md border-2 border-black/10">
          {formations?.map((formation) => (
            <Link to={`/formation/${formation.id}`} className="w-full">
              <div
                className="py-3 border-b border-black/10 flex flex-row justify-evenly hover:bg-blue-100"
                onClick={() => SelectFormation(formation)}
              >
                <p>{formation.designation}</p>
                <p>{`${formation.nomFormateur} ${formation.prenomFormateur}`}</p>
                <p>{formation.DateDebut.slice(0,10)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accueil;
