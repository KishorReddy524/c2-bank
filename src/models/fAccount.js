const mongoose = require('mongoose');

// step 1 :- create the schema for user
const fixedacSchema = new mongoose.Schema({
    account_number: {type: String, required: true, unique:true},
    balance: {type: String, required: true},
    intrestRate: {type: String, required: true},
    startDate: {type: String, required: true},
    maturityDate: {type: String, required: true},
    createdAt: {type: String, required: true},
    updatedAt: {type: String, required: true},
}, {
    versionKey: false,
    timestamps: true
});
// step 2 :- connect the schema to the users collection
const fixed = mongoose.model("fixed", fixedacSchema); // users

module.exports = fixed;

// account_number ( required and should be unique)
// balance ( required )
// interestRate ( required )
// startDate ( required )
// maturityDate (required )
// createdAt (required)
// updatedAt (required)