import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterPageComponent } from './components/character-page/character-page.component';
import { CharacterGuard } from '../core/guards/character.guard';

const routes: Routes = [
  { path: ':id', component: CharacterPageComponent, canActivate: [CharacterGuard]},
  { path: '**', redirectTo: '/page-introuvable'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule { }
