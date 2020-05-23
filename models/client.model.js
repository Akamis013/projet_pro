const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let client = new Schema({
   name: {
      type: String
   },
   prenom: {
      type: String
   },
   email: {
      type: String
   },
   phoneNumber: {
      type: Number
   },
   departement: {
    type: Number
    },
    sujet: {
        type: Number
     },
     message: {
        type: String
     }
}, {
   collection: 'client'
})

module.exports = mongoose.model('client', client)