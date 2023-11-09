const { response, request } = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const addUser = async(req = request, res = response)=>{

    const { email, name } = req.body.user;
    console.log(email);
    const user = await prisma.user.create({
        data: {
            email,
            name
        }
    })

    res.status(201).json(user);
}

const showUsers = async(req = request, res = response)=>{
    
    const users = await prisma.user.findMany()

    res.status(200).json(users)
}

const showUser = async(req = request, res = response)=>{
    const { id } = req.params
    const user = await prisma.user.findMany({
        where: { id: Number(id) }
    })
    
    res.status(200).json(user)
}

const updateUser = async(req = request, res = response)=>{
    const { id } = req.params
    const { email, name } = req.body
    const user = await prisma.user.update({
        where: { id:Number(id) },
        data: {
            email:email,
            name:name
        },
    })
    res.json(user)
}

const deleteUser = async(req = request, res = response)=>{
    const { id } = req.params
    const user = await prisma.user.delete({
        where: {
        id:Number(id),
        },
    })
    res.json(user)
}

module.exports={
    addUser,
    showUsers,
    showUser,
    updateUser,
    deleteUser
}