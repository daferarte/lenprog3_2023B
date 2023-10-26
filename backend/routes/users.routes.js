const { Router } = require('express');
const {addUser, showUsers, showUser, updateUser, deleteUser}=
require('../controllers/users.controllers');

const routerUser = Router();

routerUser.get('/', showUsers);
routerUser.get('/:id', showUser);
routerUser.post('/', addUser);
routerUser.put('/:id',updateUser);
routerUser.delete('/:id',deleteUser);

module.exports = routerUser;

