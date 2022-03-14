const mongoose = require('mongoose');

// step 1 :- create the schema for user
const masteracSchema = new mongoose.Schema({
    balance: {type: String, required: true, unique: true},
    createdAt: {type: String, required: true},
    updatedAt: {type: String, required: true},
}, {
    versionKey: false,
    timestamps: true
});
// step 2 :- connect the schema to the users collection
const master = mongoose.model("master", masteracSchema); // users

module.exports = master;

// /balance (required) This is the total balance that the person has in the bank
// createdAt (required)
// updatedAt (required)/