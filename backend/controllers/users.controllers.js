const { response, request } = require('express');


const addUser = (req = request, res = response)=>{
    res.send(`agregando usuario`);
}

const showUsers = (req = request, res = response)=>{
    res.send(`mostrando usuarios`);
}

const showUser = (req = request, res = response)=>{
    res.send(`mostrando usuario`);
}

const updateUser = (req = request, res = response)=>{
    res.send(`actualizando usuarios`);
}

const deleteUser = (req = request, res = response)=>{
    res.send(`eliminando usuarios`);
}

module.exports={
    addUser,
    showUsers,
    showUser,
    updateUser,
    deleteUser
}