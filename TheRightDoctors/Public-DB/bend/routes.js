const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('./conn');
const Person = require('./personModel');

router.post('/api/person', async(req,res)=>{

    const { name, age, gender, phone } = req.body;


    try {
        const existingPerson = await Person.findOne({ phone: phone });
        if (existingPerson) {
            return res.status(400).json({
                error: "A person with this phone number already exists"
            });
        }

        const person = new Person({
            name,
            age,
            gender,
            phone
        })
        await person.save();
        res.json({
            message: "person data uploaded successfully"
        });
        
    } catch (error) {
        res.status(500).json({
            error: "couldnt upload person to db"
        });
    }

});

router.get('/api/person', async (req, res) => {
    try {
        const persons = await Person.find({}, {__v: 0}); 
        res.json(persons); 
    } catch (error) {
        res.status(500).json({
            error: "Error retrieving data from the database"
        });
    }
});


router.put('/api/person/:id', async (req, res) => {
    const { id } = req.params;
    const { name, age, gender, phone } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
            error: "Invalid ID format"
        });
    }

    try {
        var existingPerson = await Person.findOne({ phone: phone });
        if (existingPerson && existingPerson._id!==id) {
            return res.status(400).json({
                error: "A person with this phone number already exists"
            });
        }
        var existingPerson = await Person.findOne({ _id: id });
        if (!existingPerson) {
            return res.status(404).json({
                error: "Person not found"
            });
        }
        const person = await Person.findByIdAndUpdate(id, {
            name, age, gender, phone
        }, { new: true });  // `new: true` will return the updated document

        res.json({
            message: "Person data updated successfully",
            person
        });
    } catch (error) {
        res.status(500).json({
            error: "Couldn't update the person in the DB"
        });
    }
});

router.delete('/api/person/:id', async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
            error: "Invalid ID format"
        });
    }

    try {
        const person = await Person.findByIdAndDelete(id);

        if (!person) {
            return res.status(404).json({
                error: "Person not found"
            });
        }

        res.json({
            message: "Person deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            error: "Couldn't delete the person from the DB"
        });
    }
});




module.exports = router;