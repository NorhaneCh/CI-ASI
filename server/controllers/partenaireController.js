const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const getPartenaires = async (req, res) => {
    try {
        const partenaires = await prisma.partenaire.findMany()
        res.json(partenaires);
        
    }
    catch (e) {
        console.log(e);
        res.status(500).json({ error: 'Erreur serveur' });
    }
} 

const createPartenaire = async (req, res) => {
    const { nom, email, tel } = req.body;
    try {
        const partenaire = await prisma.partenaire.create({
            data: {
                nom : nom,
                email : email,
                tel : tel
            }
        }).then((partenaire) => {
            res.json(partenaire);
        })
    }
    catch (e) {
        console.log(e);
        res.status(400).json({ error: e.message });
    }
}

const deletePartenaire = async (req, res) => {
    const {id} = req.params;

    try {

        const partenaire = await prisma.partenaire.delete({
            where: {
                id: parseInt(id)
            }
        })
        if (!partenaire) {
            return res.status(404).json({error: 'partenaire not found'})
        }
        res.status(200).json({message: 'partenaire deleted'})
        
        
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getPartenaires,
    createPartenaire,
    deletePartenaire
}