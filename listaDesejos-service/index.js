require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const listaDesejosRoutes = require('./src/routes/listaDesejosRoutes');

const app = express();
app.use(express.json());

app.use(listaDesejosRoutes)

// Credentials
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS
mongoose
    .connect(`mongodb+srv://${dbUser}:${dbPassword}@lucasolidev.tlwnsrj.mongodb.net/?retryWrites=true&w=majority`,
    )
    .then(() => {
        app.listen(3333)
        console.log("Conectou ao Banco de Dados!")
    })
    .catch((err) => console.log(err));