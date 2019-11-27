const mongoose = require('mongoose');

let employeeSchema = mongoose.Schema({
    empId:     {type: String, unique: true, dropDups: true},
    firstname: {type: String},
    lastname:  {type: String} 
});

module.exports = mongoose.model('Employee', employeeSchema);