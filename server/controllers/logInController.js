const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');

const logIn = async (req, res) => {

    const { email, password } = req.body;
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })

        if (!user) {
            return res.status(404).json({ error: 'user not found' })
        }
        bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
                return res.status(401).json({ error: 'password email unmatch' })
            }
            if (result) {
                return res.status(200).json({ message: 'Auth successful' })
            }
            //res.status(401).json({ error: 'Auth failed' })
            
        })
        res.json(user);
    }
    catch (e) {
        console.log(e);
        res.status(500).json({ error: e.message });
    }
}


const createUser = async (req, res) => {

    const { email, password, role } = req.body;
    try {
        const user = await prisma.user.create({
            data: {
                email: email,
                password: password,
                role: role,
                
            }
        }).then((user) => {
            res.json(user);
        })
    }
    catch (e) {
        console.log(e);
        res.status(400).json({ error: e.message });
    }
}


module.exports = { logIn };