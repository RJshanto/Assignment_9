const mongoose = require("mongoose");
const { Schema } = mongoose; 

// create a schema..
const boookSchema = new Schema(
    {
        title:{
            type:String,
            trim: true,
            required: true
        },
        author:{
            type:String,
            trim: true,
            required: true
        },
        description:{
            type:String,
            trim: true
        },
        publishedYear:{
            type:Number,
            trim: true
        }
    },
    {timestamps: true, versionKey: false}
);
// create a model..
const bookModel =  mongoose.model('book',boookSchema);
module.exports = bookModel;