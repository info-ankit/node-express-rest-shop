const Http = require('http');
const Mongoose = require("mongoose");
// APP INCU.
const app = require('./app');
// CONSTENT.
const port = process.env.PORT || 5000;
const password = process.env.MONGO_DB_PWD || null;
// DB CONN.
Mongoose.connect("mongodb+srv://node-express-conf:"+ password +"@node-rest-conf-rxnlv.mongodb.net/test?retryWrites=true", 
  {useNewUrlParser: true}, 
  (err) => {
    if (err) {
      console.log("UNABLE TO CONNECT DB...");
    }
    else {
      const server = Http.createServer(app);
      server.listen(port, () => console.log(`Listening at: http://localhost:${port}/`));
    }
  }
);
Mongoose.Promise = global.Promise;