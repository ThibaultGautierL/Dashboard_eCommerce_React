//import de .env
require('dotenv').config();

//import de express
const express = require("express");


var cors = require('cors')// - ------------------

//import de mongoose
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const route = require('./routes/orders'); // import des routes
// const indexRouter = require("./routes/index");
// const usersRouter = require("./routes/users");

const app = express();


app.use(cors()) // Use this after the variable declaration  ----------

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', route); //pour utiliser les routes
// app.use("/", indexRouter);
// app.use("/users", usersRouter);

module.exports = app;

app.get("/orders", function (req, res) {
    res.send(req.headers, req.originalUrl, req.method, req.body);
  });
  
  const listener = app.listen(process.env.PORT || 3001, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})


 //etablis la connection avec la data base
 mongoose.connect(
    'mongodb+srv://faritaz:SalutCmoi123@cluster0.xcy8x7y.mongodb.net/?retryWrites=true&w=majority',
     { useUnifiedTopology: true, useNewUrlParser: true},
     (err) => {
         if (err) return console.log("Error: ", err);
         console.log("MongoDB Connection -- Ready state is:", mongoose.connection.readyState);
     }
 );
