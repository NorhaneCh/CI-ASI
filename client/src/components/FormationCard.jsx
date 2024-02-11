import React from "react";
import { location, person, date, organisme } from "../assets/index.js";
const FormationCard = ({ formation }) => {
  return (
    <div className="text-[15px] flex flex-col gap-3 border-2 border-color-blue/10 bg-color-blue/10 rounded-xl p-4 w-[320px]  hover:cursor-pointer ">
      <p className="font-semibold">Thème</p>
      <div className="flex flex-row gap-2 items-center">
        <img className=" w-[25px] h-[25px]" src={person} alt="formateur" />
        <p>Formateur</p>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <img className=" w-[25px] h-[25px]" src={organisme} alt="formateur" />
        <p>Organisme</p>
      </div>
      <div className="flex flex-row gap-3">
        <img className=" w-[20px] h-[20px]" src={location} alt="localisation" />
        <p>Lieu</p>
      </div>
      <div className="flex flex-row text-[14px] gap-9">
        <p className="text-color-blue bg-color-blue/10 p-2 rounded-md">
          20 participants
        </p>
        <div className="flex flex-row gap-2 text-green-500 bg-green-500/10 p-2 text-[14px]">
          <img className="w-[22px] h-[22px]" src={date} alt="date" />
          <p>12/10/2024</p>
        </div>
      </div>
    </div>
  );
};

export default FormationCard;