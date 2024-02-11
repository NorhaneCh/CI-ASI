const { PrismaClient } = require('@prisma/client'); 
const prisma = new PrismaClient();



const getParticipants = async (req, res) => {
    try {
        const participants = await prisma.participant.findMany()
        res.json(participants);
        
    }
    catch (e) {
        console.log(e);
        res.status(500).json({ error: 'Erreur serveur' });
    }
}