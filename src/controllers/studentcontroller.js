const mongoose = require('mongoose');
const student = require('../modals/student');


const studentController = {
    createUser: async (req, res) => {
        try {
            const createUser = await student(req.body).save()
            res.status(200).send(createUser);
        } catch (error) { res.status(400).send(error); }
    },
    
    getUsers:  async (req, res) => {    
        try {
            const userdata = await student.find();
            res.status(200).send(userdata);
        } catch (error) { res.status(400).send(error); }
    },
    
    getUser:  async (req, res) => {
        const _id =  req.params.id;    
        try {
            const userdata = await student.findById(_id);
            res.status(200).send(userdata);
        } catch (error) { res.status(400).send(error); }
    },
    
    updateUser:  async (req, res) => {
        const _id =  req.params.id;    
        try {
            const userdata = await student.findByIdAndUpdate(_id, req.body,{
                new :true
            });
            res.status(200).send(userdata);
        } catch (error) { res.status(400).send(error); }
    },
    
    deleteUser:  async (req, res) => {
        try {
            const userdata = await student.findByIdAndDelete( req.params.id);
            if (!req.params.id) {
                res.status(400).send();
            } else {
                res.status(200).send(userdata);
            }            
        } catch (error) { res.status(400).send(error); }
    }    
}

module.exports = studentController;