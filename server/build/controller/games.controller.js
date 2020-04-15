"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class GamesController {
    getAllGames(req, res) {
        database_1.default.query('DESCRIBE games');
        res.status(200).json({ message: 'All games' });
    }
    ;
    getGameById(req, res) {
        database_1.default.query('DESCRIBE games');
        res.status(200).json({ message: `games by ${req.params.id}` });
    }
    ;
    createGames(req, res) {
        res.status(200).json({ message: 'Creating games' });
    }
    updateGames(req, res) {
        res.status(200).json({ message: `Updating games ${req.params.id}` });
    }
    deleteGames(req, res) {
        const id = req.params.id;
        res.status(200).json({ message: `${id} Deleting games` });
    }
}
;
const gamesController = new GamesController();
exports.default = gamesController;
