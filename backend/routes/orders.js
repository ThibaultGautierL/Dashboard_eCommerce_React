const express = require('express'); //import express
const router  = express.Router(); 
const ordersController = require('../controllers/orders'); 
//importer multer
const multer = require('multer');
const upload = multer();



router.post("/orders", upload.none(), ordersController.newOrders);

router.get('/orders', ordersController.getAllOrders);
// router.post('/orders', ordersController.newOrders); 
router.delete('/orders', ordersController.deleteAllOrders);


router.get('/orders/:Date', ordersController.getOneOrder);


 
module.exports = router; // export to use in server.js
