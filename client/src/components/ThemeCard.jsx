import React from "react";
import { money, time } from "../assets/index.js";
import { useContext } from "react";
import { FormationContext } from "../context/FormationContext.jsx";
const ThemeCard = ({ theme }) => {
  const { setSelectedTheme } = useContext(FormationContext);
  return (
    <div
      className="text-[15px] flex flex-col gap-3 border-2 border-color-blue/10 bg-color-blue/10 rounded-xl p-4 w-[320px] h-[200px] hover:cursor-pointer "
      onClick={() => setSelectedTheme(theme)}
    >
      <p className="font-semibold">{theme.designation}</p>
      <div className="flex flex-row gap-2 items-center">
        <img className=" w-[25px] h-[25px]" src={time} alt="formateur" />
        <p>
          <span>{theme.Duree}</span>
          <span> jours</span>
        </p>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <img className=" w-[25px] h-[25px]" src={money} alt="formateur" />
        <p>
          <span>{theme.TarifP}</span>
          <span> DA</span>
        </p>
      </div>
      <div className="flex flex-row text-[14px] gap-9">
        <p className="text-color-blue bg-color-blue/10 px-4 py-1 rounded-md">
          {theme.Niveau}
        </p>
        <p
          className={`flex flex-row gap-2 ${
            theme.isCertif
              ? " text-green-500 bg-green-500/10 "
              : "text-red-500 bg-red-500/10"
          } px-4 py-1 text-[14px] rounded-md`}
        >
          {theme.isCertif ? "Certifié" : "Non-Certifié"}
        </p>
      </div>
    </div>
  );
};

export default ThemeCard;
