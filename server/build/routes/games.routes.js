"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const games_controller_1 = __importDefault(require("../controller/games.controller"));
class GamesRoute {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/games', games_controller_1.default.getAllGames);
        this.router.get('/games/:id', games_controller_1.default.getGameById);
        this.router.post('/games', games_controller_1.default.createGames);
        this.router.put('/games/:id', games_controller_1.default.updateGames);
        this.router.delete('/games/:id', games_controller_1.default.deleteGames);
    }
}
const gamesRoute = new GamesRoute();
exports.default = gamesRoute.router;
