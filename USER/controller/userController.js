const userModel = require('../model/userModel');

const createUser = (req, res) => {
  const newUser = req.body;
  res.send('Usuario $(newUser.name) criado com sucesso');
};

module.exports = {createUser};
