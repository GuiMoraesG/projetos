const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
    name: { type: String, require: true },
    salary: { type: Number, require: true },
    approved: { type: Boolean, require: true },
    date: { type: Date, default: Date.now },
});

const HomeModel = mongoose.model('Person', mongooseSchema);
