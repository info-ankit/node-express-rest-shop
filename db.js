const Mongoose = require("mongoose");
const password = process.env.MONGO_DB_PWD;

Mongoose.connect("mongodb+srv://node-express-conf:"+ password +"@node-rest-conf-rxnlv.mongodb.net/test?retryWrites=true", {
  // useMongoClient: true,
  useNewUrlParser: true
});