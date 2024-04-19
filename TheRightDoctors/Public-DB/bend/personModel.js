const mongoose = require('mongoose')

const personModel = mongoose.Schema({
    name: { type: String },
    age: { type: Number },
    gender: { type: String },
    phone: { type: Number }
});

const Person = mongoose.model("Person", personModel);

module.exports = Person;