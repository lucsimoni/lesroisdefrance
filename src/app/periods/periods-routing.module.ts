import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HautMoyenAgeComponent } from './pages/haut-moyen-age/haut-moyen-age.component';
import { PeriodComponent } from './pages/period/period.component';

const routes: Routes = [
  { path: 'haut-moyen-age', component: HautMoyenAgeComponent},
  { path: 'test', component: PeriodComponent}
  // TODO si param vide "" renvoi vers notfound
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeriodsRoutingModule { }
