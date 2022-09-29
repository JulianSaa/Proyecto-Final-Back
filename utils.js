const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports.encrypt = (encryption) => {
    return bcrypt.hashSync(encryption, saltRounds);
}

module.exports.checkPass = (password, hash) => {
    return bcrypt.compareSync(password, hash);
}