const mongoose = require("mongoose");
// const dbName = "beltExamDB"

module.exports = (dbName) => {
  mongoose
    .connect(`mongodb://localhost/${dbName}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => console.log(`Connected to ${dbName} datatbase`))
    .catch((err) =>
      console.log("Something went wrong when connecting to the database", err)
    );
};
