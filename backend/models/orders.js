const mongoose = require("mongoose"); //importer mongoose

//Schema de notre commande (order)
const OrdersSchema = new mongoose.Schema({
    Date : {type : Date, require : true},
    Number : {type : Number, require : true}
});


const Orders = mongoose.model('Orders', OrdersSchema); //convertir en modèle orders
module.exports = Orders; //exporter