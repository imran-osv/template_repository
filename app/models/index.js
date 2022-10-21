//require() is a built-in function to include external modules that exist in separate files. 
//require() statement basically reads a JavaScript file, 
//executes it, and then proceeds to return the export object
const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
//What are Promises? A promise is basically an advancement of callbacks in Node.  
//In other words, a promise is a JavaScript object which is used to handle all the asynchronous data operations. 
//While developing an application you may encounter that you are using a lot of nested callback functions. 


mongoose.Promise = global.Promise;


const db = {};

db.mongoose = mongoose;
db.url = dbConfig.url;
db.template = require("./template.model.js")(mongoose);

//Module in Node. js is a simple or complex functionality organized in 
//single or multiple JavaScript files which can be reused throughout the Node. js application
module.exports = db;
