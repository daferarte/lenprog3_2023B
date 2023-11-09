const { Router } = require('express');
const {addUser, showUsers, showUser, updateUser, deleteUser, signIn}=
require('../controllers/users.controllers');

const routerUser = Router();

routerUser.get('/', showUsers);
routerUser.post('/login', signIn);
routerUser.get('/:id', showUser);
routerUser.post('/', addUser);
routerUser.put('/:id',updateUser);
routerUser.delete('/:id',deleteUser);

module.exports = routerUser;

