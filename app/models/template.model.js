//Define the Mongoose Model

//require() is a built-in function to include external modules that exist in separate files. 
//require() statement basically reads a JavaScript file, 
//executes it, and then proceeds to return the export object
const mongoose = require("mongoose");


const templateSchema = new mongoose.Schema(
                                        {
                                            account:{
                                                type:String,
                                                required:true
                                            },
                                            balance:{
                                                required: Number,
                                                default: 0
                                            }
                                        }
                                      ) ;

 const Template = mongoose.model("Template",templateSchema) ;
 
 module.exports = Template;