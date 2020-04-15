import { Component, OnInit, HostBinding } from '@angular/core';
import { Game, GameDataResponse } from '../../models/game';
import { GamesService } from '../../services/games.service';
import { NgForm } from '@angular/forms';

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
      this.resetForm();
    }, (err) => {console.log(err)})
  };

  resetForm(form?: NgForm){
    if (form = null)
      form.resetForm();
    this.game.title = '';
    this.game.description = '';
    this.game.image = '';
  }
};
