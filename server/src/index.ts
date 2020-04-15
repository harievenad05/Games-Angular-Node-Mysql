import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/index.routes';
import gamesRoute from './routes/games.routes';

class Sever {

  public app: Application

    constructor() {
      this.app = express();
      this.config();
      this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }
    routes(): void {
      this.app.use('/api', indexRoutes);
      this.app.use('/api', gamesRoute);
     }
    start(): void {
        this.app.listen(this.app.get('port'), () => {
          console.log(`Sever is running on port ${this.app.get('port')}`);
        })
  }

};

const server = new Sever();
server.start()

