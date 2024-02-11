import { createContext, useEffect, useState } from "react";
import {
  baseUrl,
  getRequest,
  postRequest,
  deleteRequest,
} from "../utils/services";
export const FormationContext = createContext();

export const FormationContextProvider = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState();
  const [selectedFormation, setSelectedFormation] = useState();
  const [activeNav, setActiveNav] = useState("");
  const [domaines, setDomaines] = useState();
  const [themes, setThemes] = useState();

  useEffect(() => {
    const getDomaines = async () => {
      const response = await getRequest(`${baseUrl}/domaines`);
      if (response.error) {
        console.log("Error fetching domaines ", response);
      }
      setDomaines(response);
    };
    getDomaines();
  }, [domaines]);

  useEffect(() => {
    const getThemes = async () => {
      const response = await getRequest(`${baseUrl}/themes`);
      if (response.error) {
        console.log("Error fetching domaines ", response);
      }
      setThemes(response);
    };
    getThemes();
  }, [themes]);

  return (
    <FormationContext.Provider
      value={{
        selectedTheme,
        setSelectedTheme,
        activeNav,
        setActiveNav,
        selectedFormation,
        setSelectedFormation,
        domaines,
        themes
      }}
    >
      {children}
    </FormationContext.Provider>
  );
};
