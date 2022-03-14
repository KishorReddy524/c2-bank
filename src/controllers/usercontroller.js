const express = require('express');

const router = express.Router();

const crudController = require("./crudcontrollers");
const User = require("../models/usermodels");
const master =require("../models/mAccount");
const saving =require("../models/sAccount");    
const fixed =require("../models/fAccount")
router.get("/",  async function(req, res) {
    const products = await User.find().populate().lean().exec();
    return res.send(products)
})
router.post("/", crudController.post(User));
router.post("/masterAccount", crudController.post(master));
router.post("/savingsAccount", crudController.post(saving));
router.post("/fixedAccount", crudController.post(fixed));
router.get("/:id", crudController.getOne(User));
router.patch("/:id", crudController.updateOne(User));
router.delete("/:id", crudController.deleteOne(User));
module.exports = router;








// const express = require('express');

// const router = express.Router();
// const crudController = require("./crudcontrollers");
// //console.log(crudController)
// const Product = require("../models/usermodels");
// router.get("/",  async function(req, res) {
//     const products = await Product.find().lean().exec();
//     return res.send(products)
// })
// router.post("/", crudController.post(Product));
// router.get("/:id", crudController.getOne(Product));
// router.patch("/:id", crudController.updateOne(Product));
// router.delete("/:id", crudController.deleteOne(Product));
// module.exports = router;