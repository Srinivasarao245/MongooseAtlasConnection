const mongoose = require('mongoose');
var { Schema }= mongoose;
// Create a Schema
const studentSchema = new Schema({
    name: {type:String},
    gender: {type:String},
    age: {type:Number},
    weight: {type:Number},
});
var Student = mongoose.model('Student',studentSchema);
module.exports=Student;