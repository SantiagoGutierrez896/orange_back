import express from 'express';
import "dotenv/config.js"
import './config/database.js'
import indexRouter from './router/index.js'
import cors from 'cors'
import morgan from 'morgan'

const server= express(); //crear servidor
const PORT = process.env.PORT || 8080; //definir el puerto
const ready = () => console.log('ready on '+ PORT);
console.log(process.env.NODE_ENV);

//midelwares
server.use(express.json()) //permite entradas y tambien trabajar con formato json
server.use(express.urlencoded({ extended: true })) //permite capturar consultas complejas
server.use(cors())       //para permitir orígenes cruzados (front/back)
server.use(morgan('dev'))  ////para registrar peticiones HTTP

// router
server.use('/api',indexRouter)

//router + server
server.listen(PORT, ready);

