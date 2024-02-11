const { PrismaClient } = require("@prisma/client");
const { getThemeByDomaine2 } = require("./themeController");
const prisma = new PrismaClient();

const getFormations = async (req, res) => {
  try {
    const formations = await await prisma.formation.findMany({
      orderBy: {
        DateCreation: "desc",
      },
    });

    const result = [];

    for (const formation of formations) {
      console.log(formation);

      const formateur = await prisma.formateur.findUnique({
        where: {
          matricule: formation.formateurId,
        },
      });

      const partenaire = await prisma.partenaire.findUnique({
        where: {
          id: formation.partId,
        },
      });

      
        const data =  {
          id: formation.id,
          partId: formation.partId,
          formateurId: formation.formateurId,
          domId: formation.domId,
          designation: formation.designation,
          DateDebut: formation.DateDebut,
          DateFin: formation.DateFin,
          NbJours: formation.NbJours,
          NbParticipants: formation.NbParticipants,
          lieu: formation.lieu,
          TarifP: formation.TarifP,
          devis: formation.devis,
          nomFormateur: formateur.nom,
          prenomFormateur: formateur.prenom,
          nomPartenaire: partenaire.nom,
  
        }

        result.push(data);
    }

    res.json(result);
  
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e.message });
  }
};


const createFormation = async (req, res) => {
  const {
    themeId,
    partId,
    formateurId,
    designation,
    DateDebut,
    DateFin,
    NbJours,
    NbParticipants,
    lieu,
    TarifP,
    devis,
  } = req.body;
  try {
    const formation = await prisma.formation
      .create({
        data: {
          themeId: themeId,
          partId: partId,
          formateurId: formateurId,
          designation: designation,
          DateDebut: DateDebut,
          DateFin: DateFin,
          NbJours: NbJours,
          NbParticipants: NbParticipants,
          lieu: lieu,
          TarifP: TarifP,
          devis: devis,
        },
      })
      .then((formation) => {
        res.json(formation);
      });
  } catch (e) {
    console.log(e);
    res.status(400).json({ error: e.message });
  }
};



const deleteFormation = async (req, res) => {
  const { id } = req.params;

  try {
    const formation = await prisma.formation.delete({
      where: {
        id: parseInt(id),
      },
    });
    if (!formation) {
      return res.status(404).json({ error: "formation not found" });
    }
    res.status(200).json({ message: "formation deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// const getFormationByDomaine = async (req, res) => {
//     const { domId } = req.params;

//     try {

//         const themes = await getThemeByDomaine(domId);
//         if (!themes) {
//             return res.status(404).json({ error: 'theres no formation in this domaine' })
//         }

//         const themesId = themes.map(theme => theme.id);
//         const formations = [];

//         for (const themeId of themesId){
//             const themeFormations = await prisma.formation.findMany({
//                 where: {
//                     themeId: themeId
//                 }
//             })
//             formations.push(themeFormations);
//         }
//     }
//     catch (error) {
//         res.status(400).json({ error: error.message })
//     }

// }

const getFormationByDomaine = async (req, res) => {
  const { domId } = req.params;

  try {
    const themes = await getThemeByDomaine2(domId);

    if (!themes || themes.length === 0) {
      return res
        .status(404)
        .json({ error: "There are no themes in this domaine" });
    }

    const themesId = themes.map((theme) => theme.id);
    const formations = [];

    for (const themeId of themesId) {
      const themeFormations = await prisma.formation.findMany({
        where: {
          themeId: themeId,
        },
      });
      if (themeFormations.length > 0) {
        formations.push(themeFormations);
      }
    }

    // Assuming you want to send back all formations related to themes in this domaine
    res.status(200).json(formations[0]);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const getFormationById = async (req, res) => {
  const { id } = req.params;

  try {

    const formation = await prisma.formation.findUnique({
      where: {
        id: parseInt(id)
      }
    })
    if (!formation) {
      return res.status(404).json({ error: 'formation not found' })
    }
    

    const formateur = await prisma.formateur.findUnique({
      where: {
        matricule: formation.formateurId
      }

      
    })

    

    const partenaire = await prisma.partenaire.findUnique({
      where: {
        id: formation.partId
      }
    })

    return res.json({formation, formateur, partenaire})
  }
  catch (error) {
    res.status(400).json({ error: error.message })
  }
  
}


module.exports = {
  getFormations,
  createFormation,
  deleteFormation,
  getFormationByDomaine,
  getFormationById,
};
