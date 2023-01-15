import mongoose from "mongoose";

//Defining schema
const studentSchema = new mongoose.Schema({
    name:{type:String, required:true, trim:true},
    sem:{type:Number, required:true, min:1,max:10},
    course:{type:String, required:true}
})

//Model
const StudentModel = mongoose.model("student",studentSchema);

export default StudentModel