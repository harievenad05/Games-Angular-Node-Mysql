import { Component, OnInit, HostBinding } from '@angular/core';
import { GamesService } from '../../services/games.service';
import { GameData, Game, GameDataResponse } from '../../models/game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  dataReceived: GameData;
  games: Game[];

  constructor(private gamesServices: GamesService) { }

  ngOnInit(): void {
    this.getGames();
  };

  getGames(){
    this.gamesServices.getAllGames().subscribe((res: GameData) => {
      this.dataReceived = res
      if(this.dataReceived.success == 0){
        console.log('Not found');
      }
      this.games = this.dataReceived.data;
    }, (err) => {console.log(err)})
  };

  deleteGame(id: string){
    console.log(id);
    this.gamesServices.deleteGame(id).subscribe((res: GameDataResponse) => {
      if(res.success == 1){
       this.getGames();
      }
    }, (err) => {console.log(err)});
  };
}
