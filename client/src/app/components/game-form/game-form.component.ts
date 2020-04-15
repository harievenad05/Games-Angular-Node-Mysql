import { Component, OnInit, HostBinding } from '@angular/core';
import { Game, GameDataResponse } from '../../models/game';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.scss']
})
export class GameFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  gameDataRes: GameDataResponse;
  game: Game = {
    title: '',
    description: '',
    image: ''
  };

  constructor(private gameService: GamesService) { }

  ngOnInit(): void {
  }

  saveNewGame(){
    this.gameService.saveGame(this.game).subscribe((res: GameDataResponse) => {
      console.log(res)
    }, (err) => {console.log(err)})
  };
};
