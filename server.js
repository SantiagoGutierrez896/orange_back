import express from 'express';
import 'dotenv/config.js'
import './config/database.js'

const server = express(); // crear servidor
const PORT = process.env.PORT || 8080; // establecer PORT
const ready = ()=> console.log('server ready on port: ' + PORT)
console.log(process.env.NODE_ENV);

//midelwares
server.use(express.json())
server.use(express.urlencoded({ extended: false }))

//router + server
server.listen(PORT,ready);

