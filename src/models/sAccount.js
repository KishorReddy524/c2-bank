const mongoose = require('mongoose');

// step 1 :- create the schema for user
const savingacSchema = new mongoose.Schema({
    account_number: {type: String, required: true, unique:true},
    balance: {type: String, required: true},
    intrestRate: {type: String, required: true},
    createdAt: {type: String, required: true},
    updatedAt: {type: String, required: true},
}, {
    versionKey: false,
    timestamps: true
});
// step 2 :- connect the schema to the users collection
const saving = mongoose.model("saving", savingacSchema); // users

module.exports = saving;

 

// account_number ( required and should be unique)
// balance ( required )
// interestRate ( required )
// createdAt (required)
// updatedAt (required)
