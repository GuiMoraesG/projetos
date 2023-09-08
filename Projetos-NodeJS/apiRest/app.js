import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './src/database';
import express from 'express';

import homeRouter from './src/routes/home';
import userRouter from './src/routes/user';
import tokenRouter from './src/routes/token';
import alunoRouter from './src/routes/alunos';
import fotoRouter from './src/routes/Foto';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', homeRouter);
    this.app.use('/user/', userRouter);
    this.app.use('/token/', tokenRouter);
    this.app.use('/alunos/', alunoRouter);
    this.app.use('/foto/', fotoRouter);
  }
}

export default new App().app;
