const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const getFormateurs = async (req, res) => {
    try {
        const formateurs = await prisma.formateur.findMany()
        res.json(formateurs);
    }
    catch (e) {
        console.log(e);
        res.status(500).json({ error: e.message });
    }
}

const createFormateur = async (req, res) => {
    const { matricule, nom, prenom, email, tel, adresse, specialite, fonction, NumCompte, Salaire } = req.body;
    try {
        const formateur = await prisma.formateur.create({
            data: {
                matricule: matricule,
                nom: nom,
                prenom: prenom,
                email: email,
                tel: tel,
                adresse: adresse,
                specialite: specialite,
                fonction: fonction,
                NumCompte: NumCompte,
                Salaire: Salaire
            }
        }).then((formateur) => {
            res.json(formateur);
        })
    }
    catch (e) {
        console.log(e);
        res.status(400).json({ error: e.message });
    }
}


const deleteFormateur = async (req, res) => {
    const { id } = req.params;

    try {

        const formateur = await prisma.formateur.delete({
            where: {
                matricule: parseInt(id)
            }
        })
        if (!formateur) {
            return res.status(404).json({ error: 'formateur not found' })
        }
        res.status(200).json({ message: 'formateur deleted' })
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}


const getFormateurById = async (req, res) => {
    const { id } = req.params;

    try {
        const formateur = await prisma.formateur.findUnique({
            where: {
                matricule: parseInt(id)
            }
        })
        if (!formateur) {
            return res.status(404).json({ error: 'formateur not found' })
        }
        res.json(formateur)
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    getFormateurs,
    createFormateur,
    deleteFormateur, 
    getFormateurById
}