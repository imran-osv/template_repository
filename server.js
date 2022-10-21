const express = require("express");
const bodyParser = require("body-parser");

//cors middlewares  : By default requests from any other origins will be restricted by the browser.
//For example, while you are still in the development stage - 
//if you are using a frontend library such as React, your front end application will be served on
// http://localhost:3000. Meanwhile, your Express server might be running on a different port such as
// http://localhost:2020.


const cors = require("cors");  
const db = require("./app/models");

const app = express ();

var corsOptions = { origin: "http://localhost:8081"};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true}));


// simple route
app.get("/",(req, res)=> {
            res.json({ message:"Welcome to the Template application."})

})

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen( PORT, ()=>{
    console.log(`server is running on the port ${PORT}`);
}

)

db.mongoose.connect(db.url,
                    { useNewUrlParser:true,
                      useUnifiedTopology: true}
                   )
                   .then(
                            ()=>{
                                console.log("Connected to the database!");
                            }
                   )
                   .catch(
                            err=> {
                                console.log("Cannot connect to the database!", err);
                                process.exit();
                            }
                   );