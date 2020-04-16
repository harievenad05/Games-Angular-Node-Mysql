import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameFormComponent } from './components/game-form/game-form.component';


const routes: Routes = [
  {path: 'games', pathMatch: 'full', component: GameListComponent},
  {path: 'add-games', component: GameFormComponent},
  {path: 'edit-game/:id', component: GameFormComponent},
  {path: '', pathMatch: 'full', redirectTo: 'games'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
