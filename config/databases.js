let mongoose = require("mongoose");

const uri =
  "mongodb+srv://tbechir76:Alitabia19082003!@myprojectcluster.egemw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const database = "project"; // REPLACE WITH YOUR DB NAME
const connectDb = () => {
  mongoose
    .connect(uri)
    .then(() => console.log("Database connection successful"))
    .catch(() => {
      console.log("failed to connect");
    });
};
// connectDb();
module.exports = {connectDb};
