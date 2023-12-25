const bcrypt = require('bcrypt');

const encryptPassword = (password) => {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const encryptedPassword = bcrypt.hashSync(password, salt);
    return encryptedPassword;
}

module.exports = {
    encryptPassword,
}