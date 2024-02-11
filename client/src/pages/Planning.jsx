import React, { useContext, useEffect } from "react";
import { styles } from "../styles.js";
import { Link } from "react-router-dom";
import { FormationContext } from "../context/FormationContext.jsx";
import { formations } from "../constants/index.js";
import FormationCard from "../components/FormationCard.jsx";

const Planning = () => {
  const { setSelectedFormation, domaines } = useContext(FormationContext);
  useEffect(() => {
    console.log("domaines : ", domaines);
  }, []);
  const SelectFormation = (formation) => {
    setSelectedFormation(formation);
  };
  return (
    <div className={`${styles.padding} max-w-7xl mx-auto z-0`}>
      <p className="text-[30px] text-color-blue font-semibold text-center mb-10">
        Planning des formations
      </p>
      <div className="w-[90%] mx-auto">
      {domaines?.map((domaine) => (
          <div className="mt-24">
            <p className="font-semibold text-[20px]">{domaine.designation}</p>
            <div className="flex flex-wrap gap-6 mt-6">
              {formations?.map((formation) => (
                <div>
                  {formation.domId == domaine.id && (
                    <Link to={`/theme/${formation.id}`}>
                      <div onClick={() => SelectFormation(formation)}>
                        <FormationCard formation={formation} />
                      </div>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Planning;
