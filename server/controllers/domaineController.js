const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getDomaines = async (req, res) => {
    try {
        const domaines = await prisma.domaine.findMany()
        res.json(domaines);
        
    }
    catch (e) {
        console.log(e);
        res.status(500).json({ error: 'Erreur serveur' });
    }
}

const createDomaine = async (req, res) => {
    const { designation } = req.body;
    try {
        const domaine = await prisma.domaine.create({
            data: {
                designation : designation
            }
        }).then((domaine) => {
            res.json(domaine);
        })
    }
    catch (e) {
        console.log(e);
        res.status(400).json({ error: e.message });
    }
}

const deleteDomaine = async (req, res) => {
    const {id} = req.params;

    try {

        const domaine = await prisma.domaine.delete({
            where: {
                id: parseInt(id)
            }
        })
        if (!domaine) {
            return res.status(404).json({error: 'domaine not found'})
        }
        res.status(200).json({message: 'domaine deleted'})
        
        
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getDomaines,
    createDomaine,
    deleteDomaine
}


