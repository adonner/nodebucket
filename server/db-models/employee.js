/*============================================
; Title: employee.js
; Author: Adam Donner
; Date: 30 November 2019
; Description:  Employee database model
;===========================================
*/


// start program

const mongoose = require('mongoose');

/**
 * Declare employee database schema
 */
let employeeSchema = mongoose.Schema({
    empId:     {type: String, unique: true, dropDups: true},
    firstname: {type: String},
    lastname:  {type: String} 
});

// Export mongoose model

module.exports = mongoose.model('Employee', employeeSchema);

// end program