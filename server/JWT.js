const { sign, verify } = require('jsonwebtoken');


const createToken = (user) => {

    const accessToken = sign({ username: user.username, id: user.id, role: user.role }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '15m'
    });
}


const validateToken = (req, res, next) => {
    const accessToken = req.cookies['access-token'];

    if (!accessToken) {
        return res.status(400).json({ error: 'User not authenticated' });
    }

    try {
        const validToken = verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
        if (validToken) {
            req.authenticated = true;
            return next();
        }
    }
    catch (e) {
        return res.status(400).json({ error: e });
    }
}

module.exports = { createToken, validateToken };