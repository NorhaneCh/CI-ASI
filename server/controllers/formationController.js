const { PrismaClient } = require('@prisma/client');
const { getThemeByDomaine2 } = require('./themeController');
const prisma = new PrismaClient();

const getFormations = async (req, res) => {

    try {
        const formations = await (await prisma.formation.findMany(
            {
                orderBy: {
                    DateCreation: 'desc'
                }
            }
        ))
        res.json(formations);
    }
    catch (e) {
        console.log(e);
        res.status(500).json({ error: e.message });
    }
}


const createFormation = async (req, res) => {
    const { themeId, partId, formateurId, designation, DateDebut, DateFin, NbJours, NbParticipants, lieu, TarifP, NbFormateur} = req.body;
    try {
        const formation = await prisma.formation.create({
            data: {
                themeId : themeId,
                partId: partId,
                formateurId: formateurId,
                designation: designation,
                DateDebut: DateDebut,
                DateFin: DateFin,
                NbJours: NbJours,
                NbParticipants: NbParticipants,
                lieu: lieu,
                TarifP: TarifP,
                NbFormateur: NbFormateur
            }
        }).then((formation) => {
            res.json(formation);
        })
    }
    catch (e) {
        console.log(e);
        res.status(400).json({ error: e.message });
    }
}


const deleteFormation = async (req, res) => {
    const { id } = req.params;

    try {

        const formation = await prisma.formation.delete({
            where: {
                id: parseInt(id)
            }
        })
        if (!formation) {
            return res.status(404).json({ error: 'formation not found'})
        }
        res.status(200).json({ message: 'formation deleted' })
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }

}


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
            return res.status(404).json({ error: 'There are no themes in this domaine' });
        }

        const themesId = themes.map(theme => theme.id);
        const formations = [];

        for (const themeId of themesId) {
            const themeFormations = await prisma.formation.findMany({
                where: {
                    themeId: themeId
                }
            });
            formations.push(themeFormations);
        }

        // Assuming you want to send back all formations related to themes in this domaine
        res.status(200).json(formations);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



module.exports = {
    getFormations,
    createFormation,
    deleteFormation,
    getFormationByDomaine
}

