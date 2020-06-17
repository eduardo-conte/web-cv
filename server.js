const express = require("express");
const bodyParser = require("body-parser");
var favicon = require('serve-favicon')
//var cookieParser = require("cookie-parser");
// require('dotenv').config();//Usa o arquivo .env para seta variáveis de ambiente
//const cors = require("cors");
// const fs = require('fs');
const app = express();


// const sessions = require("client-sessions");
// const auth = require("./auth");
// const settings = require("./settings");



//Settings
/*var corsOptions = {
  origin: "http://localhost:8081"
};
*/
app.set("view engine", "ejs");

//Middleware
//app.use(cors(corsOptions));
//app.use(cookieParser());
app.use(bodyParser.json());// parse requests of content-type - application/json
app.use(bodyParser.urlencoded({ extended: true }));// parse requests of content-type - application/x-www-form-urlencoded
// app.use(sessions({
//     cookieName: "session",
//     secret: settings.SESSION_SECRET_KEY,
//     duration: settings.SESSION_DURATION,
//     activeDuration: settings.SESSION_EXTENSION_DURATION,
//     cookie: {
//         httpOnly: true,
//         ephemeral: settings.SESSION_EPHEMERAL_COOKIES,
//         secure: settings.SESSION_SECURE_COOKIES
//     }
// }));
// app.use(auth.loadUserFromSession);

app.use(express.static("./public"));
app.use(favicon('./public/img/favicon.png'));

//Database
// const db = require("./app/models");
// db.sequelize.sync();
/*db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});*/

//Rotas
require("./app/routes/index.routes")(app);//importa as rotas para o app

// error handling
// app.use((err, req, res, next) => {
//   console.log(err)
//   let erro_info = err;
//   res.status(500).render('erro.ejs',{erro_info:erro_info});
// });
//404 Not Found
// app.use(function(req, res, next) {
//   let erro_info = "Página não encontrada!"
//   res.status(404).render('erro.ejs',{erro_info:erro_info});
// });


//Porta e listener
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
