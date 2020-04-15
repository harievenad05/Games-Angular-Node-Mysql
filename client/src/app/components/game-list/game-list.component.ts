import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service';
import { GameData, Game } from '../../models/game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  dataReceived: GameData;
  games: Game[];

  constructor(private gamesServices: GamesService) { }

  ngOnInit(): void {
    this.gamesServices.getAllGames().subscribe((res: GameData) => {
      this.dataReceived = res
      if(this.dataReceived.success == 0){
        console.log('Not found')
      }
      this.games = this.dataReceived.data
      console.log(this.games)
    }, (err) => {console.log(err)})

  }

}
