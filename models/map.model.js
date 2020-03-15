/*
Import
*/
const mongoose = require('mongoose');
const { Schema } = mongoose;
//

/*
Definition
*/
const MongooseSchema = new Schema({
    ID : integer, 
    Adresse : String,
    CodePostal : integer,
    Ville : String,
    BailleurSocial: String, 
    Total_logement : integer,
    mode_réalisation : String,

});
//


/*
Export
*/
module.exports =  mongoose.model('map', MongooseSchema);
//