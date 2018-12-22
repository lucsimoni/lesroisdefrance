import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HautMoyenAgeComponent } from './pages/haut-moyen-age/haut-moyen-age.component';

const routes: Routes = [
  { path: 'haut-moyen-age', component: HautMoyenAgeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeriodsRoutingModule { }
