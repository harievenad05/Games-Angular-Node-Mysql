import {Request, Response} from 'express';
import pool from '../database';

class GamesController {

  public getAllGames(req: Request, res: Response){
    pool.query('DESCRIBE games');
    res.status(200).json({message: 'All games'})
  };

  public getGameById(req: Request, res: Response){
    pool.query('DESCRIBE games');
    res.status(200).json({message: `games by ${req.params.id}`})
  };

  public createGames(req: Request, res: Response){
    res.status(200).json({message: 'Creating games'})
  }

  public updateGames(req: Request, res: Response){
    res.status(200).json({message: `Updating games ${req.params.id}`})
  }

  public deleteGames(req: Request, res: Response){
    const id = req.params.id
    res.status(200).json({message: `${id} Deleting games`})
  }

};

const gamesController = new GamesController();
export default gamesController;