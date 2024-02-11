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
  const [formations, setFormations] = useState();
  const [domId,setDomId] = useState()

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
        console.log("Error fetching themes ", response);
      }
      setThemes(response);
    };
    getThemes();
  }, [themes]);

  // useEffect(() => {
  //   const getFormations = async () => {
  //     const response = await getRequest(`${baseUrl}/formations`);
  //     if (response.error) {
  //       console.log("Error fetching formations ", response);
  //     }
  //     setFormations(response);
  //   };
  //   getFormations();
  // }, [formations]);

  useEffect(() => {
    const getFormations = async () => {
      const response = await getRequest(`${baseUrl}/formations/${domId}`);
      if (response.error) {
        console.log("Error fetching formations ", response);
      }
      setFormations(response);
    };
    getFormations();
  }, [domId]);
  
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
        themes,
        formations,
        setDomId,
        domId
      }}
    >
      {children}
    </FormationContext.Provider>
  );
};
