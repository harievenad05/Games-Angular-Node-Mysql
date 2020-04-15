import {Request, Response} from 'express';
import pool from '../database';

class GamesController {

  public async getAllGames(req: Request, res: Response): Promise<void>{

    await pool.query('SELECT * FROM games', (err, result, field) => {
      if (err) throw err;
      res.status(200).json({success: 1, message: 'success', data: result});
    });

  };

  public async getGameById(req: Request, res: Response): Promise<void>{

    const {id} = req.params;
    await pool.query('SELECT * FROM games WHERE id = ?', [id], (err, result, field) => {
      if (err) throw err;
      if(result.length > 0){
        return res.status(200).json({success: 1, message: 'success', data: result});
      } else {
        return res.status(403).json({success: 0, message: 'No record found'});
      }
    });

  };

  public async createGames(req: Request, res: Response): Promise<void> {
    // console.log(req.body)
    await pool.query('INSERT INTO games set ?', [req.body], (err, result, field) => {
      if (err) throw err;
      if(result.affectedRows > 0){
        return  res.status(200).json({success: 1, message: 'game created successfully'});
      } else {
        return res.status(403).json({success: 0, message: 'wrong params'});
      }

    });

  };

  public async updateGames(req: Request, res: Response): Promise<void>{

    let sql = "UPDATE games SET title='"+req.body.title+"', description='"+req.body.description+"', image='"+req.body.image+"'  WHERE id="+req.params.id;

    await pool.query(sql, (err, result, field) => {
      if (err) throw err;
      if(result.affectedRows > 0){
        return res.status(200).json({success: 1, message: 'game updated successfully'})
      } else {
        return res.status(403).json({success: 0, message: 'No record found'});
      }
    });

  };

  public async deleteGames(req: Request, res: Response): Promise<void>{

    const {id} = req.params;

    await pool.query('DELETE FROM games WHERE id = ?', [id], (err, result, field) => {
      if (err) throw err;
      if(result.affectedRows > 0){
        return res.status(200).json({success: 1, message: 'game deleted successfully'});
      } else {
        return res.status(403).json({success: 0, message: 'No record found'});
      }
    });

  };

};

const gamesController = new GamesController();
export default gamesController;