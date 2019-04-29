import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterPageComponent } from './components/character-page/character-page.component';
// import { PeriodGuard } from '../core/guards/period.guard';

const routes: Routes = [
  { path: '', component: CharacterPageComponent/*, canActivate: [PeriodGuard]*/},
  { path: '**', redirectTo: '/page-introuvable'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule { }
