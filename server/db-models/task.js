/*============================================
; Title: task.js
; Author: Adam Donner
; Date: 2 December 2019
; Description:  Task database model
;===========================================
*/


// start program

const mongoose = require('mongoose');

let taskSchema = mongoose.Schema({
    text: {type: String}
});

module.exports = taskSchema;

// end program