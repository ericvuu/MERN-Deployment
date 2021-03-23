const express = require("express");
const app = express();
const cors = require("cors");

// beltExamDB is the name of our database
require("./config/mongoose.config")("beltExamDB");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// executing the code in the route file
require("./routes/pet.routes")(app);

const port = 8000;
app.listen(port, () => console.log(`Listening on port: ${port}`));
