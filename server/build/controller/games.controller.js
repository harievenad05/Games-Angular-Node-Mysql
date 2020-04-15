"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class GamesController {
    getAllGames(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM games', (err, result, field) => {
                if (err)
                    throw err;
                res.status(200).json({ success: 1, message: 'success', data: result });
            });
        });
    }
    ;
    getGameById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('SELECT * FROM games WHERE id = ?', [id], (err, result, field) => {
                if (err)
                    throw err;
                if (result.length > 0) {
                    return res.status(200).json({ success: 1, message: 'success', data: result });
                }
                else {
                    return res.status(403).json({ success: 0, message: 'No record found' });
                }
            });
        });
    }
    ;
    createGames(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO games set ?', [req.body], (err, result, field) => {
                if (err)
                    throw err;
                if (result.affectedRows > 0) {
                    return res.status(200).json({ success: 1, message: 'game created successfully' });
                }
                else {
                    return res.status(403).json({ success: 0, message: 'wrong params' });
                }
            });
        });
    }
    ;
    updateGames(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = "UPDATE games SET title='" + req.body.title + "', description='" + req.body.description + "', image='" + req.body.image + "'  WHERE id=" + req.params.id;
            yield database_1.default.query(sql, (err, result, field) => {
                if (err)
                    throw err;
                if (result.affectedRows > 0) {
                    return res.status(200).json({ success: 1, message: 'game updated successfully' });
                }
                else {
                    return res.status(403).json({ success: 0, message: 'No record found' });
                }
            });
        });
    }
    ;
    deleteGames(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM games WHERE id = ?', [id], (err, result, field) => {
                if (err)
                    throw err;
                if (result.affectedRows > 0) {
                    return res.status(200).json({ success: 1, message: 'game deleted successfully' });
                }
                else {
                    return res.status(403).json({ success: 0, message: 'No record found' });
                }
            });
        });
    }
    ;
}
;
const gamesController = new GamesController();
exports.default = gamesController;
