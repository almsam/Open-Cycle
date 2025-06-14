const mongoose = require('mongoose');

const CycleSchema = new mongoose.Schema({
    //User provided information
    menstruationStart: Date,
    menstruationEnd: Date,
    ovulationDate: Date, 
    userNote: String,
    //App provided information
    fertileWindowStart: Date,
    fertileWindowEnd: Date,
    averageCycleLength: Number //Average in days, across last 6 months 
});

module.exports = mongoose.model('Cycle', CycleSchema);