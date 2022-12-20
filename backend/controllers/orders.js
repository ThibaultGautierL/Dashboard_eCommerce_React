const Orders = require('../models/orders');

//GET '/Date'
const getAllOrders = (req, res) => {
    Orders.find({}, (err, data)=>{
        if (err){
            return res.json({Error: err});
        }
        return res.json(data);
    })
};

// POST  '/Date'
const newOrders = (req, res) => {
    Orders.findOne({ Date: req.body.Date }, (err, data) => {

        //Si une Order est pas dans la BDD, on l'ajoute
        if (!data) {
            //On va créer un nouvel objet order
            const newOrders = new Orders({
                Date:req.body.Date,
                Number:req.body.Number,
            })

            //On enregistre cette donnée dans la database
            newOrders.save((err, data)=>{
                if(err) return res.json({Error: err});
                return res.json(data);
            })
        //S'il y a une erreur.         
        }else{
            if(err) return res.json(`Something goes wrong, please try again. ${err}`);
            return res.json({message:"This order already exists"});
        }
    }) 
};

//DELETE '/Date'
const deleteAllOrders = (req, res) => {
    Orders.deleteMany({}, err => {
        if(err) {
          return res.json({message: "Delete failed"});
        }
        return res.json({message: "Delete successful"});
    })
};

//GET '/orders/:Number'
const getOneOrder = (req, res) => {
    let Date = req.params.Date; //On recupère la commande

    //On cherche une commande spécifique avec un numéro spécifique
    Orders.findOne({Date:Date}, (err, data) => {
    if(err || !data) {
        return res.json({message: "This Order doesn't exist."});
    }
    else return res.json(data); //Renvoie la data de la commande
    });
};


module.exports = {
    newOrders,
    getAllOrders,
    deleteAllOrders,
    getOneOrder,
};

