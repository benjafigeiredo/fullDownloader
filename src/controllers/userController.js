const UserModel = require('../models/userModel');

const getAllUsers = (req, res) => {
    UserModel.findAllUsers()
        .then((users) => {
            return res.status(200).json({
                    status: true, 
                    data: users, 
                }
            );
        })
        .catch((error) => {
            return res.status(500).json({
                    status: false,
                    error: error,
            });
        })
}

module.exports = {
    getAllUsers,
}