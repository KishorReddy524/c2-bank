const mongoose = require('mongoose');

// step 1 :- create the schema for user
const userSchema = new mongoose.Schema({
    fistName: {type: String, required: true},
    middleName: {type: String, required: false},
    lastName: {type: String, required: true},
    age: {type: String, required: true},
    email: {type: String, required: true},
     address: {type: String, required: true},
      gender: {type: String, required: true,default: "Female"},
       type: {type: String, required: true},
       createdAt: {type: String, required: true},
        updatedAt: {type: String, required: true},

        savingac:[{type: mongoose.Schema.Types.ObjectId, required: false, ref: 'savingacSchema'}],
        masterac:{type: mongoose.Schema.Types.ObjectId, required: false, ref: 'masteracSchema'},
        fixedac:[{type: mongoose.Schema.Types.ObjectId, required: false, ref: 'fixedacSchema'}]



}, {
    versionKey: false,
    timestamps: true
});
// step 2 :- connect the schema to the users collection
const User = mongoose.model("user", userSchema); // users

module.exports = User;


// firstName (required)
// middleName (optional)
// lastName (required)
// age (required)
// email (required )
// address ( required )
// gender ( optional and should default to Female )
// type (optional and it can take value of customer or employee and if not provided then default to customer )
// createdAt (required)
// updatedAt (required)