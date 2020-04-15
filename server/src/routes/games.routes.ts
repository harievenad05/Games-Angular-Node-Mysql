import { Router } from 'express';
import gamesController from '../controller/games.controller';

class GamesRoute {
  public router: Router = Router();

  constructor(){
    this.config()
  }

  config(){
    this.router.get('/games', gamesController.getAllGames);
    this.router.get('/games/:id', gamesController.getGameById);
    this.router.post('/games', gamesController.createGames);
    this.router.put('/games/:id', gamesController.updateGames);
    this.router.delete('/games/:id', gamesController.deleteGames);
  }

}

const gamesRoute = new GamesRoute();
export default gamesRoute.router;