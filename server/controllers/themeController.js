const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const getThemes = async (req, res) => {

    try {
        const themes = await prisma.theme.findMany()
        res.json(themes);
    }
    catch (e) {
        console.log(e);
        res.status(500).json({ error: e.message });
    }
}


const createTheme = async (req, res) => {

    const { domId, designation, Duree, Niveau, TarifP, isCertif } = req.body;
    try {
        const theme = await prisma.theme.create({
            data: {
                domId : domId,
                designation : designation,
                Duree : Duree,      
                Niveau :  Niveau,     
                TarifP : TarifP,   
                isCertif: isCertif
            }
        }).then((theme) => {
            res.json(theme);
        })
    }
    catch (e) {
        console.log(e);
        res.status(400).json({ error: e.message });
    }

}



const deleteTheme = async (req, res) => {

    const {id} = req.params;

    try {

        const theme = await prisma.theme.delete({
            where: {
                id: parseInt(id)
            }
        })
        if (!theme) {
            return res.status(404).json({error: 'theme not found'})
        }
        res.status(200).json({message: 'theme deleted'})
        
        
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }

}


const getThemeByDomaine = async (req, res) => {

    const {domId} = req.params;
    try {
        const themes = await prisma.theme.findMany({
            where: {
                domId: parseInt(domId)
            }
        })
        if (!themes) {
            return res.status(404).json({error: 'themes not found'})
        }
        res.json(themes);
    }
    catch (e) {
        console.log(e);
        res.status(500).json({ error: e.message });
    }
}

const getThemeByDomaine2 = async (domId) => {

    
    try {
        const themes = await prisma.theme.findMany({
            where: {
                domId: parseInt(domId)
            }
        })
        if (!themes) {
            return null;
        }
        return themes;
    }
    catch (e) {
        console.log(e);
        return null;
    }
}

    

module.exports = {
    getThemes,
    createTheme,
    deleteTheme,
    getThemeByDomaine,
    getThemeByDomaine2
}