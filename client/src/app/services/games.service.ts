import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Game, GameData, GameDataResponse } from '../models/game';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor( private http: HttpClient) { }

  getAllGames(): Observable<GameData>{
    return this.http.get<GameData>(`${environment.apiURL}games`, {responseType: 'json'});
  }

  getGameById(id: string): Observable<GameData>{
    return this.http.get<GameData>(`${environment.apiURL}games/${id}`, {responseType: 'json'});
  }

  deleteGame(id: string): Observable<GameData>{
    return this.http.delete<GameData>(`${environment.apiURL}games/${id}`, {responseType: 'json'});
  }

  saveGame(newGame: GameDataResponse["data"]): Observable<GameDataResponse>{
    return this.http.post<GameDataResponse>(`${environment.apiURL}games`, newGame, {responseType: 'json'});
  }

  updateGame(id: string, updatedGame: GameDataResponse["data"]): Observable<GameDataResponse>{
    return this.http.put<GameDataResponse>(`${environment.apiURL}games/${id}`, updatedGame, {responseType: 'json'});
  }

}
