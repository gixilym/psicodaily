const mongoose = require("mongoose"),
  DB_URI = "mongodb://localhost:27017/psicodaily";

mongoose.connect(
  DB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    keepAlive: true,
  },
  err => {
    if (err) {
      console.error("Conexión fallida");
    } else {
      console.log("DB conectado");
    }
  }
);
