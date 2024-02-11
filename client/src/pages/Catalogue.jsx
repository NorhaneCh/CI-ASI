import React, { useContext } from "react";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import { FormationContext } from "../context/FormationContext";
import ThemeCard from "../components/ThemeCard.jsx";
const Catalogue = () => {
  const { domaines, themes } = useContext(FormationContext);
  return (
    <div className={`${styles.padding} max-w-7xl mx-auto z-0`}>
      <p className="text-[30px] text-color-blue font-semibold text-center mb-10">
        Catalogue des formations
      </p>
      <div className="w-[90%] mx-auto">
        {domaines?.map((domaine) => (
          <div className="mt-24">
            <p className="font-semibold text-[20px]">{domaine.designation}</p>
            <div className="flex flex-wrap gap-6 mt-6">
              {themes?.map((theme) => (
                <>
                  {theme.domId == domaine.id && (
                    <Link to={`/theme/${theme.id}`}>
                      <ThemeCard theme={theme} />
                    </Link>
                  )}
                </>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogue;
