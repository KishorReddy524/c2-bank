const mongoose = require('mongoose');

// step 1 :- create the schema for user
const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    address: {type: String, required: false},
    ISFC: {type: String, required: true},
    MICR: {type: String, required: true},
    createdAt: {type: Date, required: true},
    updatedAt: {type: Date, required: true},
      



}, {
    versionKey: false,
    timestamps: true
});
// step 2 :- connect the schema to the users collection
const User = mongoose.model("user", userSchema); // users

module.exports = User;

// name (required)
// address (required)
// IFSC (required and string)
// MICR (required and number )
// createdAt (required)
// updatedAt (required)