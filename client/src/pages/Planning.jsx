import React, { useContext, useEffect } from "react";
import { styles } from "../styles.js";
import { Link } from "react-router-dom";
import { FormationContext } from "../context/FormationContext.jsx";
import FormationCard from "../components/FormationCard.jsx";

const Planning = () => {
  const { domaines, formations, setDomId, domId } =
    useContext(FormationContext);
  useEffect(() => {
    console.log("domaine id : ", domId);
    console.log("formations : ", formations);
  }, [domId]);
  return (
    <div className={`${styles.padding} max-w-7xl mx-auto z-0`}>
      <p className="text-[30px] text-color-blue font-semibold text-center mb-10">
        Planning des formations
      </p>
      <div className="w-[90%] mx-auto">
        {domaines?.map((domaine) => (
          <>
            {setDomId(domaine.id) && (
              <div className="mt-24">
                <p className="font-semibold text-[20px]">
                  {domaine.designation}
                </p>
                <div className="flex flex-wrap gap-6 mt-6">
                  {formations?.map((formation) => (
                    <Link to={`/theme/${formation.id}`}>
                      <FormationCard formation={formation} />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Planning;
