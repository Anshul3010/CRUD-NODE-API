const mongoose = require('mongoose');
const CostumerSchema  = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    dob:{
        type:String,
        required:true,
    },
    age:Number,
    city:String

});

const Costumer = mongoose.model('Costumer',CostumerSchema);

module.exports = Costumer;

