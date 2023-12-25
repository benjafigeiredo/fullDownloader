const { roles }  = require('../utils/constants');
const { encryptPassword } = require('../utils/encryptPassword');
const { generateAccessToken } = require('../utils/generateAccessToken');
const UserModel = require('../models/userModel');

const register = async (req, res) => {
    try {
        const payload = req.body;

        const requiredFields = ['username', 'firstName', 'lastName', 'email', 'password'];
        const missingFields = requiredFields.filter((field) => !(field in payload));

        if (missingFields.length > 0){
            return res.status(400).json({ error: "Missing fields", missingFields: missingFields})
        }

        let encryptedPassword = encryptPassword(payload.password);
        let role = payload.role || roles.USER;

        const newUser = await UserModel.createUser({
            username: payload.username,
            firstName: payload.firstName,
            lastName: payload.lastName,
            email: payload.email,
            password: encryptedPassword,
            role: role,
        });

        return res.status(201).json({
            success: true, 
            result: {
                user: newUser.toJSON(),
                token: generateAccessToken(payload.username, newUser.id),
            }
        });
    }
    catch (error) {
        console.log(`Error registering user: ${error}`);
        return res.status(500).json({ error: "Internal server error"});
    }
}

module.exports = {
    register,
}