//Obtém as variáveis de ambiente separadamente (.env)
require("dotenv").config();

const express = require("express");
const app = express();

//Modelar e conectar com o MongoDB
const mongoose = require("mongoose");

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => {
    // console.log("Base de Dados Conectada");
    app.emit("Pronto");
  })
  .catch((e) => console.log(e));

const session = require("express-session"); //Salvar o Cookie no computador do cliente {}
const MongoStore = require("connect-mongo"); //Sessões salva dentro da base de dados
const flash = require("connect-flash"); //Mensagens auto destrutivas (Elas somem)

const routes = require("./routes"); //Rotas da aplicação (Home, Contato, ...)
const path = require("path"); //Trabalhar com caminhos
const helmet = require("helmet"); //Recomendação do Express
const csrf = require("csurf"); //Token para os formulário (Segurança)

//Middleware => Funções executas entre as rotas
const {
  middlewareGlobal,
  checkCsrfError,
  csrfMiddleware,
} = require("./src/middlewares/middleware");

app.use(helmet());

//Permissão de Formulários e Json para dentro da Aplicação
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Arquivos Estáticos e podem devem ser acessados diretamente da nossa aplicação
app.use(express.static(path.resolve(__dirname, "public")));

//Configurações da Sessão
const sessionOptions = session({
  secret: "Texto aleatorio",
  store: MongoStore.create({ mongoUrl: process.env.CONNECTION_STRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, //7 dias em milésimos de segundos
    httpOnly: true,
  },
});
app.use(sessionOptions);
app.use(flash());

//Arquivos renderizados na tela
app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(csrf());

//Nossos próprios middleware
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

app.on("Pronto", () => {
  app.listen(3000, () => {
    console.log("Acessar http://localhost:3000");
    console.log("Servidor executando na porta 3000");
  });
});
