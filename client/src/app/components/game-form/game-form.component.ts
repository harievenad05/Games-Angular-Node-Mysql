import { Component, OnInit, HostBinding } from '@angular/core';
import { Game, GameDataResponse } from '../../models/game';
import { GamesService } from '../../services/games.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.scss']
})
export class GameFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  gameDataRes: GameDataResponse;
  edit: boolean = false;
  game: Game = {
    id: 0,
    title: '',
    description: '',
    image: '',
    created_at: new Date()
  };

  constructor(private gameService: GamesService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const gameParam = this.activeRoute.snapshot.params
    if(gameParam.id){
      this.editGameRouteAction(gameParam.id)
    };

  };

  editGameRouteAction(id: string){
    this.gameService.getGameById(id).subscribe((res: GameDataResponse) => {
      this.game = res.data[0]
      this.edit = true;
    }, (err) => {});
  };

  saveNewGame(){
    delete this.game.id;
    delete this.game.created_at;
    this.gameService.saveGame(this.game).subscribe((res: GameDataResponse) => {
      if(res.success){
        this.resetForm();
        this.router.navigate(['games']);
      }
    }, (err) => {console.log(err)})
  };

  resetForm(form?: NgForm){
    if (form = null)
      form.resetForm();
    this.game.title = '';
    this.game.description = '';
    this.game.image = '';
  }

  updateGameAction(id: string){
    delete this.game.id;
    delete this.game.created_at;
    this.gameService.updateGame(id, this.game).subscribe((res: GameDataResponse) => {
      if(res.success){
        this.resetForm();
        this.router.navigate(['games']);
      }
    }, (err) => {console.log(err)});
  }
};
