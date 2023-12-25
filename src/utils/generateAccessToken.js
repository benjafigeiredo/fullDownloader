const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../../config/config');

const generateAccessToken = (username, userId) => {
    console.log('JWT_SECRET_KEY', JWT_SECRET_KEY)
    const payload = {
        username: username,
        userId: userId, 
    }
    
    const options = {
        expiresIn: '1h',
    }

    const accessToken = jwt.sign(payload, JWT_SECRET_KEY, options);

    return accessToken;
}

module.exports = {
    generateAccessToken, 
}