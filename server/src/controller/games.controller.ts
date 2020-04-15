import {Request, Response} from 'express';
import pool from '../database';

class GamesController {

  public async getAllGames(req: Request, res: Response): Promise<void>{
    await pool.query('SELECT * from games', (err, result, field) => {
      if (err) throw err;
      res.status(200).json({success: 1, message: 'success', data: result});
    });
  };

  public getGameById(req: Request, res: Response){
    pool.query('DESCRIBE games');
    res.status(200).json({message: `games by ${req.params.id}`})
  };

  public async createGames(req: Request, res: Response): Promise<void> {
    await pool.query('INSERT INTO games set ?', [req.body], (err, result, field) => {
      if (err) throw err;
      res.status(200).json({success: 1, message: 'game created successfully'})
    });
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